import React from "react";
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView } from "react-native";

const Index = () => {
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
    { id: "11", name: "Backend", price: "100$" },
    { id: "12", name: "PHP", price: "50$" },
    { id: "13", name: "Flask", price: "60$" },
    { id: "14", name: "Game dev", price: "100$" },
    { id: "15", name: "Hacking", price: "80$" },
    { id: "16", name: "Ruby", price: "60$" },
  ];

  const renderItems = ({ item }) => (
    <View style={styles.card}>
      {/* Course Name & Price */}
      <View style={styles.course}>
        <Text style={styles.courseName}>{item.name}</Text>
        <Text style={styles.coursePrice}>{item.price}</Text>
      </View>

      {/* White Box Section with Image */}
      <View style={styles.cardDetails}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpaPJD7pvji8R3t6_VCfaSmkz6wKxL3nVOg&s",
          }}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Start your Journey, with us</Text>
      </View>

      {/* Course List */}
      <View style={styles.footer}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={courses}
          renderItem={renderItems}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    height: 55,
    width: "100%",
    backgroundColor: "#3B6790",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  headerText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  footer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
  card: {
    backgroundColor: "#213555",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
    width: 160,
    height: 110, // Increased height to fit image
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
  },
  courseName: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 5,
  },
  coursePrice: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
  },
  cardDetails: {
    backgroundColor: "white",
    height: 80,
    width:150,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 20,
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
});

export default Index;
