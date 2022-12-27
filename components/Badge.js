import {StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../constants/styles";

function Badge({counter, size, style}) {
    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.text, size === 'small' && styles.smallText]}>{counter}</Text>
        </View>
    )
}

export default Badge;

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.red,
        borderRadius: 100,
        paddingVertical: 2,
        paddingHorizontal: GlobalStyles.spacing.xs
    },
    text: {
        fontSize: GlobalStyles.fontSize.callout,
        color: GlobalStyles.colors.white
    },
    smallText: {
        fontSize: GlobalStyles.fontSize.caption1
    }
})
