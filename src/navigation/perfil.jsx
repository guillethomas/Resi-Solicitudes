import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Perfil } from "../screens"; 
import { COLORES, FUENTES } from "../themes";

const Stack = createNativeStackNavigator();

const NavegacionPerfil = () => {
    return (
    <Stack.Navigator initialRouteName="Perfil" 
        screenOptions={{
            headerStyle:{ 
                backgroundColor: COLORES.blanco,
            },
            headerTitleStyle:{
                fontFamily: FUENTES.bold,
                fontSize: 18,
            }
        }}
    >
        <Stack.Screen name="Perfil" component={Perfil} /> 
    </Stack.Navigator>
    )
}

export default NavegacionPerfil;