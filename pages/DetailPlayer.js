import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PlayerCard from "../components/PlayerCard"; // Import your PlayerCard component
import axios from "axios";

const DetailPlayer = ({ navigation, route }) => {
  const { player } = route.params;

  return (
    <View style={styles.container}>
      <PlayerCard player={player} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailPlayer;
