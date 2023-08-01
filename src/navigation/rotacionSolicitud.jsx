import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { RotacionSolicitud, RotacionSolicitudDetalles, RotacionSolicitudForm } from "../screens"; 
import { TouchableOpacity, Text } from "react-native";
import { COLORES, FUENTES } from "../themes";


const Stack = createNativeStackNavigator();


function NavegacionRotacionSolicitud () {
    return (
        <Stack.Navigator initialRouteName="Solicitudes de rotación" 
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
            <Stack.Screen name="Solicitudes de rotación" component={RotacionSolicitud} /> 

            <Stack.Screen name="Detalles de la solicitud" component={RotacionSolicitudDetalles} 
            options={({navigation, route}) => ({
                headerLeft:()=>(
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Text>Volver</Text>
                    </TouchableOpacity>
                ),
                headerStyle:{ 
                    backgroundColor:
                    route.params.estadoSolicitud === 'Aceptada'
                    ? '#CEF5E6'
                    : route.params.estadoSolicitud === 'Rechazada'
                    ? '#FFDADD'
                    : route.params.estadoSolicitud === 'En espera'
                    ? '#FFE5B2'
                    : COLORES.defaultColor,
                },
            })}
            />

            <Stack.Screen name="Nueva solicitud" component={RotacionSolicitudForm} 
            options={({navigation, route}) => ({
                headerLeft:()=>(
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Text>Volver</Text>
                    </TouchableOpacity>
                ),
            })}
            />
            
        </Stack.Navigator>
    );
}

export default NavegacionRotacionSolicitud;