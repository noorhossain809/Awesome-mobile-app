import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screence/Home';
import ProductDetails from './src/screence/ProductDetails';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    'Roboto': require('./assets/fonts/LeagueSpartan-VariableFont_wght.ttf'),
    'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });
  
  if (!fontLoaded) {
    return null;
  }
  return (
    <>
    <NavigationContainer theme={DarkTheme}>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={ProductDetails} />
    </Stack.Navigator>
  </NavigationContainer>
  <StatusBar style='light' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
