import {MovieResponse} from "@/shared/types/Movie/MovieBaseInterface";
import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {useQuery} from "@tanstack/react-query";

type TimeWindow = 'day' | 'week'

const fetchTrendingMovies = async (time_window: TimeWindow = 'week'):Promise<MovieResponse> => {
    const response = await tmdbApi.get(`trending/movie/${time_window}`)
    return response.data
}

export const useGetTrendingMovies = (time_window: TimeWindow = 'week') => {
    return useQuery<MovieResponse, Error>({
        queryKey: ['trendingMovies', time_window],
        queryFn: () => fetchTrendingMovies(time_window)
    });
}