// Importacions bàsiques de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuració Firebase del teu projecte
const firebaseConfig = {
  apiKey: "AIzaSyAdAIRb9QlT4Ar74-ENapOER6L69N6wuI4",
  authDomain: "db-dangerzone.firebaseapp.com",
  projectId: "db-dangerzone",
  storageBucket: "db-dangerzone.firebasestorage.app",
  messagingSenderId: "325812011220",
  appId: "1:325812011220:web:ee9773122d71cde6a9fb41",
  measurementId: "G-MG1N15PKD7"
};

// Inicialitzar Firebase
const app = initializeApp(firebaseConfig);

// Exportacions que utilitzaràs
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;