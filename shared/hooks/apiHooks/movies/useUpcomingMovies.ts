import {MovieResponse} from "@/shared/types/Movie/MovieBaseInterface";
import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {useQuery} from "@tanstack/react-query";

const fetchUpcomingMovie = async (page: number = 1): Promise<MovieResponse> => {
    const response = await tmdbApi.get('movie/upcoming', {
        params: { page }
    })
    return response.data
};

export const useGetUpcomingMovies = (page: number = 1) => {
    return useQuery<MovieResponse>({
        queryKey: ['upcomingMovies', page],
        queryFn: () => fetchUpcomingMovie(page)
    })
}