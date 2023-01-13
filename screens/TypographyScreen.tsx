import {ScrollView, StyleSheet, Text, View} from "react-native";
import {COLORS, FONT_FAMILY, GlobalStyles} from "../constants";

function TypographyScreen() {
    return (
        <ScrollView
            contentContainerStyle={{paddingVertical: 16}}
        >
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.hugeTitle}}>Huge Title</Text>
                    <Text style={{fontFamily: FONT_FAMILY.bold, fontWeight: "700", fontSize: GlobalStyles.fontSize.hugeTitle}}>Huge Title</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.largeTitle}}>Large Title</Text>
                    <Text style={{fontFamily: FONT_FAMILY.bold, fontWeight: "700", fontSize: GlobalStyles.fontSize.largeTitle}}>Large Title</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.title1}}>Title 1</Text>
                    <Text style={{fontFamily: FONT_FAMILY.bold, fontWeight: "700", fontSize: GlobalStyles.fontSize.title1}}>Title 1</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.title2}}>Title 2</Text>
                    <Text style={{fontFamily: FONT_FAMILY.bold, fontWeight: "700", fontSize: GlobalStyles.fontSize.title2}}>Title 2</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.title3}}>Title 3</Text>
                    <Text style={{fontFamily: FONT_FAMILY.bold, fontWeight: "700", fontSize: GlobalStyles.fontSize.title3}}>Title 3</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.headline}}>Headline</Text>
                    <Text style={{fontFamily: FONT_FAMILY.bold, fontWeight: "700", fontSize: GlobalStyles.fontSize.headline}}>Headline</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regularItalic, fontWeight: "400", fontSize: GlobalStyles.fontSize.headline}}>Headline</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBoldItalic, fontWeight: "600", fontSize: GlobalStyles.fontSize.headline}}>Headline</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.callout}}>Callout</Text>
                    <Text style={{fontFamily: FONT_FAMILY.bold, fontWeight: "700", fontSize: GlobalStyles.fontSize.callout}}>Callout</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regularItalic, fontWeight: "400", fontSize: GlobalStyles.fontSize.callout}}>Callout</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBoldItalic, fontWeight: "600", fontSize: GlobalStyles.fontSize.callout}}>Callout</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.subhead}}>Subhead</Text>
                    <Text style={{fontFamily: FONT_FAMILY.bold, fontWeight: "700", fontSize: GlobalStyles.fontSize.subhead}}>Subhead</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regularItalic, fontWeight: "400", fontSize: GlobalStyles.fontSize.subhead}}>Subhead</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBoldItalic, fontWeight: "600", fontSize: GlobalStyles.fontSize.subhead}}>Subhead</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.footnote}}>Footnote</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBold, fontWeight: "600", fontSize: GlobalStyles.fontSize.footnote}}>Footnote</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regularItalic, fontWeight: "400", fontSize: GlobalStyles.fontSize.footnote}}>Footnote</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBoldItalic, fontWeight: "600", fontSize: GlobalStyles.fontSize.footnote}}>Footnote</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.button}}>Button</Text>
                    <Text style={{fontFamily: FONT_FAMILY.bold, fontWeight: "700", fontSize: GlobalStyles.fontSize.button}}>Button</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regularItalic, fontWeight: "400", fontSize: GlobalStyles.fontSize.button}}>Button</Text>
                    <Text style={{fontFamily: FONT_FAMILY.boldItalic, fontWeight: "700", fontSize: GlobalStyles.fontSize.button}}>Button</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.label1}}>Label 1</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBold, fontWeight: "600", fontSize: GlobalStyles.fontSize.label1}}>Label 1</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regularItalic, fontWeight: "400", fontSize: GlobalStyles.fontSize.label1}}>Label 1</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBoldItalic, fontWeight: "600", fontSize: GlobalStyles.fontSize.label1}}>Label 1</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.label2}}>Label 2</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBold, fontWeight: "600", fontSize: GlobalStyles.fontSize.label2}}>Label 2</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regularItalic, fontWeight: "400", fontSize: GlobalStyles.fontSize.label2}}>Label 2</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBoldItalic, fontWeight: "600", fontSize: GlobalStyles.fontSize.label2}}>Label 2</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.caption1}}>Caption 1</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBold, fontWeight: "600", fontSize: GlobalStyles.fontSize.caption1}}>Caption 1</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regularItalic, fontWeight: "400", fontSize: GlobalStyles.fontSize.caption1}}>Caption 1</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBoldItalic, fontWeight: "600", fontSize: GlobalStyles.fontSize.caption1}}>Caption 1</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regular, fontWeight: "400", fontSize: GlobalStyles.fontSize.caption2}}>Caption 2</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBold, fontWeight: "600", fontSize: GlobalStyles.fontSize.caption2}}>Caption 2</Text>
                    <Text style={{fontFamily: FONT_FAMILY.regularItalic, fontWeight: "400", fontSize: GlobalStyles.fontSize.caption2}}>Caption 2</Text>
                    <Text style={{fontFamily: FONT_FAMILY.semiBoldItalic, fontWeight: "600", fontSize: GlobalStyles.fontSize.caption2}}>Caption 2</Text>
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
        backgroundColor: COLORS.bgPrimary,
        borderRadius: 16
    }
})
