import { Platform } from 'react-native';
import { checkCameraPermission, checkAndRequestPhotoPermission } from '@/utils/CommonFunctions';

export interface PermissionResult {
  granted: boolean;
  message?: string;
}

export class PermissionService {
  private static instance: PermissionService;

  public static getInstance(): PermissionService {
    if (!PermissionService.instance) {
      PermissionService.instance = new PermissionService();
    }
    return PermissionService.instance;
  }

  /**
   * Check and request camera permission
   */
  public async requestCameraPermission(): Promise<PermissionResult> {
    try {
      const hasPermission = await checkCameraPermission() as boolean;
      return {
        granted: hasPermission,
        message: hasPermission ? undefined : 'Camera permission is required to take photos'
      };
    } catch (error) {
      console.error('Camera permission error:', error);
      return {
        granted: false,
        message: 'Failed to check camera permission'
      };
    }
  }

  /**
   * Check and request photo library permission
   */
  public async requestPhotoPermission(): Promise<PermissionResult> {
    try {
      const hasPermission = await checkAndRequestPhotoPermission() as boolean;
      return {
        granted: hasPermission,
        message: hasPermission ? undefined : 'Photo library permission is required to select images'
      };
    } catch (error) {
      console.error('Photo permission error:', error);
      return {
        granted: false,
        message: 'Failed to check photo library permission'
      };
    }
  }

  /**
   * Request permission based on type
   */
  public async requestPermission(type: 'camera' | 'photo'): Promise<PermissionResult> {
    switch (type) {
      case 'camera':
        return this.requestCameraPermission();
      case 'photo':
        return this.requestPhotoPermission();
      default:
        return {
          granted: false,
          message: 'Unknown permission type'
        };
    }
  }

  /**
   * Check if platform supports specific permissions
   */
  public isPermissionSupported(type: 'camera' | 'photo'): boolean {
    switch (type) {
      case 'camera':
        return true; // Both iOS and Android support camera
      case 'photo':
        return true; // Both iOS and Android support photo library
      default:
        return false;
    }
  }

  /**
   * Get permission request message for UI
   */
  public getPermissionMessage(type: 'camera' | 'photo'): string {
    const platform = Platform.OS;
    
    switch (type) {
      case 'camera':
        return `${platform === 'ios' ? 'Camera' : 'Camera'} access is required to take photos. Please enable it in your device settings.`;
      case 'photo':
        return `${platform === 'ios' ? 'Photos' : 'Storage'} access is required to select images. Please enable it in your device settings.`;
      default:
        return 'Permission is required for this action.';
    }
  }

  /**
   * Check if permissions are granted for image picker
   */
  public async checkImagePickerPermissions(type: 'camera' | 'gallery'): Promise<PermissionResult> {
    const permissionType = type === 'camera' ? 'camera' : 'photo';
    return this.requestPermission(permissionType);
  }
}

// Export singleton instance
export const permissionService = PermissionService.getInstance(); 