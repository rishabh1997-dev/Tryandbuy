/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Navigator from '@navigation/Navigator';
import { Provider } from '@/redux/Provider';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigator />  
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
