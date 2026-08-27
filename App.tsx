import React from 'react';

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

// import AppHeader from './src/components/AppHeader';

// import HomeScreen from './src/screens/Home/HomeScreen';
import BottomTabBar from './src/components/BottomTabBar';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <View style={styles.content}>
          {/* <AppHeader variant="home" /> */}
          {/* <HomeScreen /> */}
        </View>
        <BottomTabBar />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F7F8FA',
  },
  content: {
    flex: 1,
  },
});

export default App;
