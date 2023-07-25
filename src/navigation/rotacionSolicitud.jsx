import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { RotacionSolicitud, RotacionDetalles } from "../screens"; 


const Stack = createNativeStackNavigator();


function NavegacionRotacionSolicitud () {
    return (
        <Stack.Navigator initialRouteName="RotacionSolicitud">
            <Stack.Screen name="RotacionSolicitud" component={RotacionSolicitud} /> 
            <Stack.Screen name="RotacionDetalles" component={RotacionDetalles} />
        </Stack.Navigator>
    );
}

export default NavegacionRotacionSolicitud;