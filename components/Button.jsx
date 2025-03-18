import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ onPress, title }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={{
          backgroundColor: "#10375C",
          height: 40,
          width: 200,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 35,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#F4F6FF", fontSize: 17, fontWeight: "500" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
