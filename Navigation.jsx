import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: "#f5b6cd"

                }}
            >
                <Tab.Screen
                    name="Casita Header"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Casita",
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="home" size={size} color={color} />
                        ),
                        tabBarBadge: 10,
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Configuracion Header"
                    component={SettingScreen}
                    options={{
                        tabBarLabel: "Configuracioncita",
                        tabBarIcon: ({ color, size }) => (
                            <Fontisto name="player-settings" size={size} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;