import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const Index = () => {
  const [data, setData] = useState(false);

  return (
    <View>
      <Button style={styles.button} title="Click" onPress={() => setData(true)} />

      {data ? (
        <View style={{paddingTop:20}}>
          <Text style={styles.textStyle}>Batman</Text>
          <Text style={styles.textStyle}>Joker</Text>
          <Text style={styles.textStyle}>Riddler</Text>
          <Text style={styles.textStyle}>Dollmaker</Text>
          <Text style={styles.textStyle}>Bane</Text>
        </View>
      ): <Text></Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  button:{
    backgroundColor:"black",
    color:"black",
  },
  textStyle:{
    fontWeight:"500",
    textAlign:"center",
    fontSize:30,
  }
})

export default Index;
