import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import axios from "axios";
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";

function TeamsScreen() {
  const [teams, setTeams] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(
          "https://www.balldontlie.io/api/v1/teams"
        );
        setTeams(response.data.data || []);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams();
  }, []);

  const filteredTeams = teams.filter((team) =>
    team.full_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={"Team List"} flexPosition={"center"} />
      <TextInput
        style={styles.searchBar}
        placeholder="Search teams..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        {filteredTeams.map((team, id) => (
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
  searchBar: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default TeamsScreen;
