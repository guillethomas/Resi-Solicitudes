import { StyleSheet } from 'react-native';
import { COLORES } from '../../themes';

export const styles = StyleSheet.create({
 container: {
      flex: 1,
      backgroundColor: COLORES.blanco,
    },

    contenedorPrincipal: {
      flex: 1,
      padding: 16,
    },
  
    contenedorLista: {
      marginTop: 16,
    },
  
    lista: {
      gap: 16,
      
    },
});