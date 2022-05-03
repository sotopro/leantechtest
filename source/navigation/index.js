import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './main';
import AuthNavigator from './auth';
import {AuthContext} from '../context/auth';

const AppNavigation = () => {
  const {auth} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {auth.token ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
