import { Alert, BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function useExitOnBack() {
  useFocusEffect(
    useCallback(() => {

      const handler = () => {
        Alert.alert(
          "Salir de DangerZone",
          "¿Quieres cerrar la aplicación?",
          [
            { text: "Cancelar", style: "cancel" },
            { text: "Salir", style: "destructive", onPress: () => BackHandler.exitApp() }
          ]
        );

        return true; // <--- Bloquea la navegación hacia atrás
      };

      // ➤ Registrar evento en Expo (API moderna)
      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        handler
      );

      // ➤ Se elimina correctamente con .remove()
      return () => subscription.remove();

    }, [])
  );

  return null;
}