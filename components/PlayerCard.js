import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const PlayerCard = ({ player, navigation }) => {
  const { first_name, last_name, height_inches } = player;

  const handlePress = () => {
    navigation.navigate("DetailPlayer", { player }); // Navigate to PlayerDetailScreen with player data
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Image
          source={{
            uri: `https://via.placeholder.com/50x50?text=${first_name}`,
          }}
          style={styles.photo}
        />
        <View style={styles.cardContent}>
          <Text style={styles.playerName}>{`${first_name} ${last_name}`}</Text>
          <Text
            style={styles.description}
          >{`Height: ${height_inches} inches`}</Text>
        </View>
      </View>
    </TouchableOpacity>
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

export default PlayerCard;
