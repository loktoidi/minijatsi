// Import necessary libraries and components
import React from 'react';
import { ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Home from './components/Home';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import Rules from './components/Rules'; 
import styles from './style/style'; 

const Tab = createBottomTabNavigator();

const BackgroundContainer = ({ children }) => (
  <ImageBackground
    source={require('./assets/Dices.png')} // Provide the correct path to image
    style={styles.backgroundImage}
  >
    {children}
  </ImageBackground>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'information' : 'information-outline';
            } else if (route.name === 'Rules') {
              iconName = focused ? 'book' : 'book-outline'; 
            } else if (route.name === 'Gameboard') {
              iconName = focused ? 'dice-multiple' : 'dice-multiple-outline';
            } else if (route.name === 'Scoreboard') {
              iconName = focused ? 'view-list' : 'view-list-outline';
            }
            return (
              <MaterialCommunityIcons name={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: 'steelblue',
          tabBarInactiveTintColor: 'darkblue',
        })}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel: 'Restart',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={focused ? 'information' : 'information-outline'}
                size={size}
                color={color}
              />
            ),
            tabBarActiveTintColor: 'steelblue',
            tabBarInactiveTintColor: 'darkblue',
            tabBarStyle: { display: 'none' },
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen name='Rules' component={Rules} /> 
        <Tab.Screen name='Gameboard' component={Gameboard} />
        <Tab.Screen name='Scoreboard' component={Scoreboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
