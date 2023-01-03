import {Pressable, StyleSheet, Text} from "react-native";
import {GlobalStyles} from "../constants/styles";

function Segment({item, isActive, onPress, transparent}) {
    return (
        <Pressable
            key={item}
            style={[
                styles.item,
                transparent && styles.transparentItem,
                isActive && styles.active,
                transparent && isActive && styles.transparentItemActive
            ]}
            onPress={() => onPress(item)}
        >
            <Text
                style={[
                    styles.text,
                    transparent && styles.transparentItemText,
                    transparent && isActive && styles.transparentActiveItemText
                ]}
            >
                {item}
            </Text>
        </Pressable>
    )
}

export default Segment;

const styles = StyleSheet.create({
    item: {
        borderRadius: 8,
        paddingHorizontal: 41,
        paddingVertical: 3,
    },
    transparentItem: {
        borderWidth: 1,
        borderColor: GlobalStyles.colors.white,
        paddingHorizontal: GlobalStyles.spacing.s,
        paddingVertical: GlobalStyles.spacing.xs,
    },
    active: {
        backgroundColor: GlobalStyles.colors.white,
        borderColor: GlobalStyles.colors.grey5,
        borderWidth: 0.5,
        borderStyle: "solid",
    },
    transparentItemActive: {
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primaryGreen,
    },
    text: {
        ...GlobalStyles.fontSemiBold,
        fontSize: GlobalStyles.fontSize.subhead,
        color: GlobalStyles.colors.black
    },
    transparentItemText: {
        ...GlobalStyles.fontRegular,
        fontSize: GlobalStyles.fontSize.headline,
    },
    transparentActiveItemText: {
        ...GlobalStyles.fontSemiBold,
        color: GlobalStyles.colors.primaryGreen,
    }
})
