import React from 'react';
import BottomTabBar from './src/components/BottomTabBar';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OnlineConsultScreen from './src/screens/ OnlineConsult/OnlineConsultScreen';
import Home from './src/screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  OnlineConsult: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type OnlineConsultScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OnlineConsult'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="auto" />
      <View style={styles.container}>
        <View style={styles.content}>
          {/*<AppHeader
            variant="page"
            title="Online Consult"
            // onBackPress={() => navigate.goBack()}
          />
          <OnlineConsultScreen />*/}

          {/*<AppHeader variant="home" />
          <Home />*/}
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen
                name="OnlineConsult"
                component={OnlineConsultScreen}
              />
            </Stack.Navigator>
            <BottomTabBar />
          </NavigationContainer>
        </View>
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
