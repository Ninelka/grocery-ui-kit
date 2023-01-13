import {View, Switch, Text, StyleSheet} from "react-native";
import {COLORS, FONT_FAMILY, GlobalStyles} from "../constants";

interface IToggle {
    label: string,
    value: boolean,
    onValueChange: () => void,
    disabled?: boolean,
}
function Toggle({label, value, disabled, onValueChange}: IToggle) {
    return (
        <View style={[styles.container, disabled && styles.disabled]}>
            <Text style={styles.label} onPress={!disabled ? onValueChange : null}>{label}</Text>
            <Switch
                onValueChange={onValueChange}
                ios_backgroundColor={COLORS.fillsTertiary}
                trackColor={{true: COLORS.green, false: COLORS.fillsTertiary}}
                thumbColor={COLORS.white}
                value={value}
                disabled={disabled}
            />
        </View>
    )
}

export default Toggle;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    label: {
        fontFamily: FONT_FAMILY.regular,
        fontWeight: "400",
        flex: 1,
        fontSize: GlobalStyles.fontSize.headline
    },
    disabled: {
        opacity: 0.6
    }
})
