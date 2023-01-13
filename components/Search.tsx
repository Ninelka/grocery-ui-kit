import {StyleSheet, TextInput, View, ViewStyle} from "react-native";
import IconButton from "./IconButton";
import React from "react";
import {COLORS, FONT_FAMILY, GlobalStyles} from "../constants";

interface ISearch {
    value?: string,
    placeholder?: string,
    style?: ViewStyle,
    iconLeft?: React.ReactElement
    iconRight?: React.ReactElement,
    iconRightPress?: () => void,
    outerBtn?: React.ReactElement
}

function Search({value, placeholder, style, iconLeft, iconRight, iconRightPress, outerBtn}: ISearch) {
    return (
        <View style={[styles.inputContainer, style]}>
            <View style={[
                styles.inputWrapper,
                iconRight && styles.noPaddingRight,
                iconLeft && styles.noPaddingLeft

            ]}>
                {iconLeft && (
                    <IconButton
                    icon={iconLeft}
                    size="small"
                    color={COLORS.grey2}
                    bgColor="transparent"
                    />
                )}
                <TextInput
                    value={value}
                    autoCorrect={false}
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.grey2}
                    cursorColor={COLORS.primaryGreen}
                />
                {iconRight && (
                    <IconButton
                        icon={iconRight}
                        size="small"
                        color={COLORS.grey2}
                        bgColor="transparent"
                        onPress={iconRightPress}
                    />
                )}
            </View>
            {outerBtn}
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: GlobalStyles.spacing.s,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: COLORS.fillsTertiary,
        paddingHorizontal: GlobalStyles.spacing.xs,
    },
    input: {
        fontFamily: FONT_FAMILY.regular,
        fontWeight: "400",
        flex: 1,
        color: COLORS.labelsPrimary,
        fontSize: GlobalStyles.fontSize.headline,
        paddingVertical: GlobalStyles.spacing.xs
    },
    noPaddingRight: {
        paddingRight: 0
    },
    noPaddingLeft: {
        paddingLeft: 0
    }
})
