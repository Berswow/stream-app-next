import { tmdbApi } from "@/shared/lib/api/tmdbApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import {TvShowResponse} from "@/shared/types/Show/TvShowBaseInterface";
import {DiscoverTvShowParams} from "@/shared/types/Show/DiscoverTvShowParamsInterface";

const fetchDiscoverTvShow = async ({
                                      pageParam,
                                      queryParams,
                                  }: {
    pageParam: number;
    queryParams: DiscoverTvShowParams;
}): Promise<TvShowResponse> => {
    const response = await tmdbApi.get('discover/tv', {
        params: {
            ...queryParams,
            page: pageParam,
        },
    });
    return response.data;
};

export const useInfiniteDiscoverTvShow = (queryParams: DiscoverTvShowParams) => {
    return useInfiniteQuery({
        queryKey: ['discoverTvShow', queryParams],
        queryFn: ({ pageParam }) =>
            fetchDiscoverTvShow({ pageParam: pageParam as number, queryParams }),
        getNextPageParam: (lastPage) => {
            return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
        },
        initialPageParam: 1,
    });
};
