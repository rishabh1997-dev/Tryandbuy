import COLORS from "@/theme/Colors";
import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import FONTS from "@/theme/Fonts";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.appBackgroundColor
    },
    content: {
      flex: 1,
      paddingHorizontal: scale(20),
      alignItems: 'center',
    },
    imageContainer: {
      marginTop: verticalScale(20),
    //   marginBottom: verticalScale(40),
      alignItems: 'center',
    },
    fashionAdvisorImage: {
      width: scale(280),
      height: verticalScale(350),
      // No borderRadius as the image should maintain its natural shape
    },
    messageContainer: {
      backgroundColor: COLORS.appBackgroundColor,
      borderRadius: moderateScale(16),
    //   paddingHorizontal: scale(20),
      paddingVertical: verticalScale(10),
      marginBottom: verticalScale(30),
      minHeight: verticalScale(80),
      justifyContent: 'center',
      position: 'relative',
      borderWidth: 1,
      borderColor: COLORS.grey_scale.grey_300,
    },
    welcomeText: {
      fontSize: moderateScale(16),
      lineHeight: verticalScale(24),
      color: COLORS.grey_scale.grey_700,
      textAlign: 'center',
      fontFamily: FONTS.regular,
     // paddingRight: scale(60), // Make space for the arrow button
    },
    getStartedButton: {
      width: moderateScale(48),
      height: verticalScale(48),
      borderRadius: scale(24),
      backgroundColor: COLORS.grey_scale.grey_500,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonIcon: {
      fontSize: moderateScale(20),
      color: COLORS.white_scale.white_100,
      fontWeight: 'bold',
    },
    arrowButton: {
    //   bottom: verticalScale(12),
      borderRadius: moderateScale(18),
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingRight: moderateScale(10),
    },
    arrowIcon: {
      width: moderateScale(40),
      height: moderateScale(40),
      tintColor: COLORS.grey_scale.grey_600,
    },
  });
  export default styles;