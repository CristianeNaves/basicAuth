/** rotas que pode utilizar quando não está logado na aplicação. */
import React from 'react';
import SignIn from '../pages/SignIn';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
