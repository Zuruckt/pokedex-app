import { StyleSheet, Text, TextInput, View, StatusBar, ScrollView, Dimensions } from 'react-native';
import { PokeCard } from '../../components/PokeCard';

export function Pokedex() {

    const pokemons: Pokemon[] = [
    {
        id:
        name:
        type: "rock",
    },
    {
        id:
        name:
        type: "ghost",
    },
    {
        id:
        name:
        type: "steel",
    },
    {
        id:
        name:
        type: "water",
    },
    {
        id:
        name:
        type: "grass",
    },
    {
        id:
        name:
        type: "psychic",
    },
    {
        id:
        name:
        type: "ice",
    },
    {
        id:
        name:
        type: "dark",
    },
    {
        id:
        name:
        type: "fairy",
    },
    {
        id:
        name:
        type: "normal",
    },
    {
        id:
        name:
        type: "fighting",
    },
    {
        id:
        name:
        type: "flying",
    },
    {
        id:
        name:
        type: "poison",
    },
    {
        id:
        name:
        type: "ground",
    },
    {
        id:
        name:
        type: "bug",
    },
    {
        id:
        name:
        type: "fire",
    },
    {
        id:
        name:
        type: "electric",
    },
    {
        id:
        name:
        type: "dragon"],
    };

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.brand}>
                    <View style={styles.logo}></View>
                    <Text style={styles.title}>Pokédex</Text>
                </View>
                <View style={styles.controlsContainer}>
                    <Text style={styles.controlsText}>#</Text>
                    <View style={styles.controlsIcon}></View>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} defaultValue="" placeholder="Procurar" selectionColor="#808080"></TextInput>
            </View>
            <View style={styles.scrollContainer}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
                    {
                        types.map((value, index: Number) => {
                            return (
                                <PokeCard key={index + 'card'} type={value}/>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        backgroundColor: '#000'
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
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
});
