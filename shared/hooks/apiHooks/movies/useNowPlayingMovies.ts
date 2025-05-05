import {MovieResponse} from "@/shared/types/Movie/MovieBaseInterface";
import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {useQuery} from "@tanstack/react-query";

const fetchNowPlayingMovies = async (page: number = 1): Promise<MovieResponse> => {
    const response = await tmdbApi.get('movie/now_playing', {
        params: { page }
    })
    return response.data
};

export const useGetNowPlayingMovies = (page: number = 1) => {
    return useQuery<MovieResponse>({
        queryKey: ['nowPlayingMovies', page],
        queryFn: () => fetchNowPlayingMovies(page)
    })
}