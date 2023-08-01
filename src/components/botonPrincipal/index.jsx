import { TouchableHighlight, Text } from "react-native";
import { styles } from './styles';
import { COLORES } from "../../themes"

const BotonPrincipal = ({textoBoton, accion}) => {

    return (
        <TouchableHighlight onPress={() => accion()} style={[styles.boton]} underlayColor={COLORES.primaryWeak}>
                <Text style={styles.texto}>{textoBoton}</Text>
        </TouchableHighlight>
    )
};

export default BotonPrincipal;