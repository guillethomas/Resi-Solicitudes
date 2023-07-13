import { FlatList, SafeAreaView, View, StyleSheet} from 'react-native';
import { Header, ItemCategoria } from './components';
import { Categorias} from './screens'
import CATEGORIAS from './constants/data/categories.json'

export default function App() {

  const onSelectCategoria = (idCategoria) => {
    console.warn({idCategoria})
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <Header title='Categorías'/>
          <Categorias/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
