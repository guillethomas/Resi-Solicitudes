import { StyleSheet } from "react-native";
import { COLORES, FUENTES } from "../../themes"

export const styles = StyleSheet.create ({
    boton: {
        borderRadius: 16,
        backgroundColor: COLORES.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding:16,

        justifyContent: 'center',
        alignItems: 'center',
    },

    texto: {
        fontFamily: FUENTES.black,
        color: COLORES.blanco,
    },
})