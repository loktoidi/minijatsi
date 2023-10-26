import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Button } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import styles from '../style/style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Container, Row, Col } from 'react-native-flex-grid';
import BackgroundContainer from './BackgroundContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NBR_OF_DICES = 5;
const NBR_OF_THROWS = 3;
const MIN_SPOT = 1;
const MAX_SPOT = 6;
const BONUS_POINTS_LIMIT = 63;
const BONUS_POINTS = 35;
const NBR_OF_SCOREBOARD_ROWS = 5;
const NBR_OF_ROUNDS = 6;

const getRandomDiceNumber = () => Math.floor(Math.random() * 6 + 1);

export default function Gameboard({ navigation, route }) {
  const [playerName, setPlayerName] = useState('');
  const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
  const [status, setStatus] = useState('Throw dices');
  const [gameEndStatus, setGameEndStatus] = useState(false);
  const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
  const [diceSpots, setDiceSpots] = useState(new Array(NBR_OF_DICES).fill(0));
  const [selectedDicePoints, setSelectedDicePoints] = useState(new Array(MAX_SPOT).fill(false));
  const [dicePointsTotal, setDicePointsTotal] = useState(new Array(MAX_SPOT).fill(0));
  const [selectedDiceValue, setSelectedDiceValue] = useState(null);
  const [totalPoints, setTotalPoints] = useState(0);
  const [pointsAwayFromBonus, setPointsAwayFromBonus] = useState(BONUS_POINTS_LIMIT);
  const [currentRound, setCurrentRound] = useState(1);
  const [newRoundStarted, setNewRoundStarted] = useState(false);

  // Initialize the board with empty values
  const [board, setBoard] = useState(new Array(NBR_OF_DICES).fill(null));

  useEffect(() => {
    if (playerName === '' && route.params?.player) {
      setPlayerName(route.params.player);
    }
  }, []);

  // Function to save points to AsyncStorage
  const savePointsToAsyncStorage = async () => {
    try {
      let scoreboard = await AsyncStorage.getItem('scoreboard');
      if (!scoreboard) {
        scoreboard = [];
      } else {
        scoreboard = JSON.parse(scoreboard);
      }

      const gameData = {
        playerName,
        dateTime: new Date().toString(),
        totalPoints, // Save the total points with bonus
      };

      scoreboard.push(gameData);

      scoreboard.sort((a, b) => b.totalPoints - a.totalPoints);

      if (scoreboard.length > NBR_OF_SCOREBOARD_ROWS) {
        scoreboard.pop();
      }

      await AsyncStorage.setItem('scoreboard', JSON.stringify(scoreboard));

      console.log('Points saved to AsyncStorage');
    } catch (error) {
      console.error('Error saving game data:', error);
    }
  };

  const dicesRow = [];
  const colStyle = {
    marginTop: 5,
    marginLeft: -6,
    width: 70,
    height: 70,
  };

  for (let dice = 0; dice < NBR_OF_DICES; dice++) {
    dicesRow.push(
      <Col key={'dice' + dice} style={colStyle}>
        <Pressable
          key={'dice' + dice}
          onPress={() => selectDice(dice)}
        >
          <MaterialCommunityIcons
            name={board[dice] || 'dice-1'} // Use the board state here
            key={'dice' + dice}
            size={55}
            color={getDiceColor(dice)}
          />
        </Pressable>
      </Col>
    );
  }

  const pointsRow = [];
  for (let spot = 0; spot < MAX_SPOT; spot++) {
    pointsRow.push(
      <Col key={'pointsRow' + spot}>
        <Text style={styles.pointsRowText}>
          {getSpotTotal(spot)}
        </Text>
      </Col>
    );
  }

  const pointsToSelectRow = [];
  for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
    pointsToSelectRow.push(
      <Col key={'buttonsRow' + diceButton}>
        <Pressable
          key={'buttonsRow' + diceButton}
          onPress={() => selectDicePoints(diceButton)}
        >
          <MaterialCommunityIcons
            name={'numeric-' + (diceButton + 1) + '-circle'}
            key={'buttonsRow' + diceButton}
            size={35}
            color={getDicePointsColor(diceButton)}
          />
        </Pressable>
      </Col>
    );
  }

  const startNewRound = () => {
    setNbrOfThrowsLeft(NBR_OF_THROWS);
    setStatus(<Text style={styles.statusTextStyle1}>Throw dices</Text>);
    setCurrentRound(currentRound + 1);
    setNewRoundStarted(false);
    setSelectedDices(new Array(NBR_OF_DICES).fill(false)); // Clear previous dice selections
  };

  const startNextRound = () => {
    if (newRoundStarted || selectedDicePoints.some((point) => point)) {
      startNewRound();
    } else if (!newRoundStarted) {
      setNewRoundStarted(true);
    } else {
      setStatus(<Text style={styles.statusTextStyle2}>Select and add points before new round</Text>);
    }
  
    if (currentRound >= NBR_OF_ROUNDS) {
      setGameEndStatus(true);
      setStatus(<Text style={styles.statusTextStyle3}>All rounds are over. GAME OVER.</Text>);
    }
  };

  const BONUS_POINTS = 35;

  const selectDicePoints = (i) => {
    if (nbrOfThrowsLeft === 0 && selectedDiceValue !== null) {
      if (i === selectedDiceValue - 1) {
        let selectedPoints = [...selectedDicePoints];
        let points = [...dicePointsTotal];
        if (!selectedPoints[i]) {
          selectedPoints[i] = true;
          let nbrOfDices = diceSpots.reduce((total, x) => (x === selectedDiceValue ? total + 1 : total), 0);
          points[i] = nbrOfDices * selectedDiceValue;

          let newTotalPoints = points.reduce((acc, val) => acc + val, 0);
          let pointsAway = BONUS_POINTS_LIMIT - newTotalPoints;

          pointsAway = Math.max(0, pointsAway);

          if (pointsAway === 0) {
            newTotalPoints += BONUS_POINTS;
          }

          setTotalPoints(newTotalPoints);
          setPointsAwayFromBonus(pointsAway);
        } else {
          setStatus(
            <Text style={styles.statusTextStyle3}>
              {"Duplicate selection from " + selectedDiceValue}
            </Text>
          );
          return points[i];
        }
        setDicePointsTotal(points);
        setSelectedDicePoints(selectedPoints);

        if (selectedPoints.every((point) => point)) {
          setGameEndStatus(true);
          if (currentRound <= NBR_OF_ROUNDS) {
            setStatus(<Text style={styles.statusTextStyle3}>{`GAME OVER. Save your points and check scoreboard.`}</Text>);
          } else {
            setStatus(<Text style={styles.statusTextStyle3}>All rounds are over. GAME OVER.</Text>);
          }
          return points[i];
        }
        return points[i];
      } else {
        setStatus(<Text style={styles.statusTextStyle3}>You can only select points that match the selected dice value.</Text>);
      }
    } else {
      setStatus(<Text style={styles.statusTextStyle1}>{`Throw ${NBR_OF_THROWS} times before setting points`}</Text>);
    }
  };

  const throwDices = () => {
    if (nbrOfThrowsLeft === 0 && !gameEndStatus) {
      setStatus(<Text style={styles.statusTextStyle2}>Select and add points before new round</Text>);
      return 1;
    } else if (nbrOfThrowsLeft === 0 && gameEndStatus) {
      if (currentRound <= NBR_OF_ROUNDS) {
        setStatus(<Text style={styles.statusTextStyle3}>{`Round ${currentRound} is GAME OVER. Click the button to start the next round...`}</Text>);
      } else {
        setStatus(<Text style={styles.statusTextStyle3}>GAME OVER. Save your points.</Text>);
      }
      setNewRoundStarted(true);
      return 1;
    }
    let spots = [...diceSpots];
    for (let i = 0; i < NBR_OF_DICES; i++) {
      if (!selectedDices[i]) {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        board[i] = 'dice-' + randomNumber;
        spots[i] = randomNumber;
      }
    }
    setNbrOfThrowsLeft(nbrOfThrowsLeft - 1);
    setStatus(<Text style={styles.statusTextStyle1}>Select and throw dices again</Text>);
    setDiceSpots(spots);
  }

  function getSpotTotal(i) {
    return dicePointsTotal[i];
  }

  const selectDice = (i) => {
    if (nbrOfThrowsLeft < NBR_OF_THROWS && !gameEndStatus) {
      let dices = [...selectedDices];
      dices[i] = !dices[i];
      setSelectedDices(dices);
      setSelectedDiceValue(dices[i] ? diceSpots[i] : null);
    } else {
      setStatus(<Text style={styles.statusTextStyle2}>You have to throw dices first.</Text>);
    }
  }

  function getDiceColor(i) {
    return selectedDices[i] ? 'black' : '#e7e41b';
  }

  function getDicePointsColor(i) {
    return (selectedDicePoints[i] && !gameEndStatus) ? 'black' : '#e7e41b';
  }

  return (
    <BackgroundContainer>
      <>
        <Header />
        <View>
          <Text style={styles.playerNameText}>Player: {playerName}</Text>
          <Text style={styles.throwsLeftText}>
            Round {currentRound} - Throws left: {nbrOfThrowsLeft}
          </Text>
          <Container fluid>
            <Row style={styles.row}>{dicesRow}</Row>
          </Container>

          <Text>{status}</Text>

          <View style={styles.buttonRow}>
            <View style={styles.buttonContainer}>
              <Pressable onPress={() => throwDices()} style={styles.button} disabled={gameEndStatus}>
                <Text style={styles.buttonText}>THROW DICES</Text>
              </Pressable>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable onPress={() => startNextRound()} style={styles.button} disabled={gameEndStatus || (currentRound <= NBR_OF_ROUNDS && !selectedDicePoints.some((point) => point))}>
                <Text style={styles.buttonText}>Start Next Round</Text>
              </Pressable>
            </View>
          </View>

          <Container fluid>
            <Row style={styles.pointsRow}>{pointsRow}</Row>
          </Container>

          <Container fluid>
            <Row style={styles.pointsToSelectRow}>{pointsToSelectRow}</Row>
          </Container>

          <Text style={styles.totalPointsText}>Total Points: {totalPoints}</Text>
          <Button title="Save Points" onPress={savePointsToAsyncStorage} />

          <Text style={styles.pointsAwayFromBonusText}>Points Away from Bonus: {pointsAwayFromBonus}</Text>

        </View>
        <Footer />
      </>
    </BackgroundContainer>
  );
}