import React from 'react';
import { Text, View, Pressable } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import styles from '../style/style';
import { NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS } from './constants/Game';
import BackgroundContainer from './BackgroundContainer'; // Import the BackgroundContainer component


const Rules = ({ route, navigation }) => {
  const { playerName } = route.params;

  return (
    <BackgroundContainer>
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.rulesTitle}>Rules</Text>
        <Text style={styles.rulesText}>
          {`Upper section of the classic Yahtzee dice game. You have ${NBR_OF_DICES} dices and for every dice you have ${NBR_OF_THROWS} throws. After each throw, you can keep dices in order to get the same dice spot counts as many as possible. In the end of the turn you must select your points from ${MIN_SPOT} to ${MAX_SPOT}. Game ends when all points have been selected. The order for selecting those is free.`}
        </Text>
        <View style={styles.emptySpace}></View>
        <Text style={styles.rulesText}>
          {`POINTS: After each turn, the game calculates the sum for the dices you selected. Only the dices having the same spot count are calculated. Inside the game, you cannot select the same points from ${MIN_SPOT} to ${MAX_SPOT} again.`}
        </Text>
        <View style={styles.emptySpace}></View>
        <Text style={styles.rulesText}>
          {`GOAL: To get points as much as possible. ${BONUS_POINTS_LIMIT} points is the limit of getting a bonus which gives you ${BONUS_POINTS} points more.`}
        </Text>
        <View style={styles.emptySpace}></View>

        <Text style={styles.goodLuckText}>Good luck and have fun, {playerName}!</Text>
        
        <Pressable
          onPress={() => navigation.navigate("Gameboard", { player: playerName })}
          style={styles.playButton}
        >
          <Text style={styles.playButtonText}>PLAY</Text>
        </Pressable>
      </View>
      
      <Footer />
    </View>
    </BackgroundContainer>
  );
};

export default Rules;
