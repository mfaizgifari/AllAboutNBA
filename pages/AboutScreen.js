import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import Header from "../components/Header";

const AboutScreen = () => {
  const developer = {
    name: "Muhamad Faiz Gifari",
    nim: 21120121130047,
    description:
      "Undergraduate Computer Engineering Student that use ChatGPT every five seconds for this App.",
    imageUrl:
      "https://instagram.fcgk37-1.fna.fbcdn.net/v/t51.2885-19/344792200_195978656600555_3126568078524393846_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgk37-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=ee2oaXnCIecAX9jPh-l&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAFUpI6GZ7YvZWkzyF8qt0idmuQivjGfnmRKkYuZf65JA&oe=6563334D&_nc_sid=8b3546",
  };

  return (
    <SafeAreaView style={styles.containerH}>
      <Header headerText={"About"} flexPosition={"center"} />
      <View style={styles.container}>
        <Image source={{ uri: developer.imageUrl }} style={styles.image} />
        <Text style={styles.name}>{developer.name}</Text>
        <Text style={styles.nim}>{developer.nim}</Text>
        <Text style={styles.description}>{developer.description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  containerH: {
    flex: 1,
    backgroundColor: "#eeeeee",
    padding: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeeeee",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  nim: {
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default AboutScreen;
