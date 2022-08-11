import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

import {store} from './src/redux/store';
import BuildComponentTree from './src/utils/buildComponentTree';
import MainStack from '@navigation/MainStack';
import {ErrorBoundary} from '@screens';

const Providers = BuildComponentTree([
  [Provider, {store}],
  [NativeBaseProvider],
  [NavigationContainer],
  [ErrorBoundary],
]);

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Providers>
      <SafeAreaView style={styles.backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainStack />
      </SafeAreaView>
    </Providers>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
