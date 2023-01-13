import {Pressable, StyleSheet, Text} from "react-native";
import {COLORS, FONT_FAMILY, GlobalStyles} from "../constants";

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
        borderColor: COLORS.white,
        paddingHorizontal: GlobalStyles.spacing.s,
        paddingVertical: GlobalStyles.spacing.xs,
    },
    active: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.grey5,
        borderWidth: 0.5,
        borderStyle: "solid",
        // shadow for android
        elevation: 1,
    },
    transparentItemActive: {
        borderWidth: 1,
        borderColor: COLORS.primaryGreen,
        elevation: 0
    },
    text: {
        fontFamily: FONT_FAMILY.semiBold,
        fontWeight: "600",
        fontSize: GlobalStyles.fontSize.subhead,
        color: COLORS.black
    },
    transparentItemText: {
        fontFamily: FONT_FAMILY.regular,
        fontWeight: "400",
        fontSize: GlobalStyles.fontSize.headline,
    },
    transparentActiveItemText: {
        fontFamily: FONT_FAMILY.semiBold,
        fontWeight: "600",
        color: COLORS.primaryGreen,
    }
})
