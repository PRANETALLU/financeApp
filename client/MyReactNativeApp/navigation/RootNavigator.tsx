import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../auth/SignUp';
import Login from '../auth/Login';
import { Test } from '../auth/TestPage';
import { UserAuthProvider } from '../context/UserContext';

const RootNavigator = () => {
  return (
    <UserAuthProvider>
      <NavigationContainer>
        <SignUp />
        <Login />
        <Test />
      </NavigationContainer>
    </UserAuthProvider>
  );
};

export default RootNavigator;