import {StyleSheet, View} from "react-native";
import {Calendar} from 'react-native-calendars';
import {FontAwesome} from "@expo/vector-icons";
import {useState} from "react";
import {COLORS, GlobalStyles} from "../constants";

const customTheme = {
    selectedDayBackgroundColor: COLORS.secondaryGreen,
    selectedDayTextColor: COLORS.primaryGreen,
    todayTextColor: COLORS.primaryGreen,
    textDayFontFamily: 'nunito-regular',
    textMonthFontFamily: 'nunito-semibold',
    textDayHeaderFontFamily: 'nunito-regular',
    textDayFontWeight: '400',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '600',
    textDayFontSize: 17,
    textMonthFontSize: 17,
    textDayHeaderFontSize: 13,
    'stylesheet.calendar.header': {
        dayHeader: {
            textTransform: "uppercase",
            fontSize: 13,
            color: COLORS.grey2,
            marginBottom: GlobalStyles.spacing.s
        }
    }
}

function CalendarScreen() {
    const [selectedDay, setSelectedDay] = useState(new Date().toISOString().slice(0, 10));

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Calendar
                    renderArrow={direction => <FontAwesome color={COLORS.primaryGreen} size={20} name={`angle-${direction}`}/>}
                    theme={customTheme}
                    markedDates={{
                        [selectedDay]: { selected: true },
                    }}
                    onDayPress={(day) => {
                        setSelectedDay(day.dateString)
                    }}
                />
            </View>
        </View>
    )
}

export default CalendarScreen;

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
    }
})
