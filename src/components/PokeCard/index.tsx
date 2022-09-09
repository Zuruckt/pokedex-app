import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { colors } from "../../global/styles/colors";



export function PokeCard({ id, name, type, image }: Pokemon ) {
    const typeColor = colors.types[type || "normal"];

    return (
        <View style={[styles.card, {borderColor: typeColor}]}>
            <View style={styles.pokemonIdContainer}>
                <Text style={[styles.pokemonIdText, {color: typeColor}]}>#{id}</Text>
            </View>
            <View style={styles.pokemonImageContainer}>
                <Image style={styles.pokemonImage} source={{uri: image}}/>
            </View>
            <View style={[styles.pokemonNameContainer, {backgroundColor: typeColor}]}>
                <Text style={styles.pokemonNameText}>{name}</Text>
            </View>
        </View>
    );
}


