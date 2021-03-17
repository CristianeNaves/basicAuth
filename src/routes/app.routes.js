/** rotas que pode utilizar quando está logado na aplicação. */
import React from 'react';
import Dashboard from '../pages/Dashboard';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
);

export default AppRoutes;
