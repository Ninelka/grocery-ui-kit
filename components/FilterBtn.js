import {Pressable, StyleSheet, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {GlobalStyles} from "../constants/styles";

function FilterBtn({onPress, style}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.container, pressed && styles.pressed, style]}>
            <Ionicons name="options-outline" size={24}/>
            <Text style={styles.text}>Sort & Filter</Text>
        </Pressable>
    )
}

export default FilterBtn;

const styles = StyleSheet.create({
    container: {
        width: 172,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: GlobalStyles.spacing.m
    },
    text: {
        ...GlobalStyles.fontBold,
        fontSize: GlobalStyles.fontSize.callout,
        color: GlobalStyles.colors.labelsPrimary,
        marginLeft: GlobalStyles.spacing.xs
    },
    pressed: {
        opacity: 0.75
    }
})
