import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PlayersCardList = ({ player }) => {
  const { first_name, last_name, position } = player;

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://via.placeholder.com/50x50?text=${first_name}` }}
        style={styles.photo}
      />
      <View style={styles.cardContent}>
        <Text style={styles.playerName}>{`${first_name} ${last_name}`}</Text>
        <Text style={styles.description}>{`Position: ${position} `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    padding: 15,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
  },
  playerName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
});

export default PlayersCardList;
