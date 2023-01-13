import {SafeAreaView, StyleSheet, View} from "react-native";
import FloatingCard from "../components/card/FloatingCard";
import FilterBtn from "../components/FilterBtn";
import TotalCard from "../components/card/TotalCard";
import {useMemo} from "react";
import {COLORS, GlobalStyles} from "../constants";

const orderList = ['Dragong Fruit', 'Orange', 'Apple', 'Banana', 'Avocado', 'Dragong Fruit', 'Orange', 'Apple', 'Banana', 'Avocado'];

function FloatingCardScreen() {
    const summaryText = useMemo(() => {
        if (!orderList) {
            return ""
        }

        if (orderList.length > 4) {
            return orderList.slice(0, - 5).join(', ');
        }

        return orderList.join(', ');
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.item}>
                <View style={styles.row}>
                    <FloatingCard type="ellipse" style={styles.filterBtn}>
                        <FilterBtn />
                    </FloatingCard>
                </View>
                <View style={styles.row}>
                    <FloatingCard style={styles.summaryCard}>
                        <TotalCard
                            isSummary
                            summaryAmount="$240"
                            summaryText={summaryText}
                            counter={orderList.length}
                        />
                    </FloatingCard>
                </View>
                <View style={styles.row}>
                    <FloatingCard>
                        <TotalCard counter={5} totalAmount="$156" />
                    </FloatingCard>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default FloatingCardScreen;

const styles = StyleSheet.create({
    row: {
        height: 80,
        marginBottom: GlobalStyles.spacing.l,
    },
    item: {
        paddingVertical: GlobalStyles.spacing.s,
        paddingHorizontal: GlobalStyles.spacing.m,
    },
    filterBtn: {
        width: 172,
    },
    summaryCard: {
        backgroundColor: COLORS.primaryGreen,
    }
})
