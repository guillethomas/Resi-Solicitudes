import { View, Text } from 'react-native';
import { styles } from './styles';
import SOLICITUDES from '../../constants/data/solicitudesRotacion.json';

function RotacionSolicitudDetalles ({ navigation, route }) {

  const {idSolicitud} = route.params;
  const solicitud = SOLICITUDES.find((solicitud)=>solicitud.id === idSolicitud)

  return (
    <View style={styles.contenedor}>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Nombre: </Text>
          <Text style={styles.textoCategoria}>{solicitud.nombre}</Text>
        </View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Apellido: </Text>
          <Text style={styles.textoCategoria}>{solicitud.apellido}</Text>
        </View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Documento de identidad: </Text>
          <Text style={styles.textoCategoria}>{solicitud.dni}</Text>
       </View>
       <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Fecha de nacimiento: </Text>
          <Text style={styles.textoCategoria}>{solicitud.fechaNacimiento}</Text>
        </View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Hospital de origen: </Text>
          <Text style={styles.textoCategoria}>{solicitud.hospitalOrigen}</Text>
        </View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Año de residencia: </Text>
          <Text style={styles.textoCategoria}>{solicitud.anioResidencia}</Text>
        </View>
    </View>
  )
}

export default RotacionSolicitudDetalles;