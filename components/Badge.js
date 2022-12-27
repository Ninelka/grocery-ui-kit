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
        paddingHorizontal: 8
    },
    text: {
        fontSize: 16,
        color: GlobalStyles.colors.white
    },
    smallText: {
        fontSize: 12
    }
})
