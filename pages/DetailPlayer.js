import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailPlayer = ({ route }) => {
  const { player } = route.params;

  // Assuming player contains various details you want to display
  const { first_name, last_name, height_inches, team, position } = player;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${first_name} ${last_name}`}</Text>
      <View style={styles.detail}>
        <Text>Height: {height_inches} inches</Text>
        <Text>Team: {team}</Text>
        <Text>Position: {position}</Text>
        {/* Add more player details here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detail: {
    alignItems: "flex-start",
  },
});

export default DetailPlayer;
