import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import axios from "axios";

import Header from "../components/Header";

function PlayersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={"Players List"} flexPosition={"center"} />
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

export default PlayersScreen;