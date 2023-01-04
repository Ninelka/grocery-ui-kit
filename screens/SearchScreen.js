import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {GlobalStyles} from "../constants/styles";
import Search from "../components/Search";
import Button from "../components/Button";
import IconButton from "../components/IconButton";

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
                                        color={GlobalStyles.colors.white}
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
                                        color={GlobalStyles.colors.primaryGreen}
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
        backgroundColor: GlobalStyles.colors.bgPrimary,
        borderRadius: 16
    },
    btn: {
        paddingRight: 0
    },
    btnText: {
        ...GlobalStyles.fontRegular,
        color: GlobalStyles.colors.black,
        marginHorizontal: 0,
    },
})
