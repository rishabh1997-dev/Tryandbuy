import React, { useState } from 'react';
import { View, ActivityIndicator, ViewStyle } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import Colors from '@/theme/Colors';
import componentStyles from './style';

interface ImageLoadingProps extends Omit<FastImageProps, 'style'> {
  source: any;
  resizeMode?: any;
  style?: any;
  containerStyle?: ViewStyle;
  loadingColor?: string;
  loadingSize?: 'small' | 'large';
  fallbackSource?: any;
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  onError?: () => void;
}

const ImageLoading: React.FC<ImageLoadingProps> = ({
  source,
  style,
  containerStyle,
  loadingColor = Colors.dotActiveColor,
  loadingSize = 'small',
  fallbackSource,
  onLoadStart,
  onLoadEnd,
  onError,
  ...restProps
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
    onLoadStart?.();
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
    onLoadEnd?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  return (
    <View style={[componentStyles.container, containerStyle]}>
      <FastImage
        source={hasError && fallbackSource ? fallbackSource : source}
        style={[componentStyles.image, style]}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        resizeMode={FastImage.resizeMode.cover}
        {...restProps}
      />
      {isLoading && (
        <View style={componentStyles.loadingContainer}>
          <ActivityIndicator size={loadingSize} color={loadingColor} />
        </View>
      )}
    </View>
  );
};

export default ImageLoading;
