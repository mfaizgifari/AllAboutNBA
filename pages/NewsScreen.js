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

function NewsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerIcon={"bell-o"}
        headerText={"News"}
        flexPosition={"center"}
      />
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

export default NewsScreen;
