import { StatusBar } from 'expo-status-bar';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import ButtonScreen from "./screens/ButtonScreen";
import IconButtonScreen from "./screens/IconButtonScreen";


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen
            name="Buttons"
            component={ButtonScreen}
        />
        <Drawer.Screen
            name="Icon button"
            component={IconButtonScreen}
        />
      </Drawer.Navigator>
  );
}

export default function App() {
  return (
      <>
          <StatusBar style="auto" />
          <NavigationContainer>
              <MyDrawer/>
          </NavigationContainer>
      </>
  );
}
