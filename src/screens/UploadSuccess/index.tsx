import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Animated,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '@/theme/Colors';
import ImageLoading from '@/components/ImageLoading';
import styles from './style';

const UploadSuccess = ({navigation}:{navigation:any}) => {
  const progressAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the 3-second loading animation
    Animated.timing(progressAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      // Navigate to LandingScreen after animation completes
      setTimeout(() => {
        navigation.navigate('LandingScreen');
      }, 500);
    });
  }, []);

  const handleClose = () => {
    // TODO: Navigate back or close modal
    console.log('Close pressed');
    navigation.replace('IntroScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.appBackgroundColor} />
      <TouchableOpacity
        style={styles.closeButton}
        onPress={handleClose}
        activeOpacity={0.8}
      >
        <Text style={styles.closeIcon}>×</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        {/* Success Indicator */}
        <View style={styles.successCircle}>
          <ImageLoading 
            source={require('@/assets/images/success.png')} 
            style={styles.successIcon}
            resizeMode="contain"
          />
        </View>

        {/* Success Messages */}
        <View style={styles.messageContainer}>
          <Text style={styles.primaryMessage}>
            Selfie captured perfectly!
          </Text>
          <Text style={styles.secondaryMessage}>
            Let's build your own fashion avatar.
          </Text>
        </View>
        <View style={styles.progressContainer}>
        <Animated.View 
          style={[
            styles.progressBar,
            {
              width: progressAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]} 
        />
      </View>
      </View>

      
    
    </SafeAreaView>
  );
};


export default UploadSuccess;