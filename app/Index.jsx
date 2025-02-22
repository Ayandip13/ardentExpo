import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Firstpage from "./Firstpage"
import Page2 from "./Page2"
import Login from "./Login"

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Firstpage" component={Firstpage} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  );
};

export default Index;
