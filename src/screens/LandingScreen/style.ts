import { StyleSheet, Dimensions } from "react-native";
import COLORS from "@/theme/Colors";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import FONTS from "@/theme/Fonts";
const { width, height } = Dimensions.get('window');
    
export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    mainContent: {
      flex: 1,
      flexDirection: 'row',
    },
    modelContainer: {
      flex: 0.7,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    modelContainerShrunk: {
      flex: 0.5,
    },
    modelImage: {
      width: '100%',
      height: '100%',
    },
    modelImageSmall: {
      width: '80%',
      height: '80%',
    },
    loadingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: COLORS.white_scale.white_80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      marginTop: verticalScale(10),
      fontSize: moderateScale(16),
      color: COLORS.grey_scale.grey_700,
      fontFamily: FONTS.medium,
    },
    errorOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: COLORS.white_scale.white_80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      fontSize: moderateScale(16),
      color: COLORS.grey_scale.grey_700,
      fontFamily: FONTS.medium,
      marginBottom: verticalScale(10),
    },
    retryButton: {
      backgroundColor: COLORS.grey_scale.grey_700,
      paddingHorizontal: scale(20),
      paddingVertical: verticalScale(10),
      borderRadius: moderateScale(8),
    },
    retryText: {
      color: COLORS.white_scale.white_100,
      fontSize: moderateScale(14),
      fontFamily: FONTS.medium,
    },
    sideMenu: {
      flex: 0.3,
      backgroundColor: COLORS.white_scale.white_60,
      // paddingVertical: verticalScale(20),
      paddingHorizontal: scale(10),
      justifyContent: 'space-around',
      paddingTop: verticalScale(50),
  
    },
    sideMenuExpanded: {
      flex: 0.5,
     
    },
    sideMenuSelected: {
      backgroundColor: COLORS.white_scale.white_100,
      
    },
    categoryItem: {
      alignItems: 'center',
      marginVertical: verticalScale(10),
    },
    categoryIconContainer: {
      width: scale(50),
      height: scale(50),
      borderRadius: scale(25),
      backgroundColor: COLORS.white_scale.white_100,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: verticalScale(8),
      shadowColor: COLORS.black_scale.black_100,
      shadowOffset: {
        width: 0,
        height: verticalScale(2),
      },
      shadowOpacity: 0.1,
      shadowRadius: moderateScale(4),
      elevation: 3,
    },
    categoryIcon: {
      width: scale(30),
      height: scale(30),
      tintColor: COLORS.grey_scale.grey_700,
    },
    categoryLabel: {
      fontSize: moderateScale(12),
      color: COLORS.grey_scale.grey_700,
      fontFamily: FONTS.medium,
      textAlign: 'center',
    },
    typesContainer: {
      flex: 1,
      
    },
    typesHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: scale(15),
      paddingVertical: verticalScale(15),
      borderBottomWidth: 1,
      borderBottomColor: COLORS.grey_scale.grey_200,
    },
    backButton: {
      width: scale(30),
      height: scale(30),
      borderRadius: scale(15),
      backgroundColor: COLORS.grey_scale.grey_200,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backButtonIcon: {
      width: scale(20),
      height: scale(20),
      transform: [{ rotate: '180deg' }],
      tintColor: COLORS.grey_scale.grey_700,
    },
    backButtonText: {
      fontSize: moderateScale(18),
      color: COLORS.grey_scale.grey_700,
      fontFamily: FONTS.bold,
      alignSelf: 'center',
    },
    typesTitle: {
      fontSize: moderateScale(18),
      fontFamily: FONTS.bold,
      color: COLORS.black_scale.black_100,
    },
    headerSpacer: {
      width: scale(30),
    },
    typesList: {
      paddingHorizontal: scale(10),
      paddingVertical: verticalScale(10),
     
     
    },
    typeRow: {
      justifyContent: 'space-between',
    },
    skuItem: {
    width:moderateScale(70),
      height: moderateScale(70),
      marginBottom: verticalScale(10),
      borderRadius: moderateScale(35),
      borderWidth: 1, 
      borderColor: COLORS.black_scale.black_100,
      overflow: 'hidden',
      backgroundColor: COLORS.grey_scale.grey_100,
    },
    skuImageContainer: {
      width: '100%',
      height: '100%',
      borderRadius: moderateScale(8),
      overflow: 'hidden',
    },
    skuImage: {
      width: '100%',
      height: '100%',
    },
    bottomNavigation: {
      flexDirection: 'row',
      backgroundColor: COLORS.white_scale.white_100,
      paddingHorizontal: scale(20),
      borderTopWidth: 1,
      borderTopColor: COLORS.grey_scale.grey_200,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
    },
    tabIcon: {
      width: scale(24),
      height: scale(24),
      marginBottom: verticalScale(4),
      tintColor: COLORS.grey_scale.grey_500,
    },
    selectedTabIcon: {
      tintColor: COLORS.grey_scale.grey_800,
    },
    tabLabel: {
      fontSize: moderateScale(12),
      color: COLORS.grey_scale.grey_500,
      fontFamily: FONTS.medium,
    },
    selectedTabLabel: {
      color: COLORS.grey_scale.grey_800,
    },
  });
  