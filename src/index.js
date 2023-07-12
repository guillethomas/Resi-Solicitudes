import { FlatList, SafeAreaView, StyleSheet, View , Text} from 'react-native';
import { Header, ItemCategoria } from './components';
import CATEGORIAS from './constants/data/categories.json'

export default function App() {

  const onSelectCategoria = (idCategoria) => {
    console.warn({idCategoria})
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <Header title='Categorías'/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contenedorLista: {
    margin: 15,

  },

  lista: {
    gap: 15,
    
  },

});