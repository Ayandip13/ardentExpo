import { Linking, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/FontAwesome";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const statesArr = [
    "West Bengal",
    "Manipur",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
  ];

  const inputStyle = {
    borderWidth: 0.5,
    borderColor: "#000",
    marginTop: 7,
    borderRadius: 5,
    textAlign: "center",
    paddingVertical: 5,
    height: 40,
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#FBFBFB", paddingHorizontal: 15 }}
    >
      <StatusBar backgroundColor="#F2F9FF" style="dark" />
      <Text style={{ marginTop: 130, fontSize: 30, fontWeight: "bold" }}>
        Registration Here
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text>Name</Text>
        <TextInput
          style={inputStyle}
          keyboardType="default"
          placeholder="Please enter your name"
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Email</Text>
        <TextInput
          style={inputStyle}
          keyboardType="email-address"
          placeholder="Please enter your email"
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Phone Number</Text>
        <TextInput
          style={inputStyle}
          keyboardType="number-pad"
          placeholder="Phone"
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Password</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            style={{ ...inputStyle, paddingRight: 30 }}
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

      <View style={{ marginTop: 20 }}>
        <Text>Confirm Password</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            style={{ ...inputStyle, paddingRight: 30 }}
            placeholder="Re-enter password"
            secureTextEntry={!confirmPasswordVisible}
          />
          <Icon
            name={confirmPasswordVisible ? "eye" : "eye-slash"}
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            size={15}
            color="gray"
            style={{ position: "absolute", right: 10, top: 15 }}
          />
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>State</Text>
        <View
          style={{
            borderWidth: 0.4,
            borderColor: "#000",
            marginTop: 7,
            borderRadius: 8,
          }}
        >
          <Picker style={{ width: "100%", height: 50 }}>
            <Picker.Item label="Select State" value="null" />
            {statesArr.map((state, index) => (
              <Picker.Item
                key={index}
                label={state}
                value={state.toLowerCase()}
              />
            ))}
          </Picker>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>City</Text>
        <View
          style={{
            borderWidth: 0.4,
            borderColor: "#000",
            marginTop: 7,
            borderRadius: 8,
          }}
        >
          <Picker style={{ width: "100%", height: 50 }}>
            <Picker.Item label="Select City" value="null" />
            <Picker.Item label="Kolkata" value="kolkata" />
            <Picker.Item label="Mursidabad" value="mursidabad" />
            <Picker.Item label="Bardawan" value="bardawan" />
            <Picker.Item label="Darjiling" value="darjiling" />
            <Picker.Item label="Bankura" value="bankura" />
            <Picker.Item label="Sundarban" value="sundarban" />
            <Picker.Item label="Naihati" value="naihati" />
          </Picker>
        </View>
      </View>

      <Button />

      <Text
        style={{
          textAlign: "center",
          marginTop: 30,
          fontSize: 17,
          fontWeight: "400",
        }}
      >
        Have an Account?{" "}
        <Text
          onPress={() => Linking.openURL("https://www.google.com/")}
          style={{
            color: "#1230AE",
            fontWeight: "600",
            textDecorationLine: "underline",
          }}
        >
          Login
        </Text>
      </Text>

      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          marginTop: 9,
          fontWeight: "500",
        }}
      >
        By clicking Sign Up, you agree to our{" "}
        <Text style={{ color: "#1230AE" }}>
          Terms & Conditions and Privacy Policy
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Login;
