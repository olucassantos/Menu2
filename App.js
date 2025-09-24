import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Cria o Drawer para navegação lateral
const Drawer = createDrawerNavigator();

import TelaInicio from "./telas/TelaInicio";
import TelaSobre from "./telas/TelaSobre";
import TelaContato from "./telas/TelaContato";

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="TelaInicio">
                <Drawer.Screen name="TelaInicio" component={TelaInicio} />
                <Drawer.Screen name="TelaSobre" component={TelaSobre} />
                <Drawer.Screen name="TelaContato" component={TelaContato} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;