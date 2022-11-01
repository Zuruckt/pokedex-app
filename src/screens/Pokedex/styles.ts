import { StyleSheet, StatusBar, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: StatusBar.currentHeight,
        maxHeight: Dimensions.get('screen').height
    },
    navbar: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    brand: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        marginRight: 10,
        width: 50,
        height: 50,
        backgroundColor: '#000',
    },
    title: {
        fontFamily: 'Poppins-Bold',
        color: '#212121',
        fontSize: 40,
    },
    controlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    controlsText: {
        fontSize: 25,
        marginRight: 5
    },
    controlsIcon: {
        width: 15,
        height: 30,
        color: 'red'
    },
    searchContainer: {
        marginTop: 20,
        width: '100%',
    },
    searchInput: {
        height: 40,
        borderRadius: 20,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        textAlignVertical: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        marginTop: 10,
        flex: 1,
        width: '100%',
        justifyContent: "center"
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
});