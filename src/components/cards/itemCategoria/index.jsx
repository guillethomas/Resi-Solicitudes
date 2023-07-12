import { TouchableHighlight, Text,ImageBackground } from "react-native";
import { styles } from './styles';
import { COLORES } from "../../../themes";

const ItemCategoria = ({id, name, backgroundColor, backgroundImage, onSelectCategoria}) => {

    return (
        <TouchableHighlight onPress={() => onSelectCategoria(id)} style={[styles.contenedor, {backgroundColor}]} underlayColor={COLORES.primario}>
            <ImageBackground source={{ url: backgroundImage }} style={styles.imagenFondo} resizeMode="cover">
                <Text style={styles.titulo}>{name}</Text>
            </ImageBackground>
        </TouchableHighlight>
    )
};

export default ItemCategoria;