import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {useQuery} from "@tanstack/react-query";
import {MovieResponse} from "@/shared/types/Movie/MovieBaseInterface";

const fetchDiscoverMovie = async (): Promise<MovieResponse> => {
    const response = await tmdbApi.get('discover/movie', {
        params: {
            year: 2000,
        }
    })
    return response.data
};

export const useGetDiscoverMovie = () => {
    return useQuery<MovieResponse, Error>({
        queryKey: ['discoverMovie'],
        queryFn: () => fetchDiscoverMovie()
    })
}