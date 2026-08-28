import React from 'react';

// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// import { SafeAreaProvider } from 'react-native-safe-area-context';

// // import AppHeader from './src/components/AppHeader';

// // import HomeScreen from './src/screens/Home/HomeScreen';
import BottomTabBar from './src/components/BottomTabBar';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppHeader from './src/components/AppHeader';
import OnlineConsultScreen from './src/screens/ OnlineConsult/OnlineConsultScreen';
// import HomeScreen from './src/screens/Home/HomeScreen';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="auto" />
      <View style={styles.container}>
        <View style={styles.content}>
          {/*<AppHeader variant="page" />*/}
          {/* <HomeScreen /> */}
          <AppHeader
            variant="page"
            title="Online Consult"
            // onBackPress={() => navigate.goBack()}
          />

          <OnlineConsultScreen />
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
