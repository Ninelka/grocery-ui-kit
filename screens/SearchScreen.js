import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import Search from "../components/Search";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import {COLORS, FONT_FAMILY, GlobalStyles} from "../constants";

function SearchScreen() {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.item}>
                    <View style={styles.row}>
                        <Search
                            placeholder="Search"
                        />
                        <Search
                            placeholder="Search"
                            iconLeft="search"
                        />
                        <Search
                            placeholder="Search"
                            iconRight="search"
                        />
                        <Search
                            placeholder="Search"
                            iconLeft="search"
                            iconRight="close-circle-outline"
                        />
                        <Search
                            placeholder="Search"
                            iconLeft="search"
                            iconRight="mic"
                        />
                        <Search
                            placeholder="Search"
                            iconLeft="search"
                            outerBtn={
                                <Button
                                    onPress={() => console.log("Btn pressed")}
                                    type="transparent"
                                    textStyle={styles.btnText}
                                    style={styles.btn}
                                >
                                    Cancel
                                </Button>
                            }
                        />
                        <Search
                            placeholder="Search"
                            iconLeft="search"
                            outerBtn={
                                <View style={{marginLeft: GlobalStyles.spacing.xs}}>
                                    <IconButton
                                        icon="search"
                                        color={COLORS.white}
                                        size="small"
                                        onPress={() => console.log("Icon pressed")}
                                    />
                                </View>
                            }
                        />
                        <Search
                            placeholder="Search"
                            iconLeft="search"
                            outerBtn={
                                    <IconButton
                                        icon="notifications-outline"
                                        color={COLORS.primaryGreen}
                                        bgColor="transparent"
                                        size="small"
                                        onPress={() => console.log("Icon pressed")}
                                    />
                            }
                        />
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default SearchScreen;

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
    },
    btn: {
        paddingRight: 0
    },
    btnText: {
        fontFamily: FONT_FAMILY.regular,
        fontWeight: "400",
        color: COLORS.black,
        marginHorizontal: 0,
    },
})
