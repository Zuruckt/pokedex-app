import { useState } from 'react';
import { Text, TextInput, View, FlatList, ActivityIndicator, Image } from 'react-native';

import { Pokemon } from '../../@types';
import { PokeCard } from '../../components/PokeCard';

import { AntDesign } from '@expo/vector-icons'; 
import { styles } from "./styles";

type Props = {
    pokemons: Pokemon[];
    isLoading?: boolean;
}

enum SortBy {
    Id = 1,
    Name = 2,
}

export function Pokedex({ pokemons, isLoading }: Props) {
    const [search, setSearch] = useState("");

    const [sortDirection, setSortDirection] = useState(0);
    const [sortBy, setSortBy] = useState(SortBy.Id)

    function getSortByText() {
        switch(sortBy) {
            case SortBy.Id:
                return <Text>#</Text>;
            case SortBy.Name:
                return (<View style={styles.controlsText}>
                        <Text>A</Text>
                        <Text>Z</Text>
                    </View>
                );
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.brand}>
                    <View style={styles.logo}></View>
                    <Text style={styles.title}>Pokédex</Text>
                </View>
                <View style={styles.controlsContainer}>
                    <>
                        {getSortByText()}
                        <AntDesign name={sortDirection == 0 ? "arrowup" : "arrowdown"} size={24} color="black" onPress={() => setSortDirection(Number(!sortDirection))}/>
                    </>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} defaultValue="" placeholder="Procurar" selectionColor="#808080" onChangeText={setSearch}></TextInput>
            </View>
            <View style={styles.scrollContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#808080" />
                ) : (
                    <FlatList data={search ? pokemons.filter(pokemon => pokemon.name.includes(search) || pokemon.id.toString().includes(search)) : pokemons} numColumns={2} renderItem={({item}) => <PokeCard pokemon={item}/>} />
                )}
            </View>
        </View>
    );
}
