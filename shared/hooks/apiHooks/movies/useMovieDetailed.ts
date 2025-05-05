import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {MovieDetailed} from "@/shared/types/Movie/MovieDetailInterface";
import {useQuery} from "@tanstack/react-query";

const fetchMovieDetailed = async (id: number): Promise<MovieDetailed> => {
    const response = await tmdbApi.get(`movie/${id}`)
    return response.data
}

export const useGetMovieDetailed = (id: number) => {
    return useQuery<MovieDetailed>({
        queryKey: ['movieDetailed', id],
        queryFn: () => fetchMovieDetailed(id),
        enabled: !isNaN(id) && id > 0
    })
}