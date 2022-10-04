import { useState } from 'react';
import { Text, TextInput, View, FlatList, ActivityIndicator } from 'react-native';

import { Pokemon } from '../../@types';
import { PokeCard } from '../../components/PokeCard';

import { styles } from "./styles";

type Props = {
    pokemons: Pokemon[];
    isLoading?: boolean;
}

export function Pokedex({ pokemons, isLoading }: Props) {
    const [search, setSearch] = useState("");

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
