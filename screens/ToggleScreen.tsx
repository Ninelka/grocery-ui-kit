import {StyleSheet, View} from "react-native";
import Toggle from "../components/Toggle";
import {useState} from "react";
import {COLORS, GlobalStyles} from "../constants";

function ToggleScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleHandler = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Toggle
                    label="Title"
                    value={isEnabled}
                    onValueChange={toggleHandler}
                />
            </View>
            <View style={styles.item}>
                <Toggle
                    label="Title"
                    value={isEnabled}
                    onValueChange={toggleHandler}
                />
            </View>
            <View style={styles.item}>
                <Toggle
                    label="Title"
                    value={isEnabled}
                    disabled={true}
                    onValueChange={toggleHandler}
                />
            </View>
            <View style={styles.item}>
                <Toggle
                    label="Title"
                    value={isEnabled}
                    disabled={true}
                    onValueChange={toggleHandler}
                />
            </View>
        </View>
    )
}

export default ToggleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: GlobalStyles.spacing.m
    },
    item: {
        width: '90%',
        paddingVertical: GlobalStyles.spacing.s,
        paddingHorizontal: GlobalStyles.spacing.m,
        marginVertical: GlobalStyles.spacing.s,
        backgroundColor: COLORS.bgPrimary,
        borderRadius: 16
    }
})
