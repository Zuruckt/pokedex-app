import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { colors } from "../../global/styles/colors";

type PokeCardProps = {
    pokemon: Pokemon;
}

export function PokeCard({ pokemon }: PokeCardProps  ) {
    const typeColor = colors.types[pokemon.types[0].type.name || "normal"];

    return (
        <View style={[styles.card, {borderColor: typeColor}]}>
            <View style={styles.pokemonIdContainer}>
                <Text style={[styles.pokemonIdText, {color: typeColor}]}>#{pokemon.id}</Text>
            </View>
            <View style={styles.pokemonImageContainer}>
                <Image style={styles.pokemonImage} source={{uri: pokemon.sprites.other['official-artwork'].front_default}}/>
            </View>
            <View style={[styles.pokemonNameContainer, {backgroundColor: typeColor}]}>
                <Text style={styles.pokemonNameText}>{pokemon.name}</Text>
            </View>
        </View>
    );
}


