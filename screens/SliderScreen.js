import {GlobalStyles} from "../constants/styles";
import {Platform, SafeAreaView, StyleSheet, View} from "react-native";
import Slider from '@react-native-community/slider';

function SliderScreen() {
    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.item}>
                    <Slider
                        value={1}
                        minimumValue={0}
                        maximumValue={2}
                        maximumTrackTintColor={GlobalStyles.colors.fillsSecondary}
                        minimumTrackTintColor={GlobalStyles.colors.primaryGreen}
                        thumbTintColor={Platform.OS === 'android' && GlobalStyles.colors.secondaryGreen}
                    />
                </View>
            </SafeAreaView>
    )
}

export default SliderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: GlobalStyles.spacing.s
    },
    row: {
        marginBottom: GlobalStyles.spacing.xs
    },
    item: {
        width: '90%',
        paddingVertical: GlobalStyles.spacing.s,
        paddingHorizontal: GlobalStyles.spacing.m,
        backgroundColor: GlobalStyles.colors.bgPrimary,
        borderRadius: 16
    }
})
