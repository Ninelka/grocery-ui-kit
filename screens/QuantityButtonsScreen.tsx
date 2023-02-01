import {StyleSheet, View} from "react-native";
import {GlobalStyles} from "../constants";
import QuantityButtons from "../components/QuantityButtons";

export default function QuantityButtonsScreen() {
    return (
        <View style={styles.root}>
            <QuantityButtons/>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: GlobalStyles.spacing.s
    }
})
