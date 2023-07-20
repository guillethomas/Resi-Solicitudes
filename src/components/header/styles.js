import { StyleSheet, StatusBar } from "react-native";
import { COLORES, FUENTES } from "../../themes";

export const styles = StyleSheet.create({

    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORES.blanco,
        borderBottomColor: COLORES.primary,
        borderBottomWidth: 3,
        height: 60,
        padding:15,
        justifyContent: "center",
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        color: COLORES.primary, 
        fontFamily: FUENTES.bold,
    }

})