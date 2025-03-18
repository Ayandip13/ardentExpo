import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ top: 80, left: 20, fontSize: 20, fontWeight: "bold" }}>
        Login to your Existing Account
      </Text>
      <View style={{ marginTop: 200, marginHorizontal: 20 }}>
        <Text>Email</Text>
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "#000",
            marginTop: 7,
            borderRadius: 5,
            textAlign: "center",
            paddingVertical: 5,
            height: 40,
          }}
          keyboardType="email-address"
          placeholder="Please enter your email"
        />
      </View>

      <View style={{ marginTop: 40, marginHorizontal: 20 }}>
        <Text>Password</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            style={{
              borderWidth: 0.5,
              borderColor: "#000",
              marginTop: 7,
              borderRadius: 5,
              textAlign: "center",
              paddingVertical: 5,
              height: 40,
              paddingRight: 30,
            }}
            placeholder="Enter password"
            secureTextEntry={!passwordVisible}
          />
          <Icon
            name={passwordVisible ? "eye" : "eye-slash"}
            onPress={() => setPasswordVisible(!passwordVisible)}
            size={15}
            color="gray"
            style={{ position: "absolute", right: 10, top: 15 }}
          />
        </View>
      </View>

      <View>
        <Text
          style={{
            marginTop: 60,
            marginLeft: 40,
            fontSize: 15,
            fontWeight: "700",
          }}
        >
          Don't Have an Account?{" "}
          <Text
            onPress={() => navigation.navigate("Register")}
            style={{
              color: "#1230AE",
              fontWeight: "600",
              textDecorationLine: "underline",
            }}
          >
            Sign-Up
          </Text>
        </Text>
      </View>
      <Button onPress={() => navigation.navigate("Home")} title="Login" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
