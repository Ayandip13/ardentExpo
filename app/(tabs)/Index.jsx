import React, { useState } from "react";
import { Button, View, Text } from "react-native";

const Index = () => {
  const [data, setData] = useState(false);

  return (
    <View>
      {/* Button (Always Visible) */}
      <Button title="Click" onPress={() => setData(true)} />

      {/* Conditional Rendering for Texts */}
      {data ? (
        <View>
          <Text>Batman</Text>
          <Text>Joker</Text>
          <Text>Riddler</Text>
          <Text>Dollmaker</Text>
          <Text>Bane</Text>
        </View>
      ): <Text></Text>}
    </View>
  );
};

export default Index;
