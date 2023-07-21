import { SafeAreaView, View, StyleSheet, Text} from 'react-native';
import { Header } from './components';
import {RotacionSolicitud, RotacionDetalles} from './screens'
import CATEGORIAS from './constants/data/solicitudesRotacion.json'
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { COLORES, FUENTES } from './themes';
import {NavegacionPrincipal} from './navigation';


export default function App() {

  const [fuentesCargadas] = useFonts({
    [FUENTES.black]:require('../assets/Fonts/Lato/Lato-Black.ttf'),
    [FUENTES.blackItalic]: require('../assets/Fonts/Lato/Lato-BlackItalic.ttf'),
    [FUENTES.bold]: require('../assets/Fonts/Lato/Lato-Bold.ttf'),
    [FUENTES.boldItalic]: require('../assets/Fonts/Lato/Lato-BoldItalic.ttf'),
    [FUENTES.italic]: require('../assets/Fonts/Lato/Lato-Italic.ttf'),
    [FUENTES.light]: require('../assets/Fonts/Lato/Lato-Light.ttf'),
    [FUENTES.lightItalic]: require('../assets/Fonts/Lato/Lato-LightItalic.ttf'),
    [FUENTES.regular]: require('../assets/Fonts/Lato/Lato-Regular.ttf'),
    [FUENTES.thin]: require('../assets/Fonts/Lato/Lato-Thin.ttf'),
    [FUENTES.thinItalic]: require('../assets/Fonts/Lato/Lato-ThinItalic.ttf'),
  });
          
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

  if (!fuentesCargadas) {
    return (
      <View style={styles.contenedorLoader}>
        <ActivityIndicator color={COLORES.primary} size="large" />
      </View>
    );
  }


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

  contenedorLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
