import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

const BackgroundContainer = ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/Dices.png")} // Provide the correct path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // You can adjust the resizeMode as needed
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust opacity and color as needed
  },
});

export default BackgroundContainer;
