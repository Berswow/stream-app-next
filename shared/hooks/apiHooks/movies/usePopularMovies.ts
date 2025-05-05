import { tmdbApi } from "@/shared/lib/api/tmdbApi";
import { useQuery } from "@tanstack/react-query";
import {MovieResponse} from "@/shared/types/Movie/MovieBaseInterface";

const fetchPopularMovies = async (page: number = 1): Promise<MovieResponse> => {
    const response = await tmdbApi.get('movie/popular', {
        params: { page }
    });
    return response.data;
};

export const useGetPopularMovies = (page: number = 1) => {
    return useQuery<MovieResponse, Error>({
        queryKey: ['popularMovies', page],
        queryFn: () => fetchPopularMovies(page)
    });
};