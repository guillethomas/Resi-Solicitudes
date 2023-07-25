import { SafeAreaView, View, FlatList} from 'react-native';
import { ItemCategoria } from '../../components';
import SOLICITUDES from '../../constants/data/solicitudesRotacion.json'
import { styles } from './styles';

function  RotacionSolicitud({navigation}) {
  
  const solicitudSeleccionada = ({idSolicitud, nombreSolicitud, apellidoSolicitud, documentoSolicitud, nacimientoSolicitud, hospitalSolicitud, anioResidenciaSolicitud}) => {
    navigation.navigate('RotacionDetalles', {idSolicitud, nombreSolicitud, apellidoSolicitud, documentoSolicitud, nacimientoSolicitud, hospitalSolicitud, anioResidenciaSolicitud})
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <FlatList 
            data={SOLICITUDES} 
            renderItem={({item})=> <ItemCategoria {...item} solicitudSeleccionada={()=>solicitudSeleccionada({idSolicitud: item.id, nombreSolicitud: item.nombre, apellidoSolicitud: item.apellido, documentoSolicitud: item.dni, nacimientoSolicitud: item.fechaNacimiento, hospitalSolicitud: item.hospitalOrigen, anioResidenciaSolicitud: item.anioResidencia})}/>} 
            keyExtractor={(item)=> item.id}
            style={styles.contenedorLista}
            contentContainerStyle={styles.lista}
            showsVerticalScrollIndicator={false}
          />
      </View>
    </SafeAreaView>
  );
}

export default RotacionSolicitud;