import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import COLORS from '@/theme/Colors';
import FONTS from '@/theme/Fonts';
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.appBackgroundColor,
    },
    closeButton: {
    //   position: 'absolute',
      marginTop: verticalScale(20),
      right: scale(20),
    //   width: scale(32),
    //   height: scale(32),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:"flex-end",

    },
    closeIcon: {
      fontSize: moderateScale(32),
      color: COLORS.grey_scale.grey_600,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: scale(20),
     

    },
    successCircle: {
      width: moderateScale(150),
      height: moderateScale(150),
      borderRadius: moderateScale(1),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: verticalScale(40),
    },
    successIcon: {
      width: moderateScale(150),
      height: moderateScale(150),
      tintColor: COLORS.white_scale.white_100,
    },
    messageContainer: {
      alignItems: 'center',
    },
    primaryMessage: {
      fontSize: moderateScale(20),
      color: COLORS.grey_scale.grey_800,
      fontFamily: FONTS.bold,
      textAlign: 'center',
      marginBottom: verticalScale(8),
    },
    secondaryMessage: {
      fontSize: moderateScale(16),
      color: COLORS.grey_scale.grey_700,
      fontFamily: FONTS.regular,
      textAlign: 'center',
    },
    progressContainer: {
      height: verticalScale(4),
      width:"100%",
      backgroundColor: COLORS.grey_scale.grey_200,
      marginHorizontal: scale(20),
      marginBottom: verticalScale(20),
      borderRadius: moderateScale(2),
      marginTop: verticalScale(40),
    //   overflow: 'hidden',
    //    flex:1
    },
    progressBar: {
        height: verticalScale(4),
        width:"100%",
    //   height: '100%',
      backgroundColor: COLORS.grey_scale.grey_800,
      borderRadius: moderateScale(2),
    //   flex:1
    },
  });

  export default styles;
  