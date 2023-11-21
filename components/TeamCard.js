import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const TeamCard = ({ team }) => {
  const { name, logo, description } = team;

  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <View style={styles.teamcard}>
        <Text style={styles.teamName}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
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
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  teamcard: {
    flex: 1,
    justifyContent: "center",
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
});

export default TeamCard;
