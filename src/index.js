import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Header } from './components';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <Header title='Categorías'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});