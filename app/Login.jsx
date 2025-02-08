import { Linking, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/FontAwesome";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#F2F9FF" }}>
      <StatusBar backgroundColor="#F2F9FF" style="dark" />
      <Text
        style={{
          marginTop: 130,
          fontSize: 30,
          marginLeft: 18,
          fontWeight: "bold",
        }}
      >
        Registration Here
      </Text>

      <View style={{ marginTop: 20, marginLeft: 15 }}>
        <Text>Name</Text>
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "#000",
            marginLeft: -5,
            marginRight: 10,
            marginTop: 7,
            borderRadius: 5,
            textAlign: "center",
          }}
          keyboardType="default"
          placeholder="Please enter your name"
        />
      </View>

      <View style={{ marginTop: 20, marginLeft: 19, flexDirection: "row" }}>
        <Text style={{ marginRight: 150 }}>Email</Text>
        <Text>Phone Number</Text>
      </View>

      <View style={{ marginTop: 2, marginHorizontal: 5, flexDirection: "row" }}>
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "#000",
            marginLeft: 5,
            marginRight: 10,
            marginTop: 7,
            borderRadius: 5,
            textAlign: "center",
            width: 165,
          }}
          keyboardType="email-address"
          placeholder="Please enter your email"
        />
        <TextInput
          style={{
            borderWidth: 0.5,
            borderColor: "#000",
            marginRight: 10,
            marginTop: 7,
            borderRadius: 5,
            textAlign: "center",
            width: 160,
          }}
          keyboardType="number-pad"
          placeholder="Phone"
        />
      </View>

      <View style={{ marginTop: 20, marginLeft: 19, flexDirection: "row" }}>
        <Text style={{ marginRight: 127 }}>Password</Text>
        <Text>Confirm Password</Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 2, marginLeft: 10 }}>
        {/* Password Field */}
        <View style={{ position: "relative" }}>
          <TextInput
            style={{
              borderWidth: 0.5,
              borderColor: "#000",
              marginLeft: -1,
              marginTop: 7,
              borderRadius: 5,
              textAlign: "center",
              width: 165,
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
            style={{ position: "absolute", right: 10, top: 18 }}
          />
        </View>

        {/* Confirm Password Field */}
        <View style={{ position: "relative", marginLeft: 10 }}>
          <TextInput
            style={{
              borderWidth: 0.5,
              borderColor: "#000",
              marginLeft: -1,
              marginTop: 7,
              borderRadius: 5,
              textAlign: "center",
              width: 165,
              paddingRight: 30,
            }}
            placeholder="Re-enter password"
            secureTextEntry={!confirmPasswordVisible}
          />
          <Icon
            name={confirmPasswordVisible ? "eye" : "eye-slash"}
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            size={15}
            color="gray"
            style={{ position: "absolute", right: 10, top: 18 }}
          />
        </View>
      </View>

      <View style={{ marginLeft: 17, marginTop: 20, flexDirection: "row" }}>
        <Text style={{ marginRight: 150 }}>State</Text>
        <Text>City</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 165,
            borderWidth: 0.4,
            borderColor: "#000",
            marginLeft: 10,
            marginTop: 7,
            borderRadius: 8,
          }}
        >
          <Picker style={{ width: 170 }}>
            <Picker.Item label="States" value="null" />
            <Picker.Item label="West Bengal" value="west Bengal" />
            <Picker.Item label="Maharastra" value="maharastra" />
            <Picker.Item label="Gujrat" value="gujrat" />
            <Picker.Item label="Kashmir" value="kashmir" />
            <Picker.Item label="Kerala" value="kerala" />
            <Picker.Item label="Manipur" value="manipur" />
            <Picker.Item label="Tamilnadu" value="tamilnadu" />
          </Picker>
        </View>

        <View
          style={{
            width: 165,
            borderWidth: 0.4,
            borderColor: "#000",
            marginLeft: 10,
            marginTop: 7,
            borderRadius: 8,
          }}
        >
          <Picker style={{ width: 170 }}>
            <Picker.Item label="City" value="null" />
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
          marginLeft: 15,
          marginRight: 15,
          fontWeight: "500",
        }}
      >
        By clicking Sign Up, you agree to our{" "}
        <Text style={{ color: "#1230AE" }}>
          Terms & Conditions and Privacy Policy
        </Text>
      </Text>
    </View>
  );
};

export default Login;
