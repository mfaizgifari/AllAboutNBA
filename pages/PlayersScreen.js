import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import axios from "axios";
import PlayersCardList from "../components/PlayersCardList";
import Header from "../components/Header";

function PlayersScreen() {
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

  const filteredPlayers = players.filter(
    (player) =>
      player.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
      player.last_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={"Player List"} flexPosition={"center"} />
      <TextInput
        style={styles.searchBar}
        placeholder="Search players..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        {filteredPlayers.map((player, index) => (
          <PlayersCardList key={index} player={player} />
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
  searchBar: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default PlayersScreen;
