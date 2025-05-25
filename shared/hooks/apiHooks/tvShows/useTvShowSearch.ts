import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {useQuery} from "@tanstack/react-query";
import {TvShowResponse} from "@/shared/types/Show/TvShowBaseInterface";

const fetchTvShowSearch = async (query: string): Promise<TvShowResponse> => {
    const response = await tmdbApi.get('search/tv', {
        params: {
            query
        }
    })
    return response.data
};

export const useGetTvShowSearch = (query: string) => {
    return useQuery<TvShowResponse, Error>({
        queryKey: ['tvShowSearch', query],
        queryFn: () => fetchTvShowSearch(query)
    })
}