
import { Platform, StyleSheet } from 'react-native';
import Styles from '@theme/Styles';
import { verticalScale } from 'react-native-size-matters';

export default StyleSheet.create({
  primaryButton: {
    width: '100%',
    ...Styles.borderRadius.small,
    backgroundColor: Styles.colors.grey_scale.grey_950,
    alignItems: 'center',
    height: verticalScale(48),
    justifyContent: 'center',
  },
  androidSpacing: {
    marginBottom: Platform.OS === 'android' ? verticalScale(12) : 0,
  },
  primaryButtonDisabled: {
    backgroundColor: Styles.colors.grey_scale.grey_200,
  },
  primaryButtonText: {
    ...Styles.typography.fontMedium,
    ...Styles.typography.fontSizes.large,
    ...Styles.typography.lineHeights.large,
    color: Styles.colors.white_scale.white_100,
  },
  primaryButtonTextDisabled: {
    color: Styles.colors.grey_scale.grey_400,
  },
  zIndex1: {
    zIndex: 1,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Styles.colors.grey_scale.grey_200,
  },
  secondaryButtonText: {
    color: Styles.colors.grey_scale.grey_950,
  },
});

