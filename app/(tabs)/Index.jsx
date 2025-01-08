import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Index = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTextStyle}>Ayandip Paul</Text>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.footer}>
        <View style={styles.courseContainer}>
          <Text style={styles.textStyle}>React Native</Text>
          <View style={styles.priceCircle}>
            <Text style={styles.priceText}>300</Text>
          </View>
        </View>
        <View style={styles.courseContainer}>
          <Text style={styles.textStyle}>React JS</Text>
          <View style={styles.priceCircle}>
            <Text style={styles.priceText}>300</Text>
          </View>
        </View>
        <View style={styles.courseContainer}>
          <Text style={styles.textStyle}>Android Development</Text>
          <View style={styles.priceCircle}>
            <Text style={styles.priceText}>300</Text>
          </View>
        </View>
        <View style={styles.courseContainer}>
          <Text style={styles.textStyle}>Node JS Backend</Text>
          <View style={styles.priceCircle}>
            <Text style={styles.priceText}>300</Text>
          </View>
        </View>
        <View style={styles.courseContainer}>
          <Text style={styles.textStyle}>Swift Developer</Text>
          <View style={styles.priceCircle}>
            <Text style={styles.priceText}>300</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    gap: 100,
    backgroundColor: "white",
    elevation: 10,
    padding: 15,
    flexDirection: "row",
    marginTop: 1,
    marginHorizontal: 3,
    borderColor: "white",
    borderRadius: 10,
  },
  headerTextStyle: {
    fontSize: 30,
  },
  circle: {
    backgroundColor: "red",
    height: 60,
    width: 60,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 25,
    elevation: 20,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white",
    elevation: 10,
    padding: 15,
    flexDirection: "column",
    marginTop: 9,
    marginHorizontal: 3,
    borderColor: "white",
    borderRadius: 10,
  },
  courseContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
  },
  textStyle: {
    fontSize: 18,
  },
  priceCircle: {
    backgroundColor: "blue",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  priceText: {
    color: "white",
    fontSize: 14,
  },
});

export default Index;
