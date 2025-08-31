

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '@/theme/Colors';
import styles from './style';
import ImageLoading from '@/components/ImageLoading';

const IntroScreen = ({navigation}:{navigation:any}) => {
  const handleGetStarted = () => {
    // TODO: Navigate to next screen
    console.log('Get Started pressed');
    navigation.replace('FaceUpload');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.appBackgroundColor} />
      
      {/* Main Content */}
      <View style={styles.content}>
        {/* Fashion Advisor Image */}
        <View style={styles.imageContainer}>
          <ImageLoading 
            source={require('@/assets/images/user.png')} 
            style={styles.fashionAdvisorImage}
            resizeMode="contain"
          />
        </View>

        {/* Welcome Message */}
        <View style={styles.messageContainer}>
          <Text style={styles.welcomeText}>
            Hi. I am your fashion advisor. Let's get you started with creating your mix & match fashion avatar.
          </Text>
          
          {/* Arrow Button */}
          <TouchableOpacity
            style={styles.arrowButton}
            activeOpacity={0.8}
            onPress={handleGetStarted}
          >
            <ImageLoading 
              source={require('@/assets/images/arrowright.png')} 
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* Get Started Button */}
        
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;