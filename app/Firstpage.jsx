import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const [activity, setActivity] = useState(false);

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={{
              height: 150,
              width: 150,
              display: "block",
              margin: "auto",
              marginTop: 100,
            }}
          />
          <Image
            style={styles.image}
            source={require("../assets/images/download (1).jpg")}
          />
          <Text style={styles.headingText}>Learn the language you want</Text>
          <View style={{ rowGap: 5 }}>
            <Text style={styles.descriptionText}>
              Get talking from lesson one, With
            </Text>
            <Text style={styles.descriptionText}>
              conversation based learning
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("DrawerNavigation")}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonColor}>Get Started</Text>
          </TouchableOpacity>
          {activity && (
            <ActivityIndicator size={30} style={{ marginTop: 20 }} />
          )}
          <Text style={styles.loginText}>
            Already a User.{" "}
            <Text
              style={{
                color: "blue",
                fontWeight: "800",
                textDecorationLine: "underline",
              }}
              onPress={() => navigation.navigate("Login")}
            >
              Log in
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    bottom: 50,
  },
  header: {},
  image: {
    borderRadius: 10,
    bottom: 30,
    left: 20,
  },
  headingText: {
    marginTop: 50,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: 600,
    fontSize: 25,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: "center",
    opacity: 0.5,
  },
  footer: {},
  loginText: {
    textAlign: "center",
    marginTop: 32,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#F14A00",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 50,
    elevation: 8,
  },
  buttonColor: {
    color: "white",
    textAlign: "center",
  },
});

export default Index;
