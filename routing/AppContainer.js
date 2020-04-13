import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'native-base'
import Song from '../screens/song/Song';
import Playlist from '../screens/playlist/Playlist';
import Home from '../screens/home/Home';

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'פלייליסטים',}}/>
        <Stack.Screen name="Playlist" component={Playlist} options={{title: 'פלייליסט',}}/>
        <Stack.Screen name="Song" component={Song} options={{title: 'שיר',}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}