import {View, Switch, Text, StyleSheet} from "react-native";
import {GlobalStyles} from "../constants/styles";

function Toggle({label, value, disabled, onValueChange}) {
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
        ...GlobalStyles.fontRegular,
        flex: 1,
        fontSize: GlobalStyles.fontSize.headline
    },
    disabled: {
        opacity: 0.6
    }
})
