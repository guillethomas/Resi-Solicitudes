import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavegacionRotacionSolicitud from "./rotacionSolicitud";
import NavegacionPerfil from "./perfil"

const Tab = createBottomTabNavigator(); 

const NavegacionTab = () => {
    return (
        <Tab.Navigator initialRouteName="Tab Solicitudes de rotación" screenOptions={{headerShown:false}}>
            <Tab.Screen name="Tab Solicitudes de rotación" component={NavegacionRotacionSolicitud}/>
            <Tab.Screen name="Tab Perfil" component={NavegacionPerfil}/>
        </Tab.Navigator>
    );
}

export default NavegacionTab;