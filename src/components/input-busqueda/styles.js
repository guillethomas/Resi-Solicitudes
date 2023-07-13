import { StyleSheet } from 'react-native';
import { COLORES } from '../../themes';

export const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
    
    buscador: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: COLORES.negro,
        fontSize: 14,
        height: 35,
    },
});