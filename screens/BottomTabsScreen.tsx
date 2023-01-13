import {StyleSheet, Text, View} from "react-native";
import Button from "../components/Button";

function BottomTabsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>This is Bottom Tabs Screen</Text>
            <Button
                onPress={() => navigation.openDrawer()}
                shape="rounded"
            >
                Open Menu
            </Button>
        </View>
    )
}

export default BottomTabsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
