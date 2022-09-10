import axios from "axios";

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

type FetchPokemonParams = {
    search: string|number;
}

export async function fetchPokemon({search}: FetchPokemonParams): Promise<Pokemon> {
    try {
        const response = await api.get(`/pokemon/${search}`)

        return response.data;
    } catch (error) {
        console.error(error.request);
        return {} as Pokemon;
    }
}