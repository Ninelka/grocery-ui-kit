import IconButton from "../components/IconButton";
import {GlobalStyles} from "../constants/styles";
import {ScrollView, StyleSheet, Text, View} from "react-native";

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
                        color={GlobalStyles.colors.white}
                        bgColor={GlobalStyles.colors.primaryGreen}
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
                        color={GlobalStyles.colors.white}
                        bgColor={GlobalStyles.colors.primaryGreen}
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
                        color={GlobalStyles.colors.white}
                        bgColor={GlobalStyles.colors.primaryGreen}
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
                        color={GlobalStyles.colors.white}
                        bgColor={GlobalStyles.colors.primaryGreen}
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
                        color={GlobalStyles.colors.white}
                        bgColor={GlobalStyles.colors.primaryGreen}
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
                        color={GlobalStyles.colors.white}
                        bgColor={GlobalStyles.colors.primaryGreen}
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
        marginBottom: GlobalStyles.spacing.xs
    },
    iconItem: {
        fontSize: GlobalStyles.fontSize.callout,
        width: '80%',
        paddingVertical: GlobalStyles.spacing.s,
        paddingHorizontal: GlobalStyles.spacing.l,
        marginVertical: GlobalStyles.spacing.xs,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.bgPrimary,
        borderRadius: 16
    }
})
