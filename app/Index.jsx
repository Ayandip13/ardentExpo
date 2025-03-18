import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Firstpage from "./Firstpage";
import DrawerNavigation from "./DrawerNavigation";
import Register from "./Register";
import Login from "./Login";
import AllCourse from "./AllCourse";

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Firstpage" component={Firstpage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Stack.Screen name="AllCourse" component={AllCourse} />
    </Stack.Navigator>
  );
};

export default Index;
