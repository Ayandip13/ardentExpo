import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Courses from "../components/Courses";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState();
  const navigation = useNavigation();

  const courseArr = [
    "All Course",
    "Test Series",
    "Live Batch",
    "Recorded",
    "Daily Quiz",
    "Downloads",
  ];

  const imageArr = [
    require("../assets/images/download.jpeg"),
    require("../assets/images/download(2).jpeg"),
    require("../assets/images/download(3).jpeg"),
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ backgroundColor: "#D6CFB4", height: 55, width: "100%" }}>
        <StatusBar backgroundColor={"#D6CFB4"} barStyle={"dark-content"} />
      </View>
      <View>
        <FlatList
          data={imageArr}
          horizontal
          pagingEnabled
          renderItem={({ item }) => (
            <View>
              <Image
                source={item}
                style={{
                  width: 320,
                  height: 170,
                  marginTop: 20,
                  borderRadius: 20,
                  alignSelf: "center",
                  marginHorizontal: 20,
                }}
              />
            </View>
          )}
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
            renderItem={({ item }) => {
              const isSelectedItem = item === selectedItem;
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedItem(item);
                    navigation.navigate(item.replace(" ", ""));
                  }}
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
                    backgroundColor: isSelectedItem ? "#D6CFB4" : "#fff",
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: "600" }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
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
