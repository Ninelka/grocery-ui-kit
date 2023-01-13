import SegmentedControl from "../components/SegmentedControl";
import {useState} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {COLORS, GlobalStyles} from "../constants";

const segmentsData = [
    "Browse",
    "Sale & Offer",
    "Man",
    "Woman",
]

function SegmentedControlScreen() {
    const [activeSegment, setActiveSegment] = useState(segmentsData[0]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.item}>
                <View>
                    <Text style={styles.label}>Transparent: false</Text>
                </View>
                <SegmentedControl
                    segments={segmentsData}
                    activeItem={activeSegment}
                    onPress={(item) => setActiveSegment(item)}
                />
            </View>
            <View style={styles.item}>
                <View>
                    <Text style={styles.label}>Transparent: true</Text>
                </View>
                <SegmentedControl
                    transparent={true}
                    segments={segmentsData}
                    activeItem={activeSegment}
                    onPress={(item) => setActiveSegment(item)}
                />
            </View>
        </SafeAreaView>
    )
}

export default SegmentedControlScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        paddingVertical: GlobalStyles.spacing.s,
        paddingHorizontal: GlobalStyles.spacing.m,
        marginVertical: GlobalStyles.spacing.xs,
        backgroundColor: COLORS.bgPrimary,
        borderRadius: 16,
        margin: GlobalStyles.spacing.xs
    },
    label: {
        marginBottom: GlobalStyles.spacing.xs
    },
})
