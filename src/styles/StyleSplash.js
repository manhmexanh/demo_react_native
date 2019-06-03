import {StyleSheet} from 'react-native'
import {WIDTH_FULL} from "../common/Constants";

export const ColorSplash = [
    "#ffb802",
    "#ff9901",
    "#ff5c1b",
    "#ff4d31",
    "#ff2035",
    "#ff1530"
];
export const StyleSplash = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0277BD"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
    ring: {
        backgroundColor: "#FFF",
        borderRadius: 150,
        borderWidth: 2,
        borderColor: "#FFF",
        padding: 7
    },
    starStyle: {
        width: 100,
        height: 20,
        marginBottom: 20
    },
    line: {
        position: "absolute",
        bottom: 20,
        width: WIDTH_FULL / 2,
        height: 4,
        backgroundColor: "#fff",
        borderRadius: 2
    }
});