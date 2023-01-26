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
import ToggleScreen from "./screens/ToggleScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import BottomTabsScreen from "./screens/BottomTabsScreen";
import SegmentedControlScreen from "./screens/SegmentedControlScreen";
import SearchScreen from "./screens/SearchScreen";
import SliderScreen from "./screens/SliderScreen";
import CalendarScreen from "./screens/CalendarScreen";
import IntroSliderScreen from "./screens/IntroSliderScreen";
import ProductCardScreen from "./screens/ProductCardScreen";
import FloatingCardScreen from "./screens/FloatingCardScreen";
import {COLORS} from "./constants";
import {DrawerParamList} from "./types/drawer-param-list";
import CardScreen from "./screens/CardScreen";

const Drawer = createDrawerNavigator<DrawerParamList>();
const BottomTabs = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

function MyTabs() {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen
                name="Label-1"
                component={BottomTabsScreen}
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color} />,
                    tabBarActiveTintColor: COLORS.primaryGreen
                }}
            />
            <BottomTabs.Screen
                name="Label-2"
                component={BottomTabsScreen}
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color} />,
                    tabBarActiveTintColor: COLORS.primaryGreen
                }}
            />
            <BottomTabs.Screen
                name="Label-3"
                component={BottomTabsScreen}
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color} />,
                    tabBarActiveTintColor: COLORS.primaryGreen
                }}
            />
        </BottomTabs.Navigator>
    )
}

function MyDrawer() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen
            name="Intro Slider"
            component={IntroSliderScreen}
        />
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
          <Drawer.Screen
              name="Toggle"
              component={ToggleScreen}
          />
          <Drawer.Screen
              name="Segmented Control"
              component={SegmentedControlScreen}
          />
          <Drawer.Screen
              name="Search"
              component={SearchScreen}
          />
          <Drawer.Screen
              name="Tab bar"
              component={MyTabs}
              options={{ headerShown: false}}
          />
          <Drawer.Screen
              name="Slider"
              component={SliderScreen}
          />
          <Drawer.Screen
              name="Calendar"
              component={CalendarScreen}
          />
          <Drawer.Screen
              name="Cards"
              component={CardScreen}
          />
          <Drawer.Screen
              name="Product Cards"
              component={ProductCardScreen}
          />
          <Drawer.Screen
              name="Floating Cards"
              component={FloatingCardScreen}
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
