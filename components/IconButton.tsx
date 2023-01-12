import {Pressable, StyleSheet, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {GlobalStyles} from "../constants/styles";
import {useMemo} from "react";

interface IIconButton {
    icon: any,
    color?: string,
    bgColor?: string,
    type?: 'rounded' | 'ellipse',
    size?: 'large' | 'medium' | 'small',
    onPress?: () => void
}

// TODO: fix this any type
const defaultButtonStyle: any = {};

function IconButton({
                        icon,
                        color,
                        bgColor=GlobalStyles.colors.primaryGreen,
                        type='rounded',
                        size='medium',
                        onPress
}: IIconButton) {
    const buttonSize = useMemo(() => {
        switch (size) {
            case 'large':
                return 80;
            case 'medium':
                return 64;
            case 'small':
                return 48;
            default:
                return 64;
        }
    }, [size]);

    const iconSize = useMemo(() => {
        switch (size) {
            case 'large':
                return 40;
            case 'medium':
                return 32;
            case 'small':
                return 24;
            default:
                return 32;
        }
    }, [size]);

    const buttonStyle = useMemo(() => {
        if (type !== 'ellipse') {
            defaultButtonStyle.borderRadius = 8
        }

        return {
            ...defaultButtonStyle,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: bgColor,
            width: buttonSize,
            height: buttonSize
        };
    }, [type, bgColor, buttonSize]);

    const ellipseStyle = useMemo(() => {
        switch (size) {
            case 'large':
                return {borderRadius: 40};
            case 'medium':
                return {borderRadius: 32};
            case 'small':
                return {borderRadius: 24};
            default:
                return {borderRadius: 32};
        }
    }, [size]);

    return (
        <Pressable
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}
        >
            <View style={[buttonStyle, type === 'ellipse' && ellipseStyle]}>
                <Ionicons name={icon} size={iconSize} color={color} />
            </View>
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});

