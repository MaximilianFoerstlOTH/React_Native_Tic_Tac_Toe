import { StyleSheet, Text, View, Pressable, Button, ScrollView} from 'react-native';
import { Component, Dispatch, ReactNode, useRef, useState } from 'react';
import { initRectangles , clearRectangles} from './src/InitRectangles';
import { styles } from './styles/styles';


function main() {
  const [rects, setRects] = useState(initRectangles());
  return (
    <ScrollView contentContainerStyle = {styles.center} >
      <View >
        <Pressable 
          style={styles.center_item_vertically}
          onPress = {() => {
            setRects(clearRectangles());
          }}>
          <Text style={[styles.text]}>
            Reset
          </Text>
        </Pressable>

        {rects}
      </View>
    </ScrollView>
  )
}

export default main;

/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from './src/Gamescreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
*/