import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { colors } from "../../global/styles/colors";
import { Pokemon, PokemonType, Type } from "../../@types";

type PokeCardProps = {
    pokemon: Pokemon;
}

export function PokeCard({ pokemon }: PokeCardProps  ) {
    const type = pokemon.types.find((type: PokemonType) => type.slot === 1)?.type.name || "normal"
    const typeColor = colors.types[type];
    const stringfiedId = String(pokemon.id);

    return (
        <View style={[styles.card, {borderColor: typeColor}]}>
            <View style={styles.pokemonIdContainer}>
                <Text style={[styles.pokemonIdText, {color: typeColor}]}>#{stringfiedId.padStart(3, "0")}</Text>
            </View>
            <View style={styles.pokemonImageContainer}>
                <Image style={styles.pokemonImage} source={{uri: pokemon.officialArtwork}}/>
            </View>
            <View style={[styles.pokemonNameContainer, {backgroundColor: typeColor}]}>
                <Text style={styles.pokemonNameText}>{pokemon.name}</Text>
            </View>
        </View>
    );
}


