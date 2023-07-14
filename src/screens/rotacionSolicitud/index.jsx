import { SafeAreaView, View, Text, FlatList} from 'react-native';
import { ItemCategoria } from '../../components';
import SOLICITUDES from '../../constants/data/solicitudesRotacion.json'
import { styles } from './styles';

function RotacionSolicitud({categoriaSeleccionada}) {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <FlatList 
            data={SOLICITUDES} 
            renderItem={({item})=> <ItemCategoria {...item} 
            categoriaSeleccionada={()=>categoriaSeleccionada()}/>} 
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