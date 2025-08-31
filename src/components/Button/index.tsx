import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import style from './style';
import Styles from '@/theme/Styles';

interface ButtonProps {
  onPress: () => void;
  text: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  secondary?: boolean;
  androidSpacing?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  buttonStyle,
  textStyle,
  disabled,
  loading,
  secondary,
  androidSpacing,
}) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <TouchableOpacity
      style={[
        style.primaryButton,
        disabled && style.primaryButtonDisabled,
        secondary && style.secondaryButton,
        buttonStyle,
        androidSpacing && style.androidSpacing,
      ]}
      onPress={handlePress}
      activeOpacity={disabled ? 1 : 0.7}
      disabled={disabled || loading}
    >
      <React.Fragment>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={Styles.colors.white_scale.white_100}
            style={style.zIndex1}
          />
        ) : (
          <Text
            style={[
              style.primaryButtonText,
              disabled && style.primaryButtonTextDisabled,
              secondary && style.secondaryButtonText,

              textStyle,
              style.zIndex1,
            ]}
          >
            {text}
          </Text>
        )}
      </React.Fragment>
    </TouchableOpacity>
  );
};

export default Button;
