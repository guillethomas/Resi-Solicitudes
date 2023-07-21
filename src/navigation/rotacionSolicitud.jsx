import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {rotacionSolicitud, rotacionDetalles} from "../screens"

const Stack = createNativeStackNavigator();


function NavegacionRotacionSolicitud () {
    return (
        <Stack.Navigator initialRouteName="rotacionSolicitudes ">
            <Stack.Screen name="rotacionSolicitudes" component={rotacionSolicitud}/>
            <Stack.Screen name="rotacionSolicitudDetalles" component={rotacionDetalles}/>
        </Stack.Navigator>

    )
}

export default NavegacionRotacionSolicitud;