import axios, { AxiosError } from "axios";
import { NamedAPIResourceList, Pokemon } from "../@types";

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
    } catch (error: AxiosError | any) {
        console.error(error.request);
        return {} as Pokemon;
    }
}

type FetchAllPokemonProps = {
    offset?: number;
    limit?: number;
};

export async function fetchAllPokemons({offset = 20, limit = 20 }: FetchAllPokemonProps): Promise<NamedAPIResourceList> {
    try {
        const response = await api.get('/pokemon', {
            params: {
                offset,
                 limit
                }
            }
        );
        return response.data;
    } catch (error: AxiosError | any) {
        return {} as NamedAPIResourceList
    }
}
