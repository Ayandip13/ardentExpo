import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Index = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTextStyle}>Ayandip paul</Text>
        <Text style={styles.circle}></Text>
      </View>
      <View style={styles.footer}>
        <View><Text style={styles.textStyle1}>React Native</Text><Text style={{backgroundColor:'blue'}}>300 rupees</Text></View>
        <View><Text style={styles.textStyle2}>React js</Text><Text style={{backgroundColor:'blue'}}>300 rupees</Text></View>
        <View><Text style={styles.textStyle3}>Android Development</Text><Text style={{backgroundColor:'blue'}}>300 rupees</Text></View>
        <View><Text style={styles.textStyle4}>Node js Backend</Text><Text style={{backgroundColor:'blue'}}>300 rupees</Text></View>
        <View><Text style={styles.textStyle5}>Swift Developer</Text><Text style={{backgroundColor:'blue'}}>300 rupees</Text></View>
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
    height: 600,
    justifyContent: "center",
    alignItems: "center",
    textAlign:"left",
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
  textStyle1: {
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 30,
    paddingHorizontal:101,
    borderRadius:5
  },
  textStyle2: {
    borderRadius:5,
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 30,
    paddingHorizontal:120
  },
  textStyle3: {
    borderRadius:5,
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 30,
    paddingHorizontal:70
  },
  textStyle4: {
    borderRadius:5,
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 30,
    paddingHorizontal:90
  },
  textStyle5: {
    borderRadius:5,
    fontSize: 20,
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 30,
    paddingHorizontal:92
  },
});

export default Index;
