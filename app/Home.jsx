import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Courses from "../components/Courses";

const Home = () => {
  const courseArr = [
    "All Course",
    "Test Series",
    "Live Batch",
    "Recorded",
    "Daily Quiz",
    "Downloads",
  ];
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
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "900",
            marginLeft: 20,
            marginTop: 25,
          }}
        >
          Category
        </Text>
        <View
          style={{
            height: 0.3,
            width: 320,
            backgroundColor: "#000",
            marginLeft: 17,
            marginTop: 8,
          }}
        />

        <View style={{ alignItems: "center" }}>
          <FlatList
            style={{ marginTop: 15 }}
            data={courseArr}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  margin: 5,
                  borderWidth: 0.3,
                  borderColor: "#000",
                  borderRadius: 5,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 150,
                  elevation: 1.5,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "600" }}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "800",
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          Recomended Courses
        </Text>
        <View
          style={{
            width: 320,
            backgroundColor: "black",
            height: 0.5,
            marginHorizontal: 17,
            marginTop: 8,
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Courses
            customStyle={{ marginTop: 16 }}
            image={require("../assets/images/javascriptCourse.png")}
            courseTitle="Javascript in 60 days"
            Price="399"
            BuyProp="Bought"
          />
          <Courses
            customStyle={{ marginTop: 16 }}
            image={require("../assets/images/reactNativeCourse.jpeg")}
            courseTitle="Master React native"
            Price="500"
            BuyProp="Buy Now"
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
