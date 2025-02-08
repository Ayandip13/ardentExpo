import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const lessons = [
  { id: "1", title: "History", completed: true },
  { id: "2", title: "Fashion", completed: true },
  { id: "3", title: "Tourism", completed: false },
  { id: "4", title: "Science", completed: false },
  { id: "5", title: "Internet", completed: true },
];

const Page2 = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F14A00" style="light" />
      {/* Orange Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Continue Lesson</Text>
        <Text style={styles.progressText}>Speaking Task</Text>
        <View style={styles.progress}>
          <View style={styles.progressFill}></View>
        </View>
      </View>

      {/* White Content Area */}
      <View style={styles.content}>
        <FlatList
          data={lessons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.lessonItem}>
              <Image
                source={{
                  uri: item.completed
                    ? "https://img.icons8.com/color/48/checked--v1.png"
                    : "https://img.icons8.com/color/48/hourglass--v1.png",
                }}
                style={styles.lessonIcon}
              />
              <Text style={styles.lessonText}>{item.title}</Text>
              <Text
                style={[
                  styles.statusText,
                  item.completed && styles.statusCompleted,
                ]}
              >
                {item.completed ? "Completed" : "In Progress"}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Page2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F14A00",
  },
  header: {
    height: 220,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 28,
  },
  progress: {
    width: "80%",
    height: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  progressFill: {
    width: "50%", // Update width dynamically for progress
    height: "100%",
    backgroundColor: "#FFA07A",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  lessonItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    elevation: 3,
  },
  lessonIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  lessonText: {
    fontSize: 16,
    flex: 1,
    fontWeight: "bold",
    color: "#333",
  },
  statusText: {
    fontSize: 14,
    color: "#FFA07A",
  },
  statusCompleted: {
    color: "#32CD32",
  },
});
