import {Pressable, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../constants/styles";
import {Ionicons} from "@expo/vector-icons";
import {useMemo} from "react";

const defaultButtonStyle = {};

function Button({
    children,
    iconLeft,
    iconRight,
    onPress,
    type='primary',
    shape='rectangle',
    size='medium',
    isCentered=true,
    isDisabled,
    style,
    textStyle,
}) {
    const btnBorderRadius = useMemo(() => {
        switch (shape) {
            case 'ellipse':
                return {
                    borderRadius: 28
                };
            case 'rounded':
                return {
                    borderRadius: 8
                };
            default:
                return;
        }
    }, [shape]);

    const btnBorderColor = useMemo(() => {
        switch (type) {
            case 'primary':
                if (isDisabled) {
                    return {
                        backgroundColor: GlobalStyles.colors.grey5
                    }
                }
                return {
                    backgroundColor: GlobalStyles.colors.primaryGreen,
                };
            case 'secondary':
                if (isDisabled) {
                    return {
                        backgroundColor: 'transparent',
                        borderColor: GlobalStyles.colors.grey3,
                        borderWidth: 1,
                        borderStyle: 'solid'
                    }
                }

                return {
                    backgroundColor: 'transparent',
                    borderColor: GlobalStyles.colors.primaryGreen,
                    borderWidth: 1,
                    borderStyle: 'solid'
                };
            case 'transparent':
                return {
                    backgroundColor: "transparent"
                }
        }
    }, [isDisabled, type]);

    const btnSize = useMemo(() => {
        switch (size) {
            case 'large':
                return {
                    paddingVertical: 16
                }
            case 'medium':
                return {
                    paddingVertical: 12
                }
            case 'small':
                return {
                    paddingVertical: 10
                }
        }
    }, [size]);

    const iconColor = useMemo(() => {
        if (isDisabled) {
            return GlobalStyles.colors.disable;
        }

        switch (type) {
            case 'primary':
                return GlobalStyles.colors.white;
            case 'secondary':
                return GlobalStyles.colors.primaryGreen;
        }
    }, [type, isDisabled]);

    const btnTextAlign = useMemo(() => {
        return isCentered ? "center" : "space-between"
    }, [isCentered]);

    const buttonStyle = useMemo(() => {
        return {
            ...defaultButtonStyle,
            ...btnBorderRadius,
            ...btnBorderColor,
            ...btnSize,
            paddingHorizontal: 16,
            flexDirection: "row",
            justifyContent: btnTextAlign,
            alignItems: "center",
            ...style
        };
    }, [btnBorderRadius, btnBorderColor, btnSize, btnTextAlign, style]);
    return (
        <View style={style}>
            <Pressable disabled={isDisabled} onPress={onPress} style={({pressed}) => [pressed && styles.pressed]}>
                <View style={buttonStyle}>
                    {iconLeft && <Ionicons name={iconLeft} size={20} color={iconColor} />}
                    <Text
                        style={[
                            styles.buttonText,
                            type === 'secondary' && styles.secondaryText,
                            isCentered && styles.centeredText,
                            isDisabled && styles.disabledText,
                            textStyle
                        ]}
                    >{children}</Text>
                    {iconRight && <Ionicons name={iconRight} size={20} color={iconColor} />}
                </View>
            </Pressable>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    secondary: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: GlobalStyles.colors.white,
        fontSize: 17,
    },
    secondaryText: {
        color: GlobalStyles.colors.primaryGreen
    },
    disabledText: {
        color: GlobalStyles.colors.disable,
    },
    centeredText: {
        marginHorizontal: 16,
    },
    pressed: {
        opacity: 0.75,
        borderRadius: 4
    }
})

