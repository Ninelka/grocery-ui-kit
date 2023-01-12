import {StyleSheet, TextInput, View, ViewStyle} from "react-native";
import {GlobalStyles} from "../constants/styles";
import IconButton from "./IconButton";
import React from "react";

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
                    color={GlobalStyles.colors.grey2}
                    bgColor="transparent"
                    />
                )}
                <TextInput
                    value={value}
                    autoCorrect={false}
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={GlobalStyles.colors.grey2}
                    cursorColor={GlobalStyles.colors.primaryGreen}
                />
                {iconRight && (
                    <IconButton
                        icon={iconRight}
                        size="small"
                        color={GlobalStyles.colors.grey2}
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
        backgroundColor: GlobalStyles.colors.fillsTertiary,
        paddingHorizontal: GlobalStyles.spacing.xs,
    },
    input: {
        // TODO: fix style type and uncomment it
        // ...GlobalStyles.fontRegular,
        flex: 1,
        color: GlobalStyles.colors.labelsPrimary,
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
