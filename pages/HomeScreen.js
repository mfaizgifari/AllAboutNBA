import React from "react";
import { useState, useEffect } from "react";
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
import BigCard from "../components/BigCard";
import Header from "../components/Header";
import { playerData, teamData } from "../data/data";

function HomeScreen() {
  const [players, setPlayers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Fetch data from the API
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(
          "https://www.balldontlie.io/api/v1/players"
        );
        // Update the state with the fetched player data
        setPlayers(response.data.data || []);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header headerText={"AllAboutNBA"} flexPosition={"center"} />
        <Text style={styles.TopTeams}>Top Teams</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {teamData.map((team, index) => (
            <BigCard key={index} logo={team.logo} />
          ))}
        </ScrollView>
        <Text style={styles.TopPlayers}>Top Players</Text>
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
  TopPlayers: {
    marginTop: 16,
    marginBottom: 6,
    fontSize: 26,
  },
  TopTeams: {
    fontSize: 26,
  },
});

export default HomeScreen;
