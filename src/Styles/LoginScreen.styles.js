import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -80,
    marginTop: -10,
  },
  logo: {
    width: 380,
    height: 400,
  },
  // CONTORNO CON FONDO #CBD5E1
  formWrapper: {
    backgroundColor: '#CBD5E1',
    borderRadius: 12,
    padding: 2,
    marginHorizontal: 10,
  },
  formContainer: {
    backgroundColor: '#CBD5E1',
    borderRadius: 10,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 5,
    backgroundColor: '#f9f9f9',
  },
  inputError: {
    borderColor: '#B3261E',
    backgroundColor: '#FFF5F5',
  },
  disabledInput: {
    backgroundColor: '#f0f0f0',
    borderColor: '#e0e0e0',
    opacity: 0.7,
  },
  errorText: {
    color: '#B3261E',
    fontSize: 14,
    marginBottom: 15,
    marginLeft: 4,
  },
  loginErrorContainer: {
    backgroundColor: '#FFF5F5',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#B3261E',
  },
  loginErrorText: {
    color: '#B3261E',
    fontSize: 14,
    textAlign: 'center',
  },
  forgotPasswordButton: {
    marginVertical: 15,
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#B3261E',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
    minHeight: 56,
    justifyContent: 'center',
  },
  loadingButton: {
    backgroundColor: '#c6716dff',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  // Botón de prueba Firebase
  testButton: {
    backgroundColor: '#6B7280',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },
  disabledTestButton: {
    backgroundColor: '#9CA3AF',
    opacity: 0.7,
  },
  testButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  disabledText: {
    color: '#9CA3AF',
  },
  bottomSpace: {
    height: 30,
  },
  // Estilos del Modal de error Firebase
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#CBD5E1',
    borderRadius: 12,
    padding: 2,
    marginHorizontal: 20,
    width: '80%',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  modalButton: {
    backgroundColor: '#B3261E',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    minWidth: 120,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
    backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: "#B3261E",
    padding: 8,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default styles;