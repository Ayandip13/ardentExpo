import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Profile";
import Contact from "./Contact";
import Others from "./Others";
import Home from "./Home";

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Others" component={Others} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
