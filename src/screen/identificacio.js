import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/Style_identificacio'; // ✅ importació de l'estil

export default function Identificacio() {
  const navigation = useNavigation();

  const handleIniciarSessio = () => {
    navigation.navigate('LoginScreen');
  };

  const handleRegistrar = () => {
    navigation.navigate('Pantalla_Formulario_Registro');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/danger_zone.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleIniciarSessio}
      >
        <Text style={styles.buttonText}>Iniciar Sessió</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={handleRegistrar}
      >
        <Text style={styles.buttonText}>Registrar-se</Text>
      </TouchableOpacity>
    </View>
  );
}