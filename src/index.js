import { FlatList, SafeAreaView, View, StyleSheet, Text} from 'react-native';
import { Header, ItemCategoria } from './components';
import {RotacionSolicitud, RotacionDetalles} from './screens'
import CATEGORIAS from './constants/data/solicitudesRotacion.json'
import { useState } from 'react';

export default function App() {

  const [estaCategoriaSeleccionada, setEstaCategoriaSeleccionada]= useState(false)
  const tituloHeader = estaCategoriaSeleccionada ? 'Detalles de la rotación' : 'Solicitudes de rotación'
  const [guardarCategoriaSeleccionada, setGuardarCategoriaSeleccionada] = useState(null)

  const guardarCategoria = (idCategoria) => {
    setGuardarCategoriaSeleccionada(idCategoria);
    setEstaCategoriaSeleccionada(!estaCategoriaSeleccionada);
  };

  const navegacion = () => {
    setEstaCategoriaSeleccionada(!estaCategoriaSeleccionada);
    setGuardarCategoriaSeleccionada(null);

  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <Header title={tituloHeader}/>
          {estaCategoriaSeleccionada ? (
          <RotacionDetalles categoriaSeleccionada={navegacion}/>
          ) : (
          <RotacionSolicitud categoriaSeleccionada={guardarCategoria} />
          )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
