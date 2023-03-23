import {StyleSheet, View} from "react-native";
import {GlobalStyles} from "../constants";
import ReviewItem, {IReviewItem} from "../components/ReviewItem";

const reviewData: IReviewItem = {
    username: 'Shoo Thar Mien',
    stars: 5,
    date: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor malesuada nulla, ac viverra libero eleifend eu. Cras sit amet aliquam erat, lacinia sollicitudin nisi. Vestibulum a lacinia magna.'
}

export default function ReviewScreen() {
    return (
        <View style={styles.container}>
            <ReviewItem {...reviewData} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: GlobalStyles.spacing.s
    }
})
