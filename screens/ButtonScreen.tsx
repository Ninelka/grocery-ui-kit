import Button from "../components/Button";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {COLORS, GlobalStyles} from "../constants";

function ButtonScreen() {

    return (
        <ScrollView
            contentContainerStyle={{paddingVertical: 16}}
        >
            <View style={styles.container}>
                {/* Primary Rectangle*/}
                <View style={styles.item}>
                    <Button size="large" iconLeft="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Rectangle</Text>
                        <Text style={styles.label}>Size: Large</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button iconRight="checkmark" isCentered={false}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Rectangle</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                        <Text style={styles.label}>isCentered: false</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button size="small" isCentered={false}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Rectangle</Text>
                        <Text style={styles.label}>Size: Small</Text>
                        <Text style={styles.label}>isCentered: false</Text>
                    </View>
                </View>
                {/* Primary Rectangle Disabled*/}
                <View style={styles.item}>
                    <Button size="large" iconLeft="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Rectangle</Text>
                        <Text style={styles.label}>Size: Large</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button iconRight="checkmark" isCentered={false} isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Rectangle</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                        <Text style={styles.label}>isCentered: false</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button size="small" isCentered={false} isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Rectangle</Text>
                        <Text style={styles.label}>Size: Small</Text>
                        <Text style={styles.label}>isCentered: false</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                {/* Secondary Rectangle */}
                <View style={styles.item}>
                    <Button size="large" type="secondary" iconLeft="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Rectangle</Text>
                        <Text style={styles.label}>Size: Large</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button type="secondary" iconRight="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Rectangle</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button size="small" type="secondary" iconLeft="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Rectangle</Text>
                        <Text style={styles.label}>Size: Small</Text>
                    </View>
                </View>
                {/* Secondary Rectangle Disabled */}
                <View style={styles.item}>
                    <Button size="large" type="secondary" iconLeft="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Rectangle</Text>
                        <Text style={styles.label}>Size: Large</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button type="secondary" iconRight="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Rectangle</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button size="small" type="secondary" iconLeft="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Rectangle</Text>
                        <Text style={styles.label}>Size: Small</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                {/* Primary Rounded*/}
                <View style={styles.item}>
                    <Button size="large" shape="rounded" iconLeft="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Rounded</Text>
                        <Text style={styles.label}>Size: Large</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button shape="rounded" iconRight="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Rounded</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button size="small" shape="rounded" iconLeft="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Rounded</Text>
                        <Text style={styles.label}>Size: Small</Text>
                    </View>
                </View>
                {/* Primary Rounded Disabled*/}
                <View style={styles.item}>
                    <Button size="large" shape="rounded" iconLeft="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Rounded</Text>
                        <Text style={styles.label}>Size: Large</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button shape="rounded" iconRight="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Rounded</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button size="small" shape="rounded" iconLeft="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Rounded</Text>
                        <Text style={styles.label}>Size: Small</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                {/* Secondary Rounded */}
                <View style={styles.item}>
                    <Button size="large" type="secondary" shape="rounded" iconLeft="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Rounded</Text>
                        <Text style={styles.label}>Size: Large</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button type="secondary" shape="rounded" iconRight="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Rounded</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button size="small" type="secondary" shape="rounded" iconLeft="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Rounded</Text>
                        <Text style={styles.label}>Size: Small</Text>
                    </View>
                </View>
                {/* Secondary Rounded Disabled */}
                <View style={styles.item}>
                    <Button size="large" type="secondary" shape="rounded" iconLeft="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Rounded</Text>
                        <Text style={styles.label}>Size: Large</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button type="secondary" shape="rounded" iconRight="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Rounded</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button size="small" type="secondary" shape="rounded" iconLeft="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Rounded</Text>
                        <Text style={styles.label}>Size: Small</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                {/* Primary Ellipse */}
                <View style={styles.item}>
                    <Button size="large" type="primary" shape="ellipse" iconLeft="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Ellipse</Text>
                        <Text style={styles.label}>Size: Large</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button type="primary" shape="ellipse" iconRight="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Ellipse</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button size="small" type="primary" shape="ellipse" iconLeft="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Ellipse</Text>
                        <Text style={styles.label}>Size: Small</Text>
                    </View>
                </View>
                {/* Primary Ellipse Disabled */}
                <View style={styles.item}>
                    <Button size="large" type="primary" shape="ellipse" iconLeft="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Ellipse</Text>
                        <Text style={styles.label}>Size: Large</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button type="primary" shape="ellipse" iconRight="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Ellipse</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button size="small" type="primary" shape="ellipse" iconLeft="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Primary</Text>
                        <Text style={styles.label}>Shape: Ellipse</Text>
                        <Text style={styles.label}>Size: Small</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                {/* Secondary Ellipse */}
                <View style={styles.item}>
                    <Button size="large" type="secondary" shape="ellipse" iconLeft="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Ellipse</Text>
                        <Text style={styles.label}>Size: Large</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button type="secondary" shape="ellipse" iconRight="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Ellipse</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button size="small" type="secondary" shape="ellipse" iconLeft="checkmark">Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Ellipse</Text>
                        <Text style={styles.label}>Size: Small</Text>
                    </View>
                </View>
                {/* Secondary Ellipse Disabled */}
                <View style={styles.item}>
                    <Button size="large" type="secondary" shape="ellipse" iconLeft="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Ellipse</Text>
                        <Text style={styles.label}>Size: Large</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button type="secondary" shape="ellipse" iconRight="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Ellipse</Text>
                        <Text style={styles.label}>Size: Medium</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Button size="small" type="secondary" shape="ellipse" iconLeft="checkmark" isDisabled={true}>Learn More</Button>
                    <View>
                        <Text style={styles.label}>Type: Secondary</Text>
                        <Text style={styles.label}>Shape: Ellipse</Text>
                        <Text style={styles.label}>Size: Small</Text>
                        <Text style={styles.label}>isDisabled: true</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ButtonScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: GlobalStyles.spacing.m
    },
    label: {
        marginBottom: GlobalStyles.spacing.xs
    },
    item: {
        width: '100%',
        paddingVertical: GlobalStyles.spacing.s,
        paddingHorizontal: GlobalStyles.spacing.m,
        marginVertical: GlobalStyles.spacing.xs,
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        backgroundColor: COLORS.bgPrimary,
        borderRadius: 16
    }
})
