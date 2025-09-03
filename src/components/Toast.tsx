import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import COLORS from '@/theme/Colors';
import FONTS from '@/theme/Fonts';

interface ToastProps {
  message: string;
  visible: boolean;
  onHide: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, visible, onHide }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          onHide();
        });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visible, fadeAnim, onHide]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: verticalScale(100),
    left: scale(20),
    right: scale(20),
    backgroundColor: COLORS.grey_scale.grey_800,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(8),
    zIndex: 1000,
    shadowColor: COLORS.black_scale.black_100,
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(4),
    elevation: 5,
  },
  text: {
    color: COLORS.white_scale.white_100,
    fontSize: moderateScale(14),
    fontFamily: FONTS.medium,
    textAlign: 'center',
  },
});

export default Toast;
