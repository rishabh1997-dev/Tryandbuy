import React,{useEffect} from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import AppStack from '@navigation/AppStack';

export type RootStackParamList = {
  AppStack: undefined;
};

export default function Navigator() {

  return (
    <NavigationContainer >
    <AppStack  />
    </NavigationContainer>
  );
}
