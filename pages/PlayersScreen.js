import { useState, useEffect } from "react";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import axios from "axios";
import PlayerCard from "../components/PlayerCard";
import Header from "../components/Header";
import { playerData, teamData } from "../data/data";

function TeamsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={"Team List"} flexPosition={"center"} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        {playerData.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    padding: 16,
  },
});

export default TeamsScreen;
