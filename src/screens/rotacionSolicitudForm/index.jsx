import { View, Text } from 'react-native';
import { InputPrincipal, BotonPrincipal } from '../../components';
import { styles } from './styles';

function RotacionSolicitudForm () {
  
  return (
    <View style={styles.contenedorGeneral}>
      <Text>Prueba de solicitud</Text>
      <View style={styles.contenedorForm}>
        <InputPrincipal
          teclado="numeric"
          placeholder="pruebame"
          valorInicial="iiiii"
        />
        <InputPrincipal
          teclado="numeric"
          placeholder="pruebame"
          valorInicial="iiiii"
        />
        <InputPrincipal
          teclado="numeric"
          placeholder="pruebame"
          valorInicial="iiiii"
        />
        <InputPrincipal
          teclado="numeric"
          placeholder="pruebame"
          valorInicial="iiiii"
        />
        <InputPrincipal
          teclado="numeric"
          placeholder="pruebame"
          valorInicial="iiiii"
        />
        <InputPrincipal
          teclado="numeric"
          placeholder="pruebame"
          valorInicial="iiiii"
        />
      </View> 
      <BotonPrincipal textoBoton={"Agregar solicitud"}/>
    </View>
  )
}

export default RotacionSolicitudForm;