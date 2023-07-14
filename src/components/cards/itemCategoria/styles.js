import { StyleSheet } from "react-native";
import { COLORES } from "../../../themes";

export const styles = StyleSheet.create ({
    contenedor: {
        flex:1,
        borderRadius: 16,
        backgroundColor: COLORES.primaryWeakest,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding:15,
    },

    nombre: {
        fontSize:18,
        color:  COLORES.primaryStrong,
    },

    area: {
        marginTop: 5,
        fontSize:14,
        color:  COLORES.neutral,
    },

    periodo: {
        fontSize:14,
        color:  COLORES.neutral,
    }
})