import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Index from "./app/Index";
import "react-native-gesture-handler";
import DrawerNavigation from "./app/DrawerNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <Index />
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
};

export default App;
