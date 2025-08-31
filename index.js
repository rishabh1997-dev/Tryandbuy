/**
 * @format
 */

import { AppRegistry, Text, TextInput, Alert } from 'react-native';
import App from './App';
import { name as appName } from './app.json';


Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

Alert.alert.defaultProps = Alert.alert.defaultProps || {};
Alert.alert.defaultProps.allowFontScaling = false;


AppRegistry.registerComponent(appName, () => App);
