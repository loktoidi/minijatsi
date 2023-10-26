import { Text, View, Button } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import styles from '../style/style';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackgroundContainer from './BackgroundContainer';

const NBR_OF_SCOREBOARD_ROWS = 5;
const SCOREBOARD_STORAGE_KEY = 'scoreboard';

export default function Scoreboard() {
  const [scoreboardData, setScoreboardData] = useState([]);

  useEffect(() => {
    // Load scoreboard data from AsyncStorage when the component mounts
    loadScoreboardData();
  }, []);

  // Function to load scoreboard data from AsyncStorage
  const loadScoreboardData = async () => {
    try {
      const scoreboardDataJSON = await AsyncStorage.getItem(SCOREBOARD_STORAGE_KEY);
      if (scoreboardDataJSON) {
        const parsedData = JSON.parse(scoreboardDataJSON);
        setScoreboardData(parsedData);
      }
    } catch (error) {
      console.error('Error loading scoreboard data:', error);
    }
  };

  // Function to save scoreboard data to AsyncStorage
  {scoreboardData.map((entry, index) => (
    <View style={styles.scoreboardEntry} key={index}>
      <Text style={styles.scoreboardPlayerName}>{entry.playerName}</Text>
      <Text style={styles.scoreboardTotalPoints}>{entry.totalPoints} points</Text>
      <Text style={styles.scoreboardDateTime}>
  {new Date(entry.dateTime).toLocaleString(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })}
</Text>

    </View>
  ))}

  // Function to reset the scoreboard
  const resetScoreboard = async () => {
    // Clear the scoreboard data from AsyncStorage
    await AsyncStorage.removeItem(SCOREBOARD_STORAGE_KEY);
    // Clear the data in the component's state
    setScoreboardData([]);
  };

  return (
    <BackgroundContainer>
      <>
        <Header />
        <View style={styles.container}>
          <Text style={styles.scoreboardHeading}>Scoreboard</Text>
          {scoreboardData.map((entry, index) => (
            <View style={styles.scoreboardEntry} key={index}>
              <Text style={styles.scoreboardPlayerName}>{entry.playerName}</Text>
              <Text style={styles.scoreboardTotalPoints}>{entry.totalPoints} points</Text>
              <Text style={styles.scoreboardDateTime}>{entry.dateTime}</Text>
            </View>
          ))}
          <Button
            title="Reset Scoreboard"
            onPress={resetScoreboard}
            style={styles.resetScoreboardButton}
          />
        </View>
        <Footer />
      </>
    </BackgroundContainer>
  );
}
