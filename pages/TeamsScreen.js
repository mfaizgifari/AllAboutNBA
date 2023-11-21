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
import Header from "../components/Header";
import { playerData, teamData } from "../data/data";
import TeamCard from "../components/TeamCard";

function TeamsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={"Team List"} flexPosition={"center"} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        {teamData.map((team, id) => (
          <TeamCard key={id} team={team} />
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
