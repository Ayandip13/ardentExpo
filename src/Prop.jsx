import { View, Text } from "react-native";
import React from "react";

const Prop = (prop) => {
  return (
    <View>
      <Text>
        The Dark Knight {prop.protagonist} and his villain {prop.antagonist}
      </Text>
    </View>
  );
};

export default Prop;
