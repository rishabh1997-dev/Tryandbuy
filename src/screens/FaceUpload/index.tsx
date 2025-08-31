

import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '@/theme/Colors';
import styles from './style';
import ImageLoading from '@/components/ImageLoading';
import { permissionService } from '@/services/permissionService';
import {
    launchCamera,
    launchImageLibrary,
    ImagePickerResponse,
    MediaType,
    CameraType,
  } from 'react-native-image-picker';
import Button from '@/components/Button';

const FaceUpload = ({navigation}:{navigation:any}) => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState<ImagePickerResponse | null>(null);

  const handleImagePicker = async (type: 'camera' | 'gallery') => {
    const permissionType = type === 'camera' ? 'camera' : 'photo';
    const permissionResult = await permissionService.requestPermission(
      permissionType,
    );

    if (!permissionResult.granted) {
      Alert.alert(permissionResult.message || 'Permission denied');
      return;
    }

    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: true,
      maxHeight: 2000,
      maxWidth: 2000,
      quality: 0.8 as const,
      cameraType: 'front' as CameraType, 

    };      

    try {
      const response: ImagePickerResponse =
        type === 'camera'
          ? await launchCamera(options)
          : await launchImageLibrary(options);

      if (response.didCancel) {
        return;
      }

      if (response.errorCode) {
        console.error(
          'Image picker error:',
          response.errorCode,
          response.errorMessage,
        );
        Alert.alert('Error selecting image');
        return;
      }

      if (!response.assets || response.assets.length === 0) {
        Alert.alert('No image selected');
        return;
      }

      const selectedAsset = response.assets[0];
      const imageUri = selectedAsset.uri;

      if (!imageUri) {
        Alert.alert('Invalid image file');
        return;
      }
      setImage(response);

    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error selecting image');
    }
  };

  const handleUpload = useCallback(() => {
    console.log('Upload pressed');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.replace('UploadSuccess');
    }, 2000);
  }, [ navigation, setLoading ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.appBackgroundColor} />
      
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.subtitle}>FACIAL ATTRIBUTES</Text>
        <Text style={styles.title}>Let's add a Photo</Text>
        <View style={styles.headerLine} />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Image Placeholder */}
        {image ? (
          <ImageLoading 
            source={{ uri: image?.assets?.[0]?.uri }} 
            style={styles.imageContainer}
            resizeMode="cover"
          />
        ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.plusIcon}>+</Text>
          <Text style={styles.placeholderText}>Add an image</Text>
        </View>
        )}

        {/* Action Buttons */}
        {image ? (
            <View style={styles.uploadButtonContainer}> 
            <Button
                text="UPLOAD"
                onPress={() => handleUpload()}
                loading={loading}
                // buttonStyle={styles.uploadButton}
            />
            </View>

        ): (
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleImagePicker('gallery')}
            activeOpacity={0.8}
          >
            <View style={styles.buttonIcon}>
              <ImageLoading 
                source={require('@/assets/images/photo.png')} 
                style={styles.iconImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.buttonText}>From Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleImagePicker('camera')}
            activeOpacity={0.8}
          >
            <View style={styles.buttonIcon}>
              <ImageLoading 
                source={require('@/assets/images/cameraImg.png')} 
                style={styles.iconImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.buttonText}>Take a selfie</Text>
          </TouchableOpacity>
        </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FaceUpload;