import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {useQuery} from "@tanstack/react-query";
import {TvShowDetailed} from "@/shared/types/Show/TvShowDetailInterface";

const fetchTvShowDetailed = async (id: number): Promise<TvShowDetailed> => {
    const response = await tmdbApi.get(`tv/${id}`)
    return response.data
}

export const useGetTvShowDetailed = (id: number) => {
    return useQuery<TvShowDetailed>({
        queryKey: ['tvShowDetailed', id],
        queryFn: () => fetchTvShowDetailed(id),
        enabled: !isNaN(id) && id > 0
    })
}