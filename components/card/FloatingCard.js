import {StyleSheet, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";

function FloatingCard({children, type, style}) {
    const cardRadius = () => type === 'ellipse' ? GlobalStyles.spacing.xxl : GlobalStyles.spacing.xs;

    return (
        <View style={[styles.container, {borderRadius: cardRadius()}, style]}>
            {children}
        </View>
    )
}

export default FloatingCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.bgPrimary,
        // shadow for android
        elevation: 16,
        // shadow for ios
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 16},
        shadowRadius: 16,
        shadowOpacity: 0.3,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    }
})
