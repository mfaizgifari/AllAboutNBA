import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DetailPlayer = ({ route }) => {
  const { player } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: player.photo }} style={styles.image} />
      <Text style={styles.name}>{player.name}</Text>
      <Text style={styles.description}>{player.description}</Text>
      <Text style={styles.height}>Height: {player.height}</Text>
      <Text style={styles.position}>Position: {player.position}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  height: {
    fontSize: 16,
    marginBottom: 5,
  },
  position: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DetailPlayer;
