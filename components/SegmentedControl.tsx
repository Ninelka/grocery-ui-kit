import {FlatList, StyleSheet, View} from "react-native";
import Segment from "./Segment";
import {COLORS} from "../constants";

interface ISegmentedControl {
    segments: string[],
    activeItem: string,
    onPress,
    transparent?: boolean
}

function SegmentedControl({segments, activeItem, onPress, transparent}: ISegmentedControl) {
    const separator = () => {
        return (
            <View style={[
                styles.separator, transparent && styles.transparentSeparator
            ]}></View>
        )
    }

    return (
        <FlatList
            style={[styles.container, transparent && styles.transparentContainer]}
            keyExtractor={item => item}
            data={segments}
            renderItem={({item}) => {
                return (
                    <Segment transparent={transparent} item={item} isActive={item === activeItem} onPress={onPress}/>
                )
            }}
            ItemSeparatorComponent={separator}
            extraData={activeItem}
            horizontal={true}
        />
    )
}

export default SegmentedControl;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.fillsTertiary,
        paddingVertical: 2,
        paddingHorizontal: 3,
        borderRadius: 8,
    },
    transparentContainer: {
        backgroundColor: "transparent"
    },
    separator: {
        margin: 6,
        width: 1,
        backgroundColor: COLORS.separatorOpaque
    },
    transparentSeparator: {
        marginHorizontal: 4,
        backgroundColor: "transparent"
    }
})
