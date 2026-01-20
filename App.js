import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/screen/HomeScreen';
// import VideoScreen from './src/screen/VideoScreen';

// Importar las nuevas pantallas
import Identificacio from './src/screen/identificacio';
import LoginScreen from "./src/screen/LoginScreen";
import Pantalla_Formulario_Registro from "./src/screen/Pantalla_Formulario_Registro";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Identificacio" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Identificacio" component={Identificacio} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Pantalla_Formulario_Registro" component={Pantalla_Formulario_Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
