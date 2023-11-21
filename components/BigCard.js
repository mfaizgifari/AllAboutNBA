import React from "react";
import { View, Image, StyleSheet } from "react-native";

const BigCard = ({ logo }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center", // Center content vertically
    alignItems: "center",
    marginRight: 20,
    width: 200,
    height: 200, // Adjust the aspect ratio of the card
  },
  logo: {
    margin: 20,
    flex: 1,
    width: 200,
    height: 150,
  },
});

export default BigCard;
