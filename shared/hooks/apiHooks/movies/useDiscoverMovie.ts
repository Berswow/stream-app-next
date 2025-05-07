import { tmdbApi } from "@/shared/lib/api/tmdbApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieResponse } from "@/shared/types/Movie/MovieBaseInterface";
import { DiscoverMovieParams } from "@/shared/types/Movie/DiscoverMovieParamsInterface";

const fetchDiscoverMovie = async ({
                                      pageParam,
                                      queryParams,
                                  }: {
    pageParam: number;
    queryParams: DiscoverMovieParams;
}): Promise<MovieResponse> => {
    const response = await tmdbApi.get('discover/movie', {
        params: {
            ...queryParams,
            page: pageParam,
        },
    });
    return response.data;
};

export const useInfiniteDiscoverMovie = (queryParams: DiscoverMovieParams) => {
    return useInfiniteQuery({
        queryKey: ['discoverMovie', queryParams],
        queryFn: ({ pageParam }) =>
            fetchDiscoverMovie({ pageParam: pageParam as number, queryParams }),
        getNextPageParam: (lastPage) => {
            return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
        },
        initialPageParam: 1,
    });
};
