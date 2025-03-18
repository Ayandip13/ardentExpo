import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Firstpage from "./Firstpage";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Firstpage" component={Firstpage} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Index;
