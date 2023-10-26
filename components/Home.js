import React, { useState } from "react";
import { Text, View, Pressable, Keyboard, TextInput, ScrollView, Button } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../style/style";
import BackgroundContainer from "./BackgroundContainer";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [playerName, setPlayerName] = useState("");
  const [hasPlayerName, setHasPlayerName] = useState(false);
  const navigation = useNavigation();

  const handlePlayerName = (value) => {
    if (value.trim().length > 0) {
      setHasPlayerName(true);
      Keyboard.dismiss();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Rules', params: { playerName: value } }],
      });
    }
  };

  return (
    <BackgroundContainer>
      <Header />
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          {!hasPlayerName ? (
            <>
              <Text style={styles.welcomeText}>Welcome to play mini-Yahzee!</Text>
              <TextInput
                onChangeText={setPlayerName}
                autoFocus={true}
                style={styles.playerNameInput}
                placeholder="Enter your name"
                placeholderTextColor="#e7e41b"
              />
              <Pressable onPress={() => handlePlayerName(playerName)} style={styles.okButton}>
                <Text style={styles.buttonText}>OK</Text>
              </Pressable>
            </>
          ) : null}
        </ScrollView>
      </View>
      <Footer />
    </BackgroundContainer>
  );
}
