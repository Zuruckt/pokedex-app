import { StyleSheet } from "react-native";
import { colors } from "../../global/styles/colors";

export const styles = StyleSheet.create({
    card: {
        width: "43.7%",
        height: 175,
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 8,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    pokemonIdContainer: {
        width: "100%",
        maxHeight: "10.38%"
    },
    pokemonIdText: {
        alignSelf: "flex-end",
        paddingHorizontal: 10,
    },
    pokemonImageContainer: {
        width: "100%",
        justifyContent: 'center',
        alignItems: "center"
    },
    pokemonImage: {
        height: "69.23%",
        width: "69.23%",
    },
    pokemonNameContainer: {
        height: "20%",
        width: "100%",
        alignItems: "center",
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        zIndex: 10000,
    },
    pokemonNameText: {
        height: '100%',
        color: colors.white,
        textAlignVertical: "center",
    }
});
