import { StatusBar } from 'expo-status-bar';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import ButtonScreen from "./screens/ButtonScreen";
import IconButtonScreen from "./screens/IconButtonScreen";
import BadgeScreen from "./screens/BadgeScreen";
import InputScreen from "./screens/InputScreen";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {useCallback} from "react";
import TypographyScreen from "./screens/TypographyScreen";


const Drawer = createDrawerNavigator();
SplashScreen.preventAutoHideAsync();

function MyDrawer() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen
            name="Typography"
            component={TypographyScreen}
        />
        <Drawer.Screen
            name="Buttons"
            component={ButtonScreen}
        />
        <Drawer.Screen
            name="Icon button"
            component={IconButtonScreen}
        />
          <Drawer.Screen
              name="Badge"
              component={BadgeScreen}
          />
          <Drawer.Screen
              name="Input"
              component={InputScreen}
          />
      </Drawer.Navigator>
  );
}

export default function App() {
    const [fontsLoaded] = useFonts({
        'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
        'nunito-bold-italic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
        'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
        'nunito-semibold-italic': require('./assets/fonts/Nunito-SemiBoldItalic.ttf'),
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    
  return (
      <>
          <StatusBar style="auto" />
          <NavigationContainer onReady={onLayoutRootView}>
              <MyDrawer/>
          </NavigationContainer>
      </>
  );
}
