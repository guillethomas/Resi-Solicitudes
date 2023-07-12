import { StyleSheet, StatusBar } from "react-native";
import { COLORES } from "../../themes";

export const styles = StyleSheet.create({

    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: COLORES.primario,
        height: 60,
        justifyContent: "center",
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORES.texto, 
    }

})