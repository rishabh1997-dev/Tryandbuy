import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from '@/screens/IntroScreen';
import FaceUpload from '@/screens/FaceUpload';
import UploadSuccess from '@/screens/UploadSuccess';

export type AppStackParamList = {
  IntroScreen: undefined;
  FaceUpload: undefined;
  UploadSuccess: undefined;
  
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}    initialRouteName="IntroScreen"
   >
    <Stack.Screen name="IntroScreen" component={IntroScreen} />
    <Stack.Screen name="FaceUpload" component={FaceUpload} />
    <Stack.Screen name="UploadSuccess" component={UploadSuccess} />
  </Stack.Navigator>
);

export default AppStack;
