import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignUp  from '../auth/SignUp';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <SignUp />
    </NavigationContainer>
  );
};

export default RootNavigator;