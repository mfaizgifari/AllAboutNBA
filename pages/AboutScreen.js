import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";

function AboutScreen() {
  return (
    <View style={style.container}>
      <Header headerText={"About"} flexPosition={"center"} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    padding: 16,
  },
});

export default AboutScreen;
