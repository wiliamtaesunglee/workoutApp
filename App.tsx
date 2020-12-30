import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native'

import Routes from './src/routes'

import {
  StatusBar,
} from 'react-native';


const App:React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar/>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
