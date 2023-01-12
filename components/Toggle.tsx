import {View, Switch, Text, StyleSheet} from "react-native";
import {GlobalStyles} from "../constants/styles";

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
                ios_backgroundColor={GlobalStyles.colors.fillsTertiary}
                trackColor={{true: GlobalStyles.colors.green, false: GlobalStyles.colors.fillsTertiary}}
                thumbColor={GlobalStyles.colors.white}
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
        // TODO: fix style type and uncomment it
        // ...GlobalStyles.fontRegular,
        flex: 1,
        fontSize: GlobalStyles.fontSize.headline
    },
    disabled: {
        opacity: 0.6
    }
})
