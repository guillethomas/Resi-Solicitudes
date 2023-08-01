import { TextInput, Text } from "react-native";
import { useState } from "react";
import { styles } from './styles';

const InputPrincipal = ({ placeholder, teclado, valorInicial}) => {

    const [texto, onChangeTexto] = useState(valorInicial);

    return (
        <TextInput 
            style={styles.input}
            value={texto}
            onChangeText={onChangeTexto}
            placeholder={placeholder}            
            keyboardType={teclado}
        />
    )
};

export default InputPrincipal;