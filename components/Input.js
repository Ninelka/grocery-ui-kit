import {StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import Button from "./Button";
import IconButton from "./IconButton";
import {COLORS, FONT_FAMILY, GlobalStyles} from "../constants";

function Input({
    label,
    value,
    style,
    invalid,
    placeholder,
    keyboardType,
    onBtnPress,
    iconRight,
    iconRightPress,
    secureText
}) {
    const [isFocused, setIsFocused] = useState(false);

    let inputStyle = [styles.input];

    if (invalid) {
        inputStyle.push(styles.invalidInput)
    }

    if (isFocused) {
        inputStyle.push(styles.focusedInput)
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
            <View style={[
                styles.inputWrapper,
                isFocused && styles.focusedInput,
                (iconRight || onBtnPress) && styles.noPaddingRight,
                invalid && styles.invalidInput

            ]}>
                <TextInput
                    value={value}
                    autoCorrect={false}
                    style={inputStyle}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    placeholderTextColor={COLORS.labelsTertiary}
                    secureTextEntry={secureText}
                    cursorColor={COLORS.primaryGreen}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {onBtnPress && (
                    <Button onPress={onBtnPress} type="transparent" textStyle={styles.inputBtnText}>APPLY</Button>
                )}
                {iconRight && (
                    <IconButton
                        icon={iconRight}
                        size="small"
                        color={COLORS.grey1}
                        bgColor="transparent"
                        onPress={iconRightPress}
                    />
                )}
            </View>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: GlobalStyles.spacing.xs,
    },
    inputWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: COLORS.separatorNotOpaque,
        borderRadius: 8,
        backgroundColor: "transparent",
        paddingHorizontal: GlobalStyles.spacing.s,
    },
    label: {
        fontFamily: FONT_FAMILY.regular,
        fontWeight: "400",
        fontSize: GlobalStyles.fontSize.headline,
        color: COLORS.labelsSecondary,
        marginBottom: GlobalStyles.spacing.xs
    },
    input: {
        ontFamily: FONT_FAMILY.regular,
        fontWeight: "400",
        flex: 1,
        color: COLORS.labelsPrimary,
        fontSize: GlobalStyles.fontSize.headline,
        paddingVertical: GlobalStyles.spacing.s
    },
    invalidLabel: {
        color: COLORS.primaryOrange
    },
    invalidInput: {
        borderColor: COLORS.primaryOrange
    },
    focusedInput: {
        borderColor: COLORS.primaryGreen
    },
    inputBtnText: {
        color: COLORS.primaryGreen,
        marginHorizontal: 0
    },
    noPaddingRight: {
        paddingRight: 0
    }
})

