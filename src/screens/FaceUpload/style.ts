import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import COLORS from '@/theme/Colors';
import FONTS from '@/theme/Fonts';

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.appBackgroundColor,
    },
    header: {
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(20),
      paddingBottom: verticalScale(16),
    },
    subtitle: {
      fontSize: moderateScale(12),
      color: COLORS.grey_scale.grey_500,
      fontFamily: FONTS.medium,
      marginBottom: verticalScale(4),
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    title: {
      fontSize: moderateScale(24),
      color: COLORS.grey_scale.grey_800,
      fontFamily: FONTS.bold,
      marginBottom: verticalScale(16),
    },
    headerLine: {
      height: 1,
      backgroundColor: COLORS.grey_scale.grey_200,
    },
    content: {
      flex: 1,
      paddingHorizontal: scale(20),
      paddingTop: verticalScale(40),
      alignItems: 'center',
    },
    imagePlaceholder: {
      width: moderateScale(200),
      height: verticalScale(250),
      borderWidth: 2,
      borderColor: COLORS.grey_scale.grey_300,
      borderStyle: 'dashed',
      borderRadius: verticalScale(160),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: verticalScale(60),
    },
    imageContainer: {
      width: moderateScale(250),
      height: moderateScale(250),
      borderRadius: moderateScale(125),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: COLORS.green,
    },
    plusIcon: {
      fontSize: moderateScale(48),
      color: COLORS.grey_scale.grey_400,
      marginBottom: verticalScale(12),
    },
    placeholderText: {
      fontSize: moderateScale(16),
      color: COLORS.grey_scale.grey_500,
      fontFamily: FONTS.regular,
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: scale(10),

    },
    actionButton: {
      alignItems: 'center',
      flex: 1,
      marginHorizontal: scale(8),
    },
    buttonIcon: {
      width: scale(60),
      height: scale(60),
      borderRadius: moderateScale(8),
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconImage: {
      width: scale(32),
      height: scale(32),
      tintColor: COLORS.grey_scale.grey_600,
    },
    buttonText: {
      fontSize: moderateScale(14),
      color: COLORS.grey_scale.grey_700,
      fontFamily: FONTS.medium,
      textAlign: 'center',
    },
    uploadButtonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(20),
      backgroundColor: COLORS.appBackgroundColor,
    },
   
  });   

  export default styles;