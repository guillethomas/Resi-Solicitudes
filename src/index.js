import { FlatList, SafeAreaView, View, StyleSheet, Text} from 'react-native';
import { Header, ItemCategoria } from './components';
import {RotacionSolicitud, RotacionDetalles} from './screens'
import CATEGORIAS from './constants/data/solicitudesRotacion.json'
import { useState } from 'react';
import { useFonts } from 'expo-font';

export default function App() {

  const [fuentesCargadas] = useFonts ({
    LatoBlack: require('../assets/Fonts/Lato/Lato-Black.ttf'),
    LatoBlackItalic: require('../assets/Fonts/Lato/Lato-BlackItalic.ttf'),
    LatoBold: require('../assets/Fonts/Lato/Lato-Bold.ttf'),
    LatoBoldItalic: require('../assets/Fonts/Lato/Lato-BoldItalic.ttf'),
    LatoItalic: require('../assets/Fonts/Lato/Lato-Italic.ttf'),
    LatoLight: require('../assets/Fonts/Lato/Lato-Light.ttf'),
    LatoLightItalix: require('../assets/Fonts/Lato/Lato-LightItalic.ttf'),
    LatoRegular: require('../assets/Fonts/Lato/Lato-Regular.ttf'),
    LatoThin: require('../assets/Fonts/Lato/Lato-Thin.ttf'),
    LatoThinItalic: require('../assets/Fonts/Lato/Lato-ThinItalic.ttf'),
  })

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
