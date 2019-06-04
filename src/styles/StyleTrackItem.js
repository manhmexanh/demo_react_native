import {StyleSheet} from 'react-native'

export const StyleTrackItem = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingRight: 16,
    },
    content: {
        paddingLeft: 24,
        paddingVertical: 12,
    },
    title: {
        fontSize: 15,
        paddingBottom: 2,
    },
    artist: {
        fontSize: 13,
        paddingTop: 2,
    },
    selected: {
        width: 5,
    },
});
