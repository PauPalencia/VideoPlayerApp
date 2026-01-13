import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF7FF",
    alignItems: "center",
    justifyContent: "center",
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

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: -50,
    marginBottom: -40,
  },

  logoPlaceholder: {
    width: 200,
    height: 10,
    backgroundColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    fontWeight: "bold",
    fontSize: 20,
  },

  formContainer: {
    width: "85%",
    backgroundColor: "#CBD5E1",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  label: {
    color: "black",
    fontSize: 14,
    marginBottom: 5,
  },

  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  eyeButton: {
    paddingHorizontal: 10,
  },

  errorText: {
    color: "#B3261E",
    fontSize: 12,
    marginBottom: 8,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },

  checkboxLabel: {
    color: "black",
    fontSize: 14,
  },

  linkText: {
    color: "#2563EB",
  },

  registerButton: {
    backgroundColor: "#B3261E",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  registerText: {
    color: "white",
    fontWeight: "bold",
  },

  modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0, 0, 0, 0.5)", // difuminado del fondo
  justifyContent: "center",
  alignItems: "center",
  },

  modalContent: {
    width: "85%",
    maxHeight: "80%",
    backgroundColor: "#FFF8F7", // fondo blanco que antes faltaba
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#000",
  },

  modalScroll: {
    maxHeight: "70%",
    marginBottom: 15,
  },

  modalText: {
    color: "#000",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "justify",
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  modalButton: {
    backgroundColor: "#B3261E",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  modalScrollContainer: {
    flex: 1,
    maxHeight: 250, 
    marginVertical: 10,
  },

  logoImage: {
    width: 380,       // antes 120
    height: 400,
    borderRadius: 90, // si quieres hacerlo circular
    backgroundColor: "transparent", // elimina el cuadrado blanco
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 100,  // sube todo un poco
    paddingBottom: 60,
    backgroundColor: "#FEF7FF",
  },


});
