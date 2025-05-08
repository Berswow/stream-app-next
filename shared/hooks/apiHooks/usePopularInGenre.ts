import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {DiscoverMovieParams} from "@/shared/types/Movie/DiscoverMovieParamsInterface";
import {MovieInterface, MovieResponse} from "@/shared/types/Movie/MovieBaseInterface";
import {useQuery} from "@tanstack/react-query";
import {TvShowInterface, TvShowResponse} from "@/shared/types/Show/TvShowBaseInterface";
import {DiscoverTvShowParams} from "@/shared/types/Show/DiscoverTvShowParamsInterface";

type Type = "movie" | "tv";

type ParamsByType = {
    movie: DiscoverMovieParams;
    tv: DiscoverTvShowParams;
};

type ResponseByType = {
    movie: MovieResponse;
    tv: TvShowResponse;
};

type ItemByType = {
    movie: MovieInterface;
    tv: TvShowInterface;
};

export const useGetPopularInGenre = <T extends Type>(
    type: T,
    params: ParamsByType[T]
) => {
    return useQuery<ItemByType[T][], Error>({
        queryKey: ['popularInGenre', type, params],
        queryFn: async () => {
            const response = await tmdbApi.get<ResponseByType[T]>(`discover/${type}`, {
                params,
            });
            const dataWithPosters = response.data.results.filter(
                (item): item is ItemByType[T] => item.poster_path !== null
            );
            return dataWithPosters.slice(0, 4);
        },
    });
};