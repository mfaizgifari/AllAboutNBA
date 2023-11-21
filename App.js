import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import * as Font from "expo-font";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import NewsScreen from "./pages/NewsScreen";
import TeamsScreen from "./pages/TeamsScreen";
import PlayersScreen from "./pages/PlayersScreen";
import Header from "./components/Header";

const bottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <bottomTabNavigator.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: true,
          tabBarStyle: {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderTopWidth: 2,
            borderColor: "lightgray",
            height: 62,
            marginBottom: 0,
            shadowOpacity: 0,
            elevation: 1,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "About") {
              iconName = "information-circle";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "News") {
              iconName = "newspaper";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "Players") {
              iconName = "people";
              color = focused ? "black" : "lightgray";
            } else if (route.name === "Teams") {
              iconName = "basketball-outline";
              color = focused ? "black" : "lightgray";
            }

            return <Ionicons name={iconName} size={26} color={color} />;
          },
          tabBarLabel: ({ focused, color }) => {
            let label;

            if (route.name === "Home") {
              label = focused ? "Home" : "Home";
            } else if (route.name === "About") {
              label = focused ? "About" : "About";
            } else if (route.name === "News") {
              label = focused ? "News" : "News";
            } else if (route.name === "Players") {
              label = focused ? "Players" : "Players";
            } else if (route.name === "Teams") {
              label = focused ? "Teams" : "Teams";
            }
            return (
              <Text
                style={{
                  color,
                  fontSize: 12,
                  marginTop: -5,
                  marginBottom: 5,
                }}
              >
                {label}
              </Text>
            );
          },
          headerShown: false,
        })}
      >
        <bottomTabNavigator.Screen name="Home" component={HomeScreen} />
        <bottomTabNavigator.Screen name="News" component={NewsScreen} />
        <bottomTabNavigator.Screen name="Teams" component={TeamsScreen} />
        <bottomTabNavigator.Screen name="Players" component={PlayersScreen} />
        <bottomTabNavigator.Screen name="About" component={AboutScreen} />
      </bottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}
