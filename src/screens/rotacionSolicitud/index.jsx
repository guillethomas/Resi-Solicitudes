import { SafeAreaView, View, FlatList} from 'react-native';
import { ItemCategoria } from '../../components';
import SOLICITUDES from '../../constants/data/solicitudesRotacion.json'
import { styles } from './styles';

function  RotacionSolicitud({navigation}) {
  
  const solicitudSeleccionada = ({idSolicitud, estadoSolicitud}) => {
    navigation.navigate('Detalles de la solicitud', {idSolicitud, estadoSolicitud})
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <FlatList 
            data={SOLICITUDES} 
            renderItem={({item})=> <ItemCategoria {...item} solicitudSeleccionada={()=>solicitudSeleccionada({idSolicitud: item.id, estadoSolicitud:item.estado})}/>} 
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