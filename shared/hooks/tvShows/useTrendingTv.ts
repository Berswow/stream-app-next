import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {useQuery} from "@tanstack/react-query";
import {TvShowResponse} from "@/shared/types/Show/TvShowBaseInterface";

type TimeWindow = 'day' | 'week'

const fetchTrendingTv = async (time_window: TimeWindow = 'week'):Promise<TvShowResponse> => {
    const response = await tmdbApi.get(`trending/tv/${time_window}`)
    return response.data
}

export const useGetTrendingTv = (time_window: TimeWindow = 'week') => {
    return useQuery<TvShowResponse, Error>({
        queryKey: ['trendingTvShows', time_window],
        queryFn: () => fetchTrendingTv(time_window)
    });
}