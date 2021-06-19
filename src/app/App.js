
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import { store } from "../store";
import SongList from '../screens/song';
import ViewSong from '../screens/song/view';


const Stack = createStackNavigator();

function SongsScreen() {
  return (
    <SongList />
  );
}

function ViewSongScreen() {
  return (
    <ViewSong />
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <>
            <Stack.Screen name="Songs" component={SongsScreen} />
            <Stack.Screen name="ViewSong" component={ViewSongScreen} />
          </>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;