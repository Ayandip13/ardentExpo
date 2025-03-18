import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const Courses = ({ customStyle, image, courseTitle, Price, BuyProp }) => {
  return (
    <View
      style={[
        customStyle,
        {
          height: 180,
          width: 160,
          borderWidth: 0.6,
          borderColor: "#000",
          alignItems: "center",
          padding: 5,
          justifyContent: "space-between",
          borderRadius: 10,
        },
      ]}
    >
      <Image
        source={image}
        style={{
          height: 110,
          width: 130,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        }}
      />
      <Text style={{ fontSize: 15, fontWeight: "700" }}>{courseTitle}</Text>
      <View
        style={{ backgroundColor: "black", height: 0.5, width: 100, top: -4 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            flex: 1,
            textAlign: "left",
            fontSize: 15,
            fontWeight: "600",
            top:-7
          }}
        >
          {Price}
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: "right",
            fontSize: 15,
            fontWeight: "600",
            top:-7
          }}
        >
          {BuyProp}
        </Text>
      </View>
    </View>
  );
};

export default Courses;
