import { View, Text, StatusBar, Image } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View>
      <View style={{ backgroundColor: "#D6CFB4", height: 55, width: "100%" }}>
        <StatusBar barStyle={"dark-content"} />
      </View>
      <View>
        <Image
          source={require("../assets/images/download.jpeg")}
          style={{
            width: "85%",
            height: 170,
            marginTop: 20,
            marginLeft: 27,
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};

export default Home;
