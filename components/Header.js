import { Text, View } from "react-native";
import * as Font from "expo-font";

Font.loadAsync({
  NexaH: require("../font/Nexa-Heavy.ttf"),
});

const Header = ({ headerText, flexPosition }) => {
  const flexPositionStyle = flexPosition ? flexPosition : "center";
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: flexPositionStyle,
        backgroundColor: "#eeeeee",
        alignItems: "center",
        marginBottom: 16,
        marginTop: 32,
      }}
    >
      <Text
        style={{
          marginRight: 8,
          fontSize: 26,
          fontWeight: "500",
          fontFamily: "NexaH",
        }}
      >
        {headerText}
      </Text>
    </View>
  );
};

export default Header;
