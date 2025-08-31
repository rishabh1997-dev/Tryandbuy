import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { Linking, Platform } from 'react-native';
import { Alert } from 'react-native';

export const checkCameraPermission = async () => {
  return new Promise(async resolve => {
    try {
      var result;
      if (Platform.OS === 'android') {
        result = await check(PERMISSIONS.ANDROID.CAMERA);
      } else {
        result = await check(PERMISSIONS.IOS.CAMERA);
      }

      var permissionStatus = false;
      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert('Camera not available');
          permissionStatus = false;
          break;
        case RESULTS.DENIED:
          try {
            var resultRequest;
            if (Platform.OS === 'android') {
              resultRequest = await request(PERMISSIONS.ANDROID.CAMERA);
            } else {
              resultRequest = await request(PERMISSIONS.IOS.CAMERA);
            }

            switch (resultRequest) {
              case RESULTS.UNAVAILABLE:
                console.log(
                  'This feature is not available (on this device / in this context)',
                );
                permissionStatus = false;
                break;
              case RESULTS.DENIED:
                console.log('The permission is denied but requestable');
                permissionStatus = false;
                break;
              case RESULTS.GRANTED:
                permissionStatus = true;
                break;
              case RESULTS.BLOCKED:
                permissionStatus = false;
                Alert.alert('Permission to request camera was denied', '', [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'Open Settings',
                    onPress: () => Linking.openSettings(),
                  },
                ]);
                console.log(
                  'The permission is denied and not requestable anymore',
                );
                break;
            }
          } catch (error) {
            console.error('Error requesting permission:', error);
          }
          break;
        case RESULTS.GRANTED:
          permissionStatus = true;
          break;
        case RESULTS.BLOCKED:
          Alert.alert('Permission to request camera was denied', '', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'Open Settings', onPress: () => Linking.openSettings() },
          ]);
          permissionStatus = false;
          break;
      }
      resolve(permissionStatus);
    } catch (error) {
      console.error('Error checking permission:', error);
    }
  });
};

/**
 * Checks and requests photo library permission for both iOS and Android.
 * Handles full, limited, denied, and blocked states, and guides user to settings if needed.
 * Returns an object: { granted: boolean, limited: boolean, blocked: boolean, canAskAgain: boolean }
 */
export const checkAndRequestPhotoPermission = async () => {
  let result;
  let requestResult;
  let permissionStatus = {
    granted: false,
    limited: false,
    blocked: false,
    canAskAgain: true,
  };

  try {
    if (Platform.OS === 'android') {
      result = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert('Photo library not available');
          permissionStatus.canAskAgain = false;
          break;
        case RESULTS.DENIED:
          requestResult = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
          if (requestResult === RESULTS.GRANTED) {
            permissionStatus.granted = true;
          } else if (requestResult === RESULTS.BLOCKED) {
            permissionStatus.blocked = true;
            permissionStatus.canAskAgain = false;
            Alert.alert(
              'Permission Denied',
              'Photo library access is denied. Please enable it in settings.',
              [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Open Settings',
                  onPress: () => Linking.openSettings(),
                },
              ],
            );
          }
          break;
        case RESULTS.GRANTED:
          permissionStatus.granted = true;
          break;
        case RESULTS.BLOCKED:
          permissionStatus.blocked = true;
          permissionStatus.canAskAgain = false;
          Alert.alert(
            'Permission Denied',
            'Photo library access is denied. Please enable it in settings.',
            [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Open Settings', onPress: () => Linking.openSettings() },
            ],
          );
          break;
      }
    } else {
      // iOS
      result = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert('Photo library not available');
          permissionStatus.canAskAgain = false;
          break;
        case RESULTS.DENIED:
          requestResult = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
          if (requestResult === RESULTS.GRANTED) {
            permissionStatus.granted = true;
          } else if (requestResult === RESULTS.LIMITED) {
            permissionStatus.limited = true;
          } else if (requestResult === RESULTS.BLOCKED) {
            permissionStatus.blocked = true;
            permissionStatus.canAskAgain = false;
            Alert.alert(
              'Permission Denied',
              'Photo library access is denied. Please enable it in settings.',
              [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Open Settings',
                  onPress: () => Linking.openSettings(),
                },
              ],
            );
          }
          break;
        case RESULTS.GRANTED:
          permissionStatus.granted = true;
          break;
        case RESULTS.LIMITED:
          permissionStatus.limited = true;

          break;
        case RESULTS.BLOCKED:
          permissionStatus.blocked = true;
          permissionStatus.canAskAgain = false;
          Alert.alert(
            'Permission Denied',
            'Photo library access is denied. Please enable it in settings.',
            [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Open Settings', onPress: () => Linking.openSettings() },
            ],
          );
          break;
      }
    }
  } catch (error) {
    console.error('Error checking/requesting photo permission:', error);
  }

  return permissionStatus?.granted || permissionStatus?.limited ? true : false;
};