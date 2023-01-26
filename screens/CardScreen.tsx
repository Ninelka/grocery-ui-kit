import {StyleSheet, View} from "react-native";
import Card from "../components/card/Card";
import {COLORS} from "../constants";

const image = 'https://seithy.com/siteadmin/upload/dragon-fruit-for-weight-loss-240719-400.jpg';

function CardScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Card title={"Card without image"} description={"Some card description"} />
            </View>
            <View style={styles.row}>
                <Card title={"Card with image"} description={"Some card description"} bgImage={image} />
            </View>
        </View>
    )
}

export default CardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgPrimary,
        padding: 16,
    },
    row: {
        height: 168,
        marginBottom: 8
    },
})
