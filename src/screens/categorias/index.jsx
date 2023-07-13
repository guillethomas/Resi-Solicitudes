import { FlatList, SafeAreaView, View} from 'react-native';
import { ItemCategoria } from '../../components';
import CATEGORIAS from '../../constants/data/categories.json'
import { styles } from './styles';

function Categorias() {

  const onSelectCategoria = (idCategoria) => {
    console.warn({idCategoria})
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <FlatList 
            data={CATEGORIAS} 
            renderItem={({item})=> <ItemCategoria {...item} onSelectCategoria={onSelectCategoria}/>} 
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