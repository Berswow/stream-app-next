import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {MovieResponse} from "@/shared/types/Movie/MovieBaseInterface";
import {useQuery} from "@tanstack/react-query";

const fetchMovieSearch = async (query: string): Promise<MovieResponse> => {
    const response = await tmdbApi.get('search/movie', {
        params: {
            query
        }
    })
    return response.data
};

export const useGetMovieSearch = (query: string) => {
    return useQuery<MovieResponse, Error>({
        queryKey: ['movieSearch', query],
        queryFn: () => fetchMovieSearch(query)
    })
}