import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import COLORS from '@/theme/Colors';
import FONTS from '@/theme/Fonts';
import ImageLoading from '@/components/ImageLoading';
import FastImage from 'react-native-fast-image';
import { useGetMappedSKUDetailsQuery, MappedSKUItem } from '@/api/tryndbuyApi';
import Toast from '@/components/Toast';
import { styles } from './style';



const LandingScreen = ({ navigation }: { navigation: any }) => {
  const [selectedTab, setSelectedTab] = useState('wardrobe');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // RTK Query hook for fetching SKU details
  const { data: skuData, isLoading, error, refetch } = useGetMappedSKUDetailsQuery({});



  const categoryItems = [
    { id: 'dresses', icon: require('@/assets/images/dress.png'), label: 'Dresses' },
    { id: 'makeup', icon: require('@/assets/images/makeup.png'), label: 'Makeup' },
    { id: 'goggles', icon: require('@/assets/images/goggles.png'), label: 'Goggles' },
    { id: 'shoes', icon: require('@/assets/images/shoes.png'), label: 'Shoes' },
    { id: 'location', icon: require('@/assets/images/location.png'), label: 'Location' },
  ];

  const bottomTabs = [
    { id: 'wardrobe', icon: require('@/assets/images/wardrobe.png'), label: 'My Wardrobe' },
    { id: 'profile', icon: require('@/assets/images/profile.png'), label: 'My Profile' },
    { id: 'friends', icon: require('@/assets/images/friends.png'), label: 'Friends' },
  ];

  const handleCategoryPress = (categoryId: string) => {
    console.log('Category pressed:', categoryId);
    setSelectedCategory(categoryId);
  };

  const handleTabPress = (tabId: string) => {
    setSelectedTab(tabId);
    console.log('Tab pressed:', tabId);
    // TODO: Navigate to tab screen
  };

  const handleItemPress = (skuId: string) => {
    console.log('Item pressed:', skuId);
    setToastMessage(`SKUID: ${skuId}`);
    setToastVisible(true);
  };

  const hideToast = () => {
    setToastVisible(false);
  };

  // Render individual SKU item
  const renderSKUItem = ({item }: { item: any }) => {
    const imageUrl = `https://demo03.tryndbuy.com/images/Th${item.SKUID}.jpg`;
    return(
      <TouchableOpacity
        style={styles.skuItem}
        onPress={() => handleItemPress(item.SKUID)}
        activeOpacity={0.8}
      >
        <View style={styles.skuImageContainer}>
          <FastImage
            source={{ uri: imageUrl }}
            style={styles.skuImage}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  }

  // Log API data for debugging
  React.useEffect(() => {
    if (skuData) {
        console.log('skuData_PARSED', JSON.parse(skuData));
    }
    if (error) {
      console.log('API Error:', error);
    }
  }, [skuData, error]);

  return (
    <FastImage 
      source={require('@/assets/images/Background.png')} 
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      
      {/* Main Content Area */}
      <View style={styles.mainContent}>
        {/* Fashion Model */}
        <View style={[
          styles.modelContainer,
          selectedCategory && styles.modelContainerShrunk
        ]}>
          <FastImage 
            source={require('@/assets/images/fashion-model.png')} 
            style={[
              styles.modelImage,
              !selectedCategory && styles.modelImageSmall
            ]}
            resizeMode="contain"
          />
          
          {/* Loading Indicator */}
          {isLoading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color={COLORS.grey_scale.grey_700} />
              <Text style={styles.loadingText}>Loading products...</Text>
            </View>
          )}
          
          {/* Error State */}
          {error && (
            <View style={styles.errorOverlay}>
              <Text style={styles.errorText}>Failed to load products</Text>
              <TouchableOpacity style={styles.retryButton} onPress={() => refetch()}>
                <Text style={styles.retryText}>Retry</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Side Menu */}
        <View style={[
          styles.sideMenu,
          selectedCategory && styles.sideMenuSelected,
          selectedCategory && styles.sideMenuExpanded
        ]}>
          {selectedCategory ? (
            // SKU Items Section
            <View style={styles.typesContainer}>
              <View style={styles.typesHeader}>
                <TouchableOpacity 
                  style={styles.backButton}
                  onPress={() => setSelectedCategory(null)}
                >
                  <ImageLoading
                    source={require('@/assets/images/arrowright.png')}
                    style={styles.backButtonIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Text style={styles.typesTitle}>Products</Text>
                <View style={styles.headerSpacer} />
              </View>
              <FlatList
                data={skuData ? JSON.parse(skuData).MappedSkuList : []}
                renderItem={renderSKUItem}
                keyExtractor={(item,index) => index.toString()}
                numColumns={2}
                columnWrapperStyle={styles.typeRow}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.typesList}
              />
            </View>
          ) : (
            // Categories Section
            <>
              {categoryItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.categoryItem}
                  onPress={() => handleCategoryPress(item.id)}
                  activeOpacity={0.8}
                >
                  <View style={styles.categoryIconContainer}>
                    <ImageLoading 
                      source={item.icon}
                      style={styles.categoryIcon}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.categoryLabel}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </>
          )}
        </View>
      </View>

      {/* Bottom Navigation */}
      <SafeAreaView style={styles.bottomNavigation}>
        {bottomTabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={styles.tabItem}
            onPress={() => handleTabPress(tab.id)}
            activeOpacity={0.8}
          >
            <ImageLoading 
              source={tab.icon}
              style={[
                styles.tabIcon,
                selectedTab === tab.id && styles.selectedTabIcon
              ]}
              resizeMode="contain"
            />
            <Text style={[
              styles.tabLabel,
              selectedTab === tab.id && styles.selectedTabLabel
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </SafeAreaView>

      {/* Toast */}
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onHide={hideToast}
      />
    </FastImage>
  );
};


export default LandingScreen;