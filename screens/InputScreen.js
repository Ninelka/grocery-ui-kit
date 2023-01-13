import {ScrollView, StyleSheet, View} from "react-native";
import Input from "../components/Input";
import {useTogglePasswordVisibility} from "../hooks/useTogglePasswordVisibility";
import {COLORS, GlobalStyles} from "../constants";

function InputScreen() {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

    return (
        <ScrollView
            contentContainerStyle={{paddingVertical: GlobalStyles.spacing.s}}
        >
            <View style={styles.container}>
                <View style={styles.item}>
                    <View style={styles.row}>
                        <Input
                            label="Email Address"
                            placeholder="Input Here"
                        />
                        <Input
                            label="Password"
                            placeholder="Input Here"
                            keyboardType="email-address"
                            secureText={passwordVisibility}
                        />
                        <Input
                            label="Promo Code"
                            placeholder="Enter Promo Code"
                        />
                        <Input
                            label="Email Address"
                            placeholder="Input Here"
                            invalid={true}
                        />
                        <Input
                            label="Password"
                            placeholder="Input Here"
                            keyboardType="email-address"
                            secureText={passwordVisibility}
                            iconRight={rightIcon}
                            iconRightPress={() => handlePasswordVisibility((prevState) => !prevState)}
                        />
                        <Input
                            label="Promo Code"
                            placeholder="Enter Promo Code"
                            onBtnPress={() => console.log('Input btn pressed!')}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default InputScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: GlobalStyles.spacing.s
    },
    row: {
        marginBottom: GlobalStyles.spacing.xs
    },
    item: {
        width: '90%',
        paddingVertical: GlobalStyles.spacing.s,
        paddingHorizontal: GlobalStyles.spacing.m,
        backgroundColor: COLORS.bgPrimary,
        borderRadius: 16
    }
})
