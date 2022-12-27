import {ScrollView, StyleSheet, View} from "react-native";
import {GlobalStyles} from "../constants/styles";
import Input from "../components/Input";
import {useTogglePasswordVisibility} from "../hooks/useTogglePasswordVisibility";

function InputScreen() {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

    return (
        <ScrollView
            contentContainerStyle={{paddingVertical: 16}}
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
        paddingVertical: 16
    },
    row: {
        marginBottom: 8
    },
    item: {
        fontSize: 16,
        width: '90%',
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: GlobalStyles.colors.bgPrimary,
        borderRadius: 16
    }
})
