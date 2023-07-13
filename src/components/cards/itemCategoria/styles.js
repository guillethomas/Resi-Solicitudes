import { StyleSheet } from "react-native";
import { COLORES } from "../../../themes";

export const styles = StyleSheet.create ({
    contenedor: {
        flex:1,
        borderRadius: 10,

    },

    imagenFondo: {
        width: '100%',
        height: 150,
        justifyContent: "flex-end",
        
    },

    titulo: {
        fontSize:20,
        fontWeight: "bold",
        color:  COLORES.blanco,
        padding:15,
        
    }
})