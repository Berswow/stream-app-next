import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {Genre} from "@/shared/types/GenreInterface";
import {useQuery} from "@tanstack/react-query";

const fetchGenre = async (type: "movie" | "tv"): Promise<Genre> => {
    const response = await tmdbApi.get(`genre/${type}/list`)
    return response.data
}

export const useGetGenre = (type: "movie" | "tv") => {
    return useQuery<Genre, Error>({
        queryKey: ['genre', type],
        queryFn: () => fetchGenre(type)
    })
}