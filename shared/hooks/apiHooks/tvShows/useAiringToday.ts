import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {TvShowResponse} from "@/shared/types/Show/TvShowBaseInterface";
import {useQuery} from "@tanstack/react-query";

const fetchAiringToday = async (page: number = 1): Promise<TvShowResponse> => {
    const response = await tmdbApi.get('tv/airing_today', {
        params: { page }
    })
    return response.data
};

export const useGetAiringToday = (page: number = 1) => {
    return useQuery<TvShowResponse>({
        queryKey: ['airingToday', page],
        queryFn: () => fetchAiringToday(page)
    })
}