import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import { useQuery } from "@tanstack/react-query";
import {VideoInterface} from "@/shared/types/VideoInterface";

interface TMDBResponse<T> {
    results: T[];
}

const fetchMovieTrailer = async (movieId: number): Promise<TMDBResponse<VideoInterface>> => {
    const response = await tmdbApi.get(`movie/${movieId}/videos`)
    return response.data
}

export const useGetMovieTrailer = (movieId: number) => {
    return useQuery<string | null, Error>({
        queryKey: ['movieTrailer', movieId],
        queryFn: async () => {
            const data = await fetchMovieTrailer(movieId);
            const trailer = data.results.find(
                (v) => v.type === 'Trailer' && v.site === 'YouTube'
            );
            return trailer?.key ?? null;
        }
    });
}