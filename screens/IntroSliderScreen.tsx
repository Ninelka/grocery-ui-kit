import {Dimensions, ImageSourcePropType, StyleSheet, Text, View} from "react-native";
import Constants from 'expo-constants';
import AppIntroSlider from "react-native-app-intro-slider";
import IntroSlide from "../components/IntroSlide";
import Button from "../components/Button";
import {useNavigation} from "@react-navigation/native";
import {COLORS, GlobalStyles} from "../constants";
import {DrawerNavigation} from "../types/drawer-navigation";

interface IIntroSlideItem {
    title: string,
    text: string,
    image?: ImageSourcePropType
}

const data: IIntroSlideItem[] = [
    {
        title: 'Fresh Vegetables',
        text: 'Vegetables that are directly picked by farmers\n and guaranteed quality and freshness',
        image: require('../assets/images/shopping.png'),
    },
    {
        title: 'Easy Shopping',
        text: 'Grab your items only need to order from home,\n click pay and wait for the courier to arrive',
        image: require('../assets/images/shopping-list.png'),
    },
    {
        title: 'Fast Delivery',
        text: "Courier will send the groceries you buy in just 1\nday, very fast like a flash!",
        image: require('../assets/images/delivery.png'),
    },
];

function IntroSliderScreen() {
    const navigation = useNavigation<DrawerNavigation>();
    const pressHandler = () => {
        navigation.navigate('Typography');
    };

    return (
        <View style={{flex: 1}}>
            <AppIntroSlider
                bottomButton
                showSkipButton
                showDoneButton
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                keyExtractor={item => item.title}
                renderSkipButton={() => (
                    <Text style={styles.buttonSkip}>Skip</Text>
                )}
                onSkip={pressHandler}
                renderNextButton={() => <Button onPress={pressHandler} style={styles.nextBtn} shape="rounded" size="large">Get Started</Button>}
                renderDoneButton={() => <Button onPress={pressHandler} style={styles.nextBtn} shape="rounded" size="large">Get Started</Button>}
                renderItem={IntroSlide}
                data={data}
            />
        </View>
    );
}

export default IntroSliderScreen;

const getSkipBtnTopPosition = () => {
    if (Constants.statusBarHeight > 24) {
        return Dimensions.get('window').height - Constants.statusBarHeight - 120;
    } else {
        return Dimensions.get('window').height - Constants.statusBarHeight - 100;
    }
}

const styles = StyleSheet.create({
    buttonSkip: {
        position: "absolute",
        bottom: getSkipBtnTopPosition(),
        right: 0,
    },
    dot: {
        width: GlobalStyles.spacing.xs,
        height: GlobalStyles.spacing.xs,
        backgroundColor: COLORS.fillsPrimary
    },
    activeDot: {
        width: 40,
        height: GlobalStyles.spacing.xs,
        backgroundColor: COLORS.primaryGreen
    },
    nextBtn: {
        width: '100%',
    }
})
