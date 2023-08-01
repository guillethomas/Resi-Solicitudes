import { StyleSheet } from "react-native";
import { COLORES, FUENTES } from "../../themes"

export const styles = StyleSheet.create ({
    input: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORES.primary,
        height: 42,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: COLORES.blanco,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

})