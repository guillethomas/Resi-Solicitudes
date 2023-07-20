import { StyleSheet } from 'react-native';
import { COLORES, FUENTES } from '../../themes';


export const styles = StyleSheet.create({
 contenedor: {
    flex: 1,
    backgroundColor: COLORES.blanco,
  },
  
  contenedorCategoria: {
    padding: 15,
    display: 'flex',
    flexDirection:'row',
  },
  
  textoEtiqueta: {
    fontSize:18,
    color: COLORES.neutral,
    fontFamily: FUENTES.regular,
  },

  textoCategoria: {
    fontSize:18,
    color: COLORES.primary,
    fontFamily: FUENTES.regular,
  },
});