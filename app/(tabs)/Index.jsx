import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const Index = () => {
  // Array of courses with name and price
  const courses = [
    { id: "1", name: "React Native", price: "$90" },
    { id: "2", name: "Advanced JavaScript", price: "$50" },
    { id: "3", name: "UI/UX Design", price: "$40" },
    { id: "4", name: "Python for Beginners", price: "$40" },
    { id: "5", name: "React js", price: "70$" },
    { id: "6", name: "Angular js", price: "60$" },
    { id: "7", name: "Vue js", price: "60$" },
    { id: "8", name: "Django", price: "65$" },
    { id: "9", name: "Cryptography", price: "65$" },
    { id: "10", name: "Backend tools", price: "100$" },
  ];

  const renderItems = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.courseName}>{item.name}</Text>
      <Text style={styles.coursePrice}>{item.price}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ayandip Paul</Text>
        <Image
          style={styles.headerImage}
          source={{ uri: "https://via.placeholder.com/50" }}
        />
      </View>
      <View style={styles.footer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={courses}
          renderItem={renderItems}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#EAE2C6",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  footer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  courseName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  coursePrice: {
    fontSize: 16,
    color: "#555",
  },
});

export default Index;
