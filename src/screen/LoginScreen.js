import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  Modal,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import styles from '../Styles/LoginScreen.styles';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [firebaseErrorModal, setFirebaseErrorModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validar formato de correo electrónico
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //Variable de modo debug admin para mostrar boton error de Firebase
  const ADMIN_DEBUG_MODE = true; // 👈 True = Ver boton / False = No ver boton

  // Estado para el código de error de Firebase (solo en modo debug)
  const [firebaseErrorCode, setFirebaseErrorCode] = useState(null);

  // Manejar cambio en el campo de correo
  const handleEmailChange = (text) => {
    setEmail(text);
    if (text && !validateEmail(text)) {
      setEmailError('Format de correu electrònic incorrecte');
    } else {
      setEmailError('');
    }
    setLoginError('');
  };

  // Manejar cambio en el campo de contraseña
  const handlePasswordChange = (text) => {
    setPassword(text);
    if (passwordError) setPasswordError('');
    setLoginError('');
  };

  // Manejar el proceso de inicio de sesión
  const handleLogin = async () => {
    if (!email) {
      setEmailError("Introdueix el teu correu electrònic");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Format de correu electrònic incorrecte");
      return;
    }

    if (!password) {
      setPasswordError("Introdueix la teva contrasenya");
      return;
    }

    setIsLoading(true);
    setLoginError("");
    setFirebaseErrorCode(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // ✅ Login correcto
      navigation.navigate("Pantalla_TapTopBar");

    } catch (error) {
      console.log("Firebase error:", error.code);

      // ❌ Errores cotidianos (NO técnicos)
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential"
      ) {
        setLoginError("El correu o la contrasenya són incorrectes");
      } 
      // 🚨 Errores NO cotidianos → técnicos
      else {
        setFirebaseErrorCode(error.code);
        setFirebaseErrorModal(true);
      }

    } finally {
      setIsLoading(false);
    }
  };



  // Navegar a la pantalla de recuperación de contraseña
  const handleForgotPassword = () => {
    if (!isLoading) {
      navigation.navigate('ForgotPasswordScreen');
    }
  };

  // Mostrar error de conexión Firebase (para pruebas)
  const handleTestFirebaseError = () => {
    if (!isLoading) {
      setFirebaseErrorModal(true);
    }
  };

  // Cerrar modal de error Firebase
  const handleCloseFirebaseError = () => {
    setFirebaseErrorModal(false);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* 🔙 Botón para volver */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                if (navigation.canGoBack()) {
                  navigation.goBack();
                } else {
                  navigation.navigate("Pantalla_Seleccion");
                }
              }}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo real de la aplicación */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/Logo_DangerZone.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Formulario de inicio de sesión CON FONDO #CBD5E1 */}
        <View style={styles.formWrapper}>
          <View style={styles.formContainer}>
            {/* Campo de correo electrónico */}
            <Text style={styles.label}>Correu electronic</Text>
            <TextInput
              style={[
                styles.input, 
                emailError ? styles.inputError : {},
                isLoading ? styles.disabledInput : {}
              ]}
              placeholder="danger@danger.com"
              placeholderTextColor="#999"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

            {/* Campo de contraseña */}
            <Text style={styles.label}>Contrasenya</Text>
            <TextInput
              style={[
                styles.input, 
                passwordError ? styles.inputError : {},
                isLoading ? styles.disabledInput : {}
              ]}
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry
              autoCapitalize="none"
              editable={!isLoading}
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

            {/* Error de inicio de sesión */}
            {loginError ? (
              <View style={styles.loginErrorContainer}>
                <Text style={styles.loginErrorText}>{loginError}</Text>
              </View>
            ) : null}

            {/* Enlace para recuperar contraseña */}
            <TouchableOpacity 
              style={styles.forgotPasswordButton}
              onPress={handleForgotPassword}
              disabled={isLoading}
            >
              <Text style={[
                styles.forgotPasswordText,
                isLoading ? styles.disabledText : {}
              ]}
              onPress={() => navigation.navigate('ForgotPassword')}>
                T'has oblidat de la contrasenya?
              </Text>
            </TouchableOpacity>

            {/* Botón de acceso o Loading */}
            <TouchableOpacity 
              style={[
                styles.loginButton,
                isLoading ? styles.loadingButton : {}
              ]} 
              onPress={handleLogin}
              activeOpacity={0.8}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.loginButtonText}>Accedir</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Botón de prueba para error Firebase */}
        {ADMIN_DEBUG_MODE && (
          <TouchableOpacity 
            style={styles.testButton}
            onPress={handleTestFirebaseError}
            activeOpacity={0.8}
            disabled={isLoading}
          >
            <Text style={styles.testButtonText}>
              Prova Error Firebase (ADMIN)
            </Text>
          </TouchableOpacity>
        )}
        {/* Espacio adicional para el teclado */}
        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Modal de error de conexión Firebase */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={firebaseErrorModal}
        onRequestClose={handleCloseFirebaseError}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Error de connexió</Text>
              <Text style={styles.modalText}>
                S'ha produït un error inesperat amb Firebase.
                {ADMIN_DEBUG_MODE && firebaseErrorCode && (
                  <>
                    {"\n\n"}Codi d'error:
                    {"\n"}{firebaseErrorCode}
                  </>
                )}
              </Text>
              <TouchableOpacity 
                style={styles.modalButton} 
                onPress={handleCloseFirebaseError}
                activeOpacity={0.8}
              >
                <Text style={styles.modalButtonText}>Acceptar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;