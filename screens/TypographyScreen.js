import {ScrollView, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../constants/styles";

function TypographyScreen() {
    return (
        <ScrollView
            contentContainerStyle={{paddingVertical: 16}}
        >
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.hugeTitle}]}>Huge Title</Text>
                    <Text style={[GlobalStyles.fontBold, {fontSize: GlobalStyles.fontSize.hugeTitle}]}>Huge Title</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.largeTitle}]}>Large Title</Text>
                    <Text style={[GlobalStyles.fontBold, {fontSize: GlobalStyles.fontSize.largeTitle}]}>Large Title</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.title1}]}>Title 1</Text>
                    <Text style={[GlobalStyles.fontBold, {fontSize: GlobalStyles.fontSize.title1}]}>Title 1</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.title2}]}>Title 2</Text>
                    <Text style={[GlobalStyles.fontBold, {fontSize: GlobalStyles.fontSize.title2}]}>Title 2</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.title3}]}>Title 3</Text>
                    <Text style={[GlobalStyles.fontBold, {fontSize: GlobalStyles.fontSize.title3}]}>Title 3</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.headline}]}>Headline</Text>
                    <Text style={[GlobalStyles.fontBold, {fontSize: GlobalStyles.fontSize.headline}]}>Headline</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, {fontSize: GlobalStyles.fontSize.headline}]}>Headline</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, {fontSize: GlobalStyles.fontSize.headline}]}>Headline</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.callout}]}>Callout</Text>
                    <Text style={[GlobalStyles.fontBold, {fontSize: GlobalStyles.fontSize.callout}]}>Callout</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, {fontSize: GlobalStyles.fontSize.callout}]}>Callout</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, {fontSize: GlobalStyles.fontSize.callout}]}>Callout</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.subhead}]}>Subhead</Text>
                    <Text style={[GlobalStyles.fontBold, {fontSize: GlobalStyles.fontSize.subhead}]}>Subhead</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, {fontSize: GlobalStyles.fontSize.subhead}]}>Subhead</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, {fontSize: GlobalStyles.fontSize.subhead}]}>Subhead</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.footnote}]}>Footnote</Text>
                    <Text style={[GlobalStyles.fontSemiBold, {fontSize: GlobalStyles.fontSize.footnote}]}>Footnote</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, {fontSize: GlobalStyles.fontSize.footnote}]}>Footnote</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, {fontSize: GlobalStyles.fontSize.footnote}]}>Footnote</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.button}]}>Button</Text>
                    <Text style={[GlobalStyles.fontBold, {fontSize: GlobalStyles.fontSize.button}]}>Button</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, {fontSize: GlobalStyles.fontSize.button}]}>Button</Text>
                    <Text style={[GlobalStyles.fontBoldItalic, {fontSize: GlobalStyles.fontSize.button}]}>Button</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.label1}]}>Label 1</Text>
                    <Text style={[GlobalStyles.fontSemiBold, {fontSize: GlobalStyles.fontSize.label1}]}>Label 1</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, {fontSize: GlobalStyles.fontSize.label1}]}>Label 1</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, {fontSize: GlobalStyles.fontSize.label1}]}>Label 1</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.label2}]}>Label 2</Text>
                    <Text style={[GlobalStyles.fontSemiBold, {fontSize: GlobalStyles.fontSize.label2}]}>Label 2</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, {fontSize: GlobalStyles.fontSize.label2}]}>Label 2</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, {fontSize: GlobalStyles.fontSize.label2}]}>Label 2</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.caption1}]}>Caption 1</Text>
                    <Text style={[GlobalStyles.fontSemiBold, {fontSize: GlobalStyles.fontSize.caption1}]}>Caption 1</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, {fontSize: GlobalStyles.fontSize.caption1}]}>Caption 1</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, {fontSize: GlobalStyles.fontSize.caption1}]}>Caption 1</Text>
                    <Text style={[GlobalStyles.fontRegular, {fontSize: GlobalStyles.fontSize.caption2}]}>Caption 2</Text>
                    <Text style={[GlobalStyles.fontSemiBold, {fontSize: GlobalStyles.fontSize.caption2}]}>Caption 2</Text>
                    <Text style={[GlobalStyles.fontRegularItalic, {fontSize: GlobalStyles.fontSize.caption2}]}>Caption 2</Text>
                    <Text style={[GlobalStyles.fontSemiBoldItalic, {fontSize: GlobalStyles.fontSize.caption2}]}>Caption 2</Text>
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
