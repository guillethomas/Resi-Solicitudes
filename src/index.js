import { SafeAreaView, View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { COLORES, FUENTES } from './themes';
import NavegacionPrincipal from './navigation';


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
          

  if (!fuentesCargadas) {
    return (
      <View style={styles.contenedorLoader}>
        <ActivityIndicator color={COLORES.primary} size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavegacionPrincipal />
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
