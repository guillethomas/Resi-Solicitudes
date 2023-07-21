import { NavigationContainer } from '@react-navigation/native';
import NavegacionRotacionSolicitud from './rotacionSolicitud';

function NavegacionPrincipal() {

    return (
        <NavigationContainer>
            <NavegacionRotacionSolicitud/>
        </NavigationContainer>
    )
}

export default NavegacionPrincipal;