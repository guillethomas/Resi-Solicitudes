import { View, Text, Button, FlatList } from 'react-native';
import { styles } from './styles';
import { COLORES } from '../../themes';
import SOLICITUDES from '../../constants/data/solicitudesRotacion.json';

function RotacionDetalles ({ categoriaSeleccionada, categoriaIdSeleccionada }) {

  return (
    <View>
        <Button title='Volver' onPress={categoriaSeleccionada} style={styles.boton}></Button>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Nombre: </Text>
          <Text style={styles.textoCategoria}>Nombre de la persona</Text>
        </View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Apellido: </Text>
          <Text style={styles.textoCategoria}>Apellido de la persona</Text>
        </View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Documento de identidad: </Text>
          <Text style={styles.textoCategoria}>1234567890</Text>
       </View>
       <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Fecha de nacimiento: </Text>
          <Text style={styles.textoCategoria}>01/01/2000</Text>
        </View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Hospital de origen: </Text>
          <Text style={styles.textoCategoria}>Hospital XXXXXX</Text>
        </View>
        <View style={styles.contenedorCategoria}>
          <Text style={styles.textoEtiqueta}>Año de residencia: </Text>
          <Text style={styles.textoCategoria}>3ro</Text>
        </View>
    </View>
  )
}

export default RotacionDetalles;