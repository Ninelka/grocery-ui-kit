import {Text, Image, StyleSheet, View} from "react-native";
import {GlobalStyles} from "../constants/styles";

function IntroSlide({item}) {
    return (
        <View
            style={styles.slide}>
            <View style={styles.imageWrapper}>
                <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.text}>{item?.text}</Text>
        </View>
    );
}

export default IntroSlide;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
    },
    imageWrapper: {
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: GlobalStyles.colors.secondaryGreen,
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: GlobalStyles.spacing.s,
    },
    text: {
        ...GlobalStyles.fontSemiBold,
        fontSize: GlobalStyles.fontSize.subhead,
        color: GlobalStyles.colors.grey2,
        textAlign: 'center',
    },
    title: {
        ...GlobalStyles.fontBold,
        fontSize: GlobalStyles.fontSize.title1,
        color: GlobalStyles.colors.black,
        textAlign: 'center',
        marginBottom: GlobalStyles.spacing.s,
        marginTop: GlobalStyles.spacing.l
    },
});
