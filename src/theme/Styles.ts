import { moderateScale, verticalScale } from 'react-native-size-matters';
import COLORS from '@theme/Colors';
import Fonts from '@theme/Fonts';

const Styles = {
  colors: COLORS,
  typography: {
    fontRegular: {
      fontFamily: Fonts.regular,
    },
    fontMedium: {
      fontFamily: Fonts.medium,
    },
    fontBold: {
      fontFamily: Fonts.bold,
    },
    fontExtraBold: {
      fontFamily: Fonts.bold,
    },
    //Updated design
    fontSizes: {
      small: { fontSize: moderateScale(12) },
      medium: { fontSize: moderateScale(14) },
      large: { fontSize: moderateScale(16) },
      heading_small: { fontSize: moderateScale(18) },
      heading_medium: { fontSize: moderateScale(20) },
      heading_large: { fontSize: moderateScale(24) },
      heading_Xlarge: { fontSize: moderateScale(32) },
      caption: { fontSize: moderateScale(10) },
      xsmall: { fontSize: moderateScale(8) },
    },
    lineHeights: {
      small: { lineHeight: moderateScale(16) },
      medium: { lineHeight: moderateScale(20) },
      large: { lineHeight: moderateScale(24) },
      heading_small: { lineHeight: moderateScale(24) },
      heading_medium: { lineHeight: moderateScale(28) },
      heading_large: { lineHeight: moderateScale(32) },
      heading_Xlarge: { lineHeight: moderateScale(40) },
      caption: { lineHeight: moderateScale(16) },
    },
  },
  appPaddingHorizontal: {
    paddingHorizontal: moderateScale(16),
  },
  appMarginHorizontal: {
    marginHorizontal: moderateScale(16),
  },
  appBackgroundColor: {
    backgroundColor: COLORS.appBackgroundColor,
  },
  //Updated design
  borderRadius: {
    xsmall: { borderRadius: moderateScale(4) },
    small: { borderRadius: moderateScale(8) },
    medium: { borderRadius: moderateScale(12) },
    large: { borderRadius: moderateScale(16) },
    largest: { borderRadius: moderateScale(999) },
    modal: {
      borderTopLeftRadius: moderateScale(16),
      borderTopRightRadius: moderateScale(16),
    },
    gradientHeader: {
      borderBottomLeftRadius: moderateScale(16),
      borderBottomRightRadius: moderateScale(16),
    },
  },
  headerPadding: {
    paddingTop: verticalScale(10),
  },
};

export default Styles;
