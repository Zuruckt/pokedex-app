import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, ScrollView, Dimensions, FlatList } from 'react-native';
import { Pokemon } from '../../@types';
import { PokeCard } from '../../components/PokeCard';
import { fetchPokemon } from '../../services/pokeapi';

export function Pokedex() {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    async function definePokemons() {
        const pokes = Promise.all(Array(20).fill(0).map((_, index) => {
            return fetchPokemon({search: index+1});
        })).then(pokemons => setPokemons(pokemons.filter(x => x.id)));    
    }

    useEffect(() => {
        definePokemons();
    }, []);
    

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
                <FlatList data={pokemons} numColumns={2} renderItem={({item}) => <PokeCard pokemon={item}/>}>

                </FlatList>
                {/* <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
                    {
                        pokemons.map((value: Pokemon, index: Number) => {
                            return (
                                <PokeCard key={index + 'card'} pokemon={value}/>
                            )
                        })
                    }
                </ScrollView> */}
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
