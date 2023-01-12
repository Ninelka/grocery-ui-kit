import {Pressable, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../constants/styles";
import Button from "../Button";

function TotalCard({onPress, isSummary, counter = 0, totalAmount, summaryText, summaryAmount}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.container, pressed && styles.pressed]}>
            <View style={{flex: 1}}>
                {isSummary ? (
                    <>
                        <Text style={styles.title}>{`${counter} Item`}</Text>
                        <Text numberOfLines={1} style={styles.summaryText}>{summaryText}</Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.text}>{`Total (${counter})`}</Text>
                        <Text style={styles.text}>{totalAmount}</Text>
                    </>
                )}
            </View>
            {isSummary ? <Text style={styles.amount}>{summaryAmount}</Text> :  <Button shape="ellipse">Buy Now</Button>}
        </Pressable>
    )
}

export default TotalCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: GlobalStyles.spacing.s,
    },
    text: {
        ...GlobalStyles.fontBold,
        fontSize: GlobalStyles.fontSize.callout,
    },
    title: {
        ...GlobalStyles.fontBold,
        fontSize: GlobalStyles.fontSize.callout,
        color: GlobalStyles.colors.labelsQuarternary,
        marginBottom: GlobalStyles.spacing.xs
    },
    summaryText: {
        ...GlobalStyles.fontRegular,
        fontSize: GlobalStyles.fontSize.footnote,
        color: GlobalStyles.colors.labelsQuarternary,
    },
    amount: {
        ...GlobalStyles.fontBold,
        fontSize: GlobalStyles.fontSize.title1,
        color: GlobalStyles.colors.labelsQuarternary,
    },
    pressed: {
        opacity: 0.75
    }
})
