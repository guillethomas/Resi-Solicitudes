import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavegacionRotacionSolicitud from "./rotacionSolicitud";
import NavegacionPerfil from "./perfil"
import { COLORES, FUENTES } from '../themes';
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator(); 

const NavegacionTab = () => {
    return (
        <Tab.Navigator initialRouteName="Tab Solicitudes de rotación" 
            screenOptions={{
                headerShown:false,
                tabBarLabelStyle:{
                    fontFamily: FUENTES.bold,
                },
                tabBarStyle: {
                    backgroundColor: COLORES.blanco,
                },
                tabBarActiveTintColor: COLORES.primary,
                tabBarInactiveTintColor: COLORES.neutralWeak,
            }}
        >
            <Tab.Screen name="Tab Solicitudes de rotación" component={NavegacionRotacionSolicitud}
                options={{ 
                    tabBarLabel:'Solicitudes',
                    tabBarIcon: ({focused, color, size}) => (
                        <Ionicons name={focused ? 'reader' : 'reader-outline'} color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen name="Tab Perfil" component={NavegacionPerfil}
                options={{ 
                    tabBarLabel:'Perfil',
                    tabBarIcon: ({focused, color, size}) => (
                        <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default NavegacionTab;