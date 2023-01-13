import IconButton from "../components/IconButton";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {COLORS, GlobalStyles} from "../constants";

function IconButtonScreen() {
    return (
        <ScrollView
            contentContainerStyle={{paddingVertical: GlobalStyles.spacing.s}}
            centerContent={true}
        >
            <View style={styles.container}>
                <View style={styles.iconItem}>
                    <IconButton
                        icon="location-outline"
                        color={COLORS.white}
                        bgColor={COLORS.primaryGreen}
                        size="large"
                        onPress={() => console.log('Pressed!')}
                    />
                    <View>
                        <Text style={styles.label}>Type: Rounded</Text>
                        <Text style={styles.label}>Size: Large</Text>
                    </View>
                </View>
                <View style={styles.iconItem}>
                    <IconButton
                        icon="location-outline"
                        color={COLORS.white}
                        bgColor={COLORS.primaryGreen}
                        size="medium"
                        onPress={() => console.log('Pressed!')}
                    />
                    <View>
                        <Text style={styles.label}>Type: Rounded</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                    </View>
                </View>
                <View style={styles.iconItem}>
                    <IconButton
                        icon="location-outline"
                        color={COLORS.white}
                        bgColor={COLORS.primaryGreen}
                        size="small"
                        onPress={() => console.log('Pressed!')}
                    />
                    <View>
                        <Text style={styles.label}>Type: Rounded</Text>
                        <Text style={styles.label}>Size: Small</Text>
                    </View>
                </View>
                <View style={styles.iconItem}>
                    <IconButton
                        icon="location-outline"
                        color={COLORS.white}
                        bgColor={COLORS.primaryGreen}
                        size="large"
                        type="ellipse"
                        onPress={() => console.log('Pressed!')}
                    />
                    <View>
                        <Text style={styles.label}>Type: Ellipse</Text>
                        <Text style={styles.label}>Size: Large</Text>
                    </View>
                </View>
                <View style={styles.iconItem}>
                    <IconButton
                        icon="location-outline"
                        color={COLORS.white}
                        bgColor={COLORS.primaryGreen}
                        size="medium"
                        type="ellipse"
                        onPress={() => console.log('Pressed!')}
                    />
                    <View>
                        <Text style={styles.label}>Type: Ellipse</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                    </View>
                </View>
                <View style={styles.iconItem}>
                    <IconButton
                        icon="location-outline"
                        color={COLORS.white}
                        bgColor={COLORS.primaryGreen}
                        size="small"
                        type="ellipse"
                        onPress={() => console.log('Pressed!')}
                    />
                    <View>
                        <Text style={styles.label}>Type: Ellipse</Text>
                        <Text style={styles.label}>Size: Small</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default IconButtonScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    label: {
        fontSize: GlobalStyles.fontSize.callout,
        marginBottom: GlobalStyles.spacing.xs
    },
    iconItem: {
        width: '80%',
        paddingVertical: GlobalStyles.spacing.s,
        paddingHorizontal: GlobalStyles.spacing.l,
        marginVertical: GlobalStyles.spacing.xs,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.bgPrimary,
        borderRadius: 16
    }
})
