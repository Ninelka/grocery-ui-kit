import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {useMemo} from "react";
import {GlobalStyles} from "../../constants/styles";
import Badge from "../Badge";
import IconButton from "../IconButton";

function ProductCard({onPress, type = 'vertical', title, unit, amount, amountWithDiscount, image, discount}) {
    const cardStyles = useMemo(() => {
        switch (type) {
            case 'compact':
                return {
                    flexDirection: 'row',
                    alignItems: 'center',
                };
            case 'horizontal':
                return {
                    flexDirection: 'row',
                    alignItems: "stretch",
                    justifyContent: 'space-between'
                };
        }
    }, [type]);

    const imageStyle = useMemo(() => {
        switch (type) {
            case 'compact':
                return {
                    width: GlobalStyles.spacing.xxl,
                    height: GlobalStyles.spacing.xxl,
                    marginRight: GlobalStyles.spacing.s
                }
            case 'horizontal':
                return {
                    width: 104,
                    height: 75,
                    marginRight: GlobalStyles.spacing.xs
                }
            default:
                return {
                    width: 152,
                    height: 131,
                    marginBottom: 4
                };
        }
    }, [type]);

    const cardContent = useMemo(() => {
        switch (type) {
            case 'compact':
                return (
                        <View style={styles.row}>
                            <View style={{flex: 1}}>
                                <Text style={[styles.title, {marginBottom: 0}]}>{title}</Text>
                            </View>
                            <IconButton size="small" bgColor="transparent" icon="close-outline"/>
                        </View>
                )
            case 'horizontal':
                return (
                    <View style={styles.row}>
                        <View style={{flex: 1}}>
                            {discount > 0 && <Badge size="small" counter={`Disc ${discount}%`} style={styles.badge}/>}
                            <Text style={styles.title}>{title}</Text>
                            {unit && <Text style={styles.unit}>{unit}</Text>}
                        </View>
                        <View style={styles.amountBlockCol}>
                            {discount > 0 && (
                                <Text style={styles.discount}>{`$${amount.toFixed()}`}</Text>
                            )}
                            <Text style={[styles.amountText, {marginLeft: discount > 0 ? GlobalStyles.spacing.xs : 0}]}>{discount > 0 ? `$${amountWithDiscount.toFixed()}` : `$${amount.toFixed()}`}</Text>
                        </View>
                    </View>
                )
            default:
                return (
                    <View>
                        <View style={{flex: 1}}>
                            {discount > 0 && <Badge size="small" counter={`Disc ${discount}%`} style={styles.badge}/>}
                            <Text style={styles.title}>{title}</Text>
                            {unit && <Text style={styles.unit}>{unit}</Text>}
                        </View>
                        <View style={[styles.row, {justifyContent: 'space-between'}]}>
                            <View style={styles.row}>
                                {discount > 0 && (
                                    <Text style={styles.discount}>{`$${amount.toFixed()}`}</Text>
                                )}
                                <Text style={[styles.amountText, {marginLeft: discount > 0 ? GlobalStyles.spacing.xs : 0}]}>{discount > 0 ? `$${amountWithDiscount.toFixed()}` : `$${amount.toFixed()}`}</Text>
                            </View>
                            <IconButton size="small" color={GlobalStyles.colors.white} icon="add"/>
                        </View>
                    </View>
                )
        }
    }, [type, title, discount, unit, amount]);

    return (
        <View>
            <Pressable onPress={onPress} style={({pressed}) => [styles.container, cardStyles, pressed && styles.pressed]}>
                {image && <Image source={image} resizeMode="cover" style={[styles.imageWrapper, imageStyle]} />}
                {cardContent}
            </Pressable>
        </View>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.bgPrimary,
        padding: GlobalStyles.spacing.xs,
        borderRadius: GlobalStyles.spacing.xs
    },
    imageWrapper: {
        borderRadius: GlobalStyles.spacing.xs,
        backgroundColor: GlobalStyles.colors.grey5
    },
    badge: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginTop: 4,
        marginBottom: GlobalStyles.spacing.xs,
    },
    title: {
        ...GlobalStyles.fontBold,
        fontSize: GlobalStyles.fontSize.callout,
        color: GlobalStyles.colors.labelsPrimary,
        marginBottom: GlobalStyles.spacing.xs
    },
    unit: {
        ...GlobalStyles.fontRegular,
        fontSize: GlobalStyles.fontSize.footnote,
        color: GlobalStyles.colors.labelsSecondary,
        marginBottom: 4,
    },
    amountBlockCol: {
        alignSelf: "flex-end"
    },
    row: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    discount: {
        ...GlobalStyles.fontRegular,
        fontSize: GlobalStyles.fontSize.footnote,
        color: GlobalStyles.colors.labelsSecondary,
        textDecorationLine: 'line-through',
        textAlign: "right"
    },
    amountText: {
        ...GlobalStyles.fontBold,
        fontSize: GlobalStyles.fontSize.title1,
        color: GlobalStyles.colors.labelsPrimary,
    },
    pressed: {
        opacity: 0.75
    }
})
