import { NavigationContainer } from '@react-navigation/native';
import NavegacionRotacionSolicitud from './rotacionSolicitud';
import NavegacionTab from './tabs';

function NavegacionPrincipal() {

    return (
        <NavigationContainer>
            <NavegacionTab/>
        </NavigationContainer>
    )
}

export default NavegacionPrincipal;