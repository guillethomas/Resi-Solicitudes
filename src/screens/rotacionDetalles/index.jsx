import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import SOLICITUDES from '../../constants/data/solicitudesRotacion.json';

function RotacionDetalles ({ navigation, route }) {

  const {idSolicitud, nombreSolicitud, apellidoSolicitud, documentoSolicitud, nacimientoSolicitud, hospitalSolicitud, anioResidenciaSolicitud} = route.params;

  return (
    <View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Nombre: </Text>
          <Text style={styles.textoCategoria}>{nombreSolicitud}</Text>
        </View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Apellido: </Text>
          <Text style={styles.textoCategoria}>{apellidoSolicitud}</Text>
        </View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Documento de identidad: </Text>
          <Text style={styles.textoCategoria}>{documentoSolicitud}</Text>
       </View>
       <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Fecha de nacimiento: </Text>
          <Text style={styles.textoCategoria}>{nacimientoSolicitud}</Text>
        </View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Hospital de origen: </Text>
          <Text style={styles.textoCategoria}>{hospitalSolicitud}</Text>
        </View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Año de residencia: </Text>
          <Text style={styles.textoCategoria}>{anioResidenciaSolicitud}</Text>
        </View>
    </View>
  )
}

export default RotacionDetalles;