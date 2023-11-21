import React from "react";
import { View, StyleSheet } from "react-native";
import TeamCard from "./PlayerCard";

const TeamCard = () => {
  const teams = [
    {
      name: "Team A",
      logo: "https://via.placeholder.com/50",
      description: "Description for Team A",
    },
    {
      name: "Team B",
      logo: "https://via.placeholder.com/50",
      description: "Description for Team B",
    },
  ];

  return (
    <View style={styles.container}>
      {teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
});

export default TeamCard;
