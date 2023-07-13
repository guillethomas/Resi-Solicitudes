import { TextInput, View } from "react-native";
import { styles } from "./styles";

const InputBusqueda = ({ borderColor, onHandleFocus, onHandleBlur, onHandleTextoBusqueda, ...props }) => {
    return (
      <View style={styles.contenedor}>
        <TextInput
          {...props}
          style={[styles.buscador, { borderColor }]}
          onFocus={onHandleFocus}
          onBlur={onHandleBlur}
          onChangeText={onHandleTextoBusqueda}
          autoCorrect={false}
          autoCapitalize="none"
          cursorColor={borderColor}
          placeholderTextColor={borderColor}
        />
      </View>
    );
  };
  
  export default InputBusqueda;
