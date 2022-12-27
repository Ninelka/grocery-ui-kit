import {StyleSheet, Text, TextInput, View} from "react-native";
import {GlobalStyles} from "../constants/styles";
import {useState} from "react";
import Button from "./Button";
import IconButton from "./IconButton";

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
                    placeholderTextColor={GlobalStyles.colors.labelsTertiary}
                    secureTextEntry={secureText}
                    cursorColor={GlobalStyles.colors.primaryGreen}
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
                        color={GlobalStyles.colors.grey1}
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
        marginVertical: 8,
    },
    inputWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: GlobalStyles.colors.separatorNotOpaque,
        borderRadius: 8,
        backgroundColor: "transparent",
        paddingHorizontal: 16,
    },
    label: {
        fontSize: 17,
        color: GlobalStyles.colors.labelsSecondary,
        marginBottom: 8
    },
    input: {
        flex: 1,
        color: GlobalStyles.colors.labelsPrimary,
        fontSize: 18,
        paddingVertical: 16
    },
    invalidLabel: {
        color: GlobalStyles.colors.primaryOrange
    },
    invalidInput: {
        borderColor: GlobalStyles.colors.primaryOrange
    },
    focusedInput: {
        borderColor: GlobalStyles.colors.primaryGreen
    },
    inputBtnText: {
        color: GlobalStyles.colors.primaryGreen,
        marginHorizontal: 0
    },
    noPaddingRight: {
        paddingRight: 0
    }
})

