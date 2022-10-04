import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApolloClient, InMemoryCache, gql, ApolloQueryResult } from '@apollo/client';
import { useFonts } from 'expo-font';
import { 
  Poppins_400Regular as PoppinsRegular,
  Poppins_700Bold as PoppinsBold,
} from '@expo-google-fonts/poppins';

import { Pokedex } from './src/screens/Pokedex';
import { Pokemon } from './src/@types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': PoppinsRegular,
    'Poppins-Bold': PoppinsBold,
  });

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function populateDatabase() {

    const storedPokemons = await AsyncStorage.getItem("pokemons");

    console.log(storedPokemons);
    const retrievedPokemons: Pokemon[] = storedPokemons ? JSON.parse(storedPokemons) : [];

    if(!retrievedPokemons?.length) {
      const client = new ApolloClient({
        uri: 'https://beta.pokeapi.co/graphql/v1beta',
        cache: new InMemoryCache(),
      }); 
  
      client.query({
        query: gql`
          query GetPokemons {
            pokemon: pokemon_v2_pokemon(limit: 1000) {
              id
              name
              types: pokemon_v2_pokemontypes {
                id
                slot
                type: pokemon_v2_type {
                  name
                }
              }
            }
          }
        `
      }).then((response: ApolloQueryResult<any>) => {
        const data = response.data.pokemon.map((pokemon: any): Pokemon => {
          return {
            ...pokemon, 
            officialArtwork: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`};
        }) as Pokemon[];
      
        AsyncStorage.setItem("pokemons", JSON.stringify(data));
        setPokemons(data);
      })
    } else {
      setPokemons(retrievedPokemons);
    }
  }

  useEffect(() => {
    populateDatabase();
  }, [])

  if (!fontsLoaded) {
    return null;
  }
  
  return <Pokedex pokemons={pokemons} />;
}