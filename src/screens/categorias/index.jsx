import { FlatList, SafeAreaView, View} from 'react-native';
import { ItemCategoria } from '../../components';
import SOLICITUDES from '../../constants/data/solicitudesRotacion.json'
import { styles } from './styles';

function Categorias(categoriaSeleccionada) {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <FlatList 
            data={SOLICITUDES} 
            renderItem={({item})=> <ItemCategoria {...item} categoriaSeleccionada={()=>categoriaSeleccionada()}/>} 
            keyExtractor={(item)=> item.id}
            style={styles.contenedorLista}
            contentContainerStyle={styles.lista}
            showsVerticalScrollIndicator={false}
          />
      </View>
    </SafeAreaView>
  );
}

export default Categorias;