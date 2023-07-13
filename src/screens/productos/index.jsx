import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground, Button } from 'react-native';
import { styles } from './styles';
import { InputBusqueda } from '../../components';
import PRODUCTS from '../../constants/data/products.json';
import { COLORES } from '../../themes';

function Productos ({ categoriaSeleccionada }) {

  return (
    <View>
        <Button title='Volver' onPress={categoriaSeleccionada}></Button>
        <Text>Seleccioné</Text>
    </View>
  )
}


export default Productos;