"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var expo_status_bar_1 = require("expo-status-bar");
var drawer_1 = require("@react-navigation/drawer");
var native_1 = require("@react-navigation/native");
var ButtonScreen_1 = require("./screens/ButtonScreen");
var IconButtonScreen_1 = require("./screens/IconButtonScreen");
var BadgeScreen_1 = require("./screens/BadgeScreen");
var InputScreen_1 = require("./screens/InputScreen");
var expo_font_1 = require("expo-font");
var SplashScreen = require("expo-splash-screen");
var react_1 = require("react");
var TypographyScreen_1 = require("./screens/TypographyScreen");
var ToggleScreen_1 = require("./screens/ToggleScreen");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var vector_icons_1 = require("@expo/vector-icons");
var styles_1 = require("./constants/styles");
var BottomTabsScreen_1 = require("./screens/BottomTabsScreen");
var SegmentedControlScreen_1 = require("./screens/SegmentedControlScreen");
var SearchScreen_1 = require("./screens/SearchScreen");
var SliderScreen_1 = require("./screens/SliderScreen");
var CalendarScreen_1 = require("./screens/CalendarScreen");
var IntroSliderScreen_1 = require("./screens/IntroSliderScreen");
var ProductCardScreen_1 = require("./screens/ProductCardScreen");
var FloatingCardScreen_1 = require("./screens/FloatingCardScreen");
var Drawer = (0, drawer_1.createDrawerNavigator)();
var BottomTabs = (0, bottom_tabs_1.createBottomTabNavigator)();
SplashScreen.preventAutoHideAsync();
function MyTabs() {
    return (<BottomTabs.Navigator>
            <BottomTabs.Screen name="Label-1" component={BottomTabsScreen_1["default"]} options={{
            tabBarIcon: function (_a) {
                var size = _a.size, color = _a.color;
                return <vector_icons_1.Ionicons name="home" size={size} color={color}/>;
            },
            tabBarActiveTintColor: styles_1.GlobalStyles.colors.primaryGreen
        }}/>
            <BottomTabs.Screen name="Label-2" component={BottomTabsScreen_1["default"]} options={{
            tabBarIcon: function (_a) {
                var size = _a.size, color = _a.color;
                return <vector_icons_1.Ionicons name="home" size={size} color={color}/>;
            },
            tabBarActiveTintColor: styles_1.GlobalStyles.colors.primaryGreen
        }}/>
            <BottomTabs.Screen name="Label-3" component={BottomTabsScreen_1["default"]} options={{
            tabBarIcon: function (_a) {
                var size = _a.size, color = _a.color;
                return <vector_icons_1.Ionicons name="home" size={size} color={color}/>;
            },
            tabBarActiveTintColor: styles_1.GlobalStyles.colors.primaryGreen
        }}/>
        </BottomTabs.Navigator>);
}
function MyDrawer() {
    return (<Drawer.Navigator>
        <Drawer.Screen name="Intro Slider" component={IntroSliderScreen_1["default"]}/>
        <Drawer.Screen name="Typography" component={TypographyScreen_1["default"]}/>
        <Drawer.Screen name="Buttons" component={ButtonScreen_1["default"]}/>
        <Drawer.Screen name="Icon button" component={IconButtonScreen_1["default"]}/>
          <Drawer.Screen name="Badge" component={BadgeScreen_1["default"]}/>
          <Drawer.Screen name="Input" component={InputScreen_1["default"]}/>
          <Drawer.Screen name="Toggle" component={ToggleScreen_1["default"]}/>
          <Drawer.Screen name="Segmented Control" component={SegmentedControlScreen_1["default"]}/>
          <Drawer.Screen name="Search" component={SearchScreen_1["default"]}/>
          <Drawer.Screen name="Tab bar" component={MyTabs} options={{ headerShown: false }}/>
          <Drawer.Screen name="Slider" component={SliderScreen_1["default"]}/>
          <Drawer.Screen name="Calendar" component={CalendarScreen_1["default"]}/>
          <Drawer.Screen name="Product Cards" component={ProductCardScreen_1["default"]}/>
          <Drawer.Screen name="Floating Cards" component={FloatingCardScreen_1["default"]}/>
      </Drawer.Navigator>);
}
function App() {
    var _this = this;
    var fontsLoaded = (0, expo_font_1.useFonts)({
        'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
        'nunito-bold-italic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
        'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
        'nunito-semibold-italic': require('./assets/fonts/Nunito-SemiBoldItalic.ttf'),
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf')
    })[0];
    var onLayoutRootView = (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!fontsLoaded) return [3 /*break*/, 2];
                    return [4 /*yield*/, SplashScreen.hideAsync()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); }, [fontsLoaded]);
    if (!fontsLoaded) {
        return null;
    }
    return (<>
          <expo_status_bar_1.StatusBar style="auto"/>
          <native_1.NavigationContainer onReady={onLayoutRootView}>
              <MyDrawer />
          </native_1.NavigationContainer>
      </>);
}
exports["default"] = App;
