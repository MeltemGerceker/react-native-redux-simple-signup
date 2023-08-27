import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
