import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, User} from '@screens';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

export default RootStack;
