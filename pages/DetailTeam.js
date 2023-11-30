import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../components/Header";
import { teamData } from "../data/data";

const DetailTeam = ({ route }) => {
  const { logo, name, description, starters } = route.params;

  return (
    <View style={styles.container}>
      <Header headerText={name} flexPosition={"center"} />
      <View style={styles.content}>
        <Image source={{ uri: logo }} style={styles.logo} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  startersHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  starters: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DetailTeam;
