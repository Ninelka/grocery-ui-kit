import {StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../constants/styles";
import Badge from "../components/Badge";

function BadgeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <View style={styles.row}>
                    <Badge counter={3} />
                    <Badge counter={23} style={{marginLeft: 8}} />
                    <Badge counter={213} style={{marginLeft: 8}} />
                    <Badge counter={6.789} style={{marginLeft: 8}} />
                    <View style={{marginLeft: "auto"}}>
                        <Text>Size: Large</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Badge counter={3} size="small" />
                    <Badge counter={23} style={{marginLeft: 8}} size="small" />
                    <Badge counter={213} style={{marginLeft: 8}} size="small" />
                    <Badge counter={6.789} style={{marginLeft: 8}} size="small" />
                    <View style={{marginLeft: "auto"}}>
                        <Text>Size: Small</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BadgeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 16
    },
    row: {
        flexDirection: "row",
        marginBottom: 8
    },
    item: {
        fontSize: 16,
        width: '90%',
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: GlobalStyles.colors.bgPrimary,
        borderRadius: 16
    }
})
