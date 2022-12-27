import {ScrollView, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../constants/styles";

function TypographyScreen() {
    return (
        <ScrollView
            contentContainerStyle={{paddingVertical: 16}}
        >
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.hugeTitle]}>Huge Title</Text>
                    <Text style={[GlobalStyles.fontBold, GlobalStyles.hugeTitle]}>Huge Title</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.largeTitle]}>Large Title</Text>
                    <Text style={[GlobalStyles.fontBold, GlobalStyles.largeTitle]}>Large Title</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.title1]}>Title 1</Text>
                    <Text style={[GlobalStyles.fontBold, GlobalStyles.title1]}>Title 1</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.title2]}>Title 2</Text>
                    <Text style={[GlobalStyles.fontBold, GlobalStyles.title2]}>Title 2</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.title3]}>Title 3</Text>
                    <Text style={[GlobalStyles.fontBold, GlobalStyles.title3]}>Title 3</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.headline]}>Headline</Text>
                    <Text style={[GlobalStyles.fontBold, GlobalStyles.headline]}>Headline</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, GlobalStyles.headline]}>Headline</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, GlobalStyles.headline]}>Headline</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.callout]}>Callout</Text>
                    <Text style={[GlobalStyles.fontBold, GlobalStyles.callout]}>Callout</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, GlobalStyles.callout]}>Callout</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, GlobalStyles.callout]}>Callout</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.subhead]}>Subhead</Text>
                    <Text style={[GlobalStyles.fontBold, GlobalStyles.subhead]}>Subhead</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, GlobalStyles.subhead]}>Subhead</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, GlobalStyles.subhead]}>Subhead</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.footnote]}>Footnote</Text>
                    <Text style={[GlobalStyles.fontSemiBold, GlobalStyles.footnote]}>Footnote</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, GlobalStyles.footnote]}>Footnote</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, GlobalStyles.footnote]}>Footnote</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.button]}>Button</Text>
                    <Text style={[GlobalStyles.fontBold, GlobalStyles.button]}>Button</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, GlobalStyles.button]}>Button</Text>
                    <Text style={[GlobalStyles.fontBoldItalic, GlobalStyles.button]}>Button</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.label1]}>Label 1</Text>
                    <Text style={[GlobalStyles.fontSemiBold, GlobalStyles.label1]}>Label 1</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, GlobalStyles.label1]}>Label 1</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, GlobalStyles.label1]}>Label 1</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.label2]}>Label 2</Text>
                    <Text style={[GlobalStyles.fontSemiBold, GlobalStyles.label2]}>Label 2</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, GlobalStyles.label2]}>Label 2</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, GlobalStyles.label2]}>Label 2</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.caption1]}>Caption 1</Text>
                    <Text style={[GlobalStyles.fontSemiBold, GlobalStyles.caption1]}>Caption 1</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, GlobalStyles.caption1]}>Caption 1</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, GlobalStyles.caption1]}>Caption 1</Text>
                    <Text style={[GlobalStyles.fontRegular, GlobalStyles.caption2]}>Caption 2</Text>
                    <Text style={[GlobalStyles.fontSemiBold, GlobalStyles.caption2]}>Caption 2</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, GlobalStyles.caption2]}>Caption 2</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, GlobalStyles.caption2]}>Caption 2</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default TypographyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    item: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: GlobalStyles.colors.bgPrimary,
        borderRadius: 16
    }
})
