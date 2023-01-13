import {ScrollView, StyleSheet, View} from "react-native";
import {GlobalStyles} from "../constants";
import ProductCard from "../components/card/ProductCard";

const product = {
    title: 'Dragon Fruit',
    unit: '200gr',
    amount: 90,
    discount: 0,
    image: require('../assets/images/shopping.png')
}

function ProductCardScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.row}>
                    <ProductCard image={product.image} title={product.title} type="compact"/>
                </View>
                <View style={styles.row}>
                    <ProductCard {...product}/>
                </View>
                <View style={styles.row}>
                    <ProductCard
                        {...product}
                        discount={40}
                        amountWithDiscount={product.amount - product.amount * 40/100}
                    />
                </View>
                <View style={styles.row}>
                    <ProductCard {...product} type="horizontal"/>
                </View>
                <View style={styles.row}>
                    <ProductCard
                        {...product}
                        discount={40}
                        amountWithDiscount={product.amount - product.amount * 40/100}
                        type="horizontal"
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductCardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: GlobalStyles.spacing.s
    },
    row: {
        marginBottom: GlobalStyles.spacing.xs
    },
})
