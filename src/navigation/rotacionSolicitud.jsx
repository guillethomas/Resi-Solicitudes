import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {rotacionSolicitud, rotacionDetalles} from "../screens"


const Stack = createNativeStackNavigator();


function NavegacionRotacionSolicitud () {
    return (
        <Stack.Navigator initialRouteName="rotacionSolicitud ">
            <Stack.Screen name="rotacionSolicitud" component={rotacionSolicitud}/>
            <Stack.Screen name="rotacionDetalles" component={rotacionDetalles}/>
        </Stack.Navigator>

    )
}

export default NavegacionRotacionSolicitud;