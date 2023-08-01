import { SafeAreaView, View, FlatList} from 'react-native';
import { ItemCategoria, BotonPrincipal } from '../../components';
import { styles } from './styles';
import { useSelector } from 'react-redux';

function  RotacionSolicitud({navigation}) {

  const SOLICITUDES = useSelector((state)=>state.solicitudes.data)
  
  const solicitudSeleccionada = ({idSolicitud, estadoSolicitud}) => {
    navigation.navigate('Detalles de la solicitud', {idSolicitud, estadoSolicitud})
  }

  const nuevaSolicitud = () => {
    navigation.navigate('Nueva solicitud')
  }




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contenedorPrincipal}>
          <BotonPrincipal
            textoBoton={"+"}
            accion={()=>nuevaSolicitud()}
          />
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