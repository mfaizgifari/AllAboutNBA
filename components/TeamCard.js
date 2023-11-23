import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const TeamCard = ({ team }) => {
  const { full_name, abbreviation, city, conference } = team;

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.teamName}>{full_name}</Text>
        <Text style={styles.details}>{`${city}, ${abbreviation}`}</Text>
        <Text style={styles.details}>{`Conference: ${conference}`}</Text>
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
  cardContent: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "gray",
  },
});

export default TeamCard;
