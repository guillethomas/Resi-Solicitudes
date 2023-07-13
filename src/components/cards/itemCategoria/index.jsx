import { TouchableHighlight, Text, View } from "react-native";
import { styles } from './styles';
import { COLORES } from "../../../themes";

const ItemCategoria = ({id, nombre, apellido, area, inicio, fin, categoriaSeleccionada}) => {

    return (
        <TouchableHighlight onPress={() => categoriaSeleccionada(id)} style={[styles.contenedor]} underlayColor={COLORES.primary}>
                <View>
                <Text style={styles.nombre}>{nombre} {apellido}</Text>
                <Text style={styles.area}>{area}</Text>
                <Text style={styles.periodo}>{inicio} - {fin}</Text>
                </View>
        </TouchableHighlight>
    )
};

export default ItemCategoria;