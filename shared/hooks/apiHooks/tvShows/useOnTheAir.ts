import {TvShowResponse} from "@/shared/types/Show/TvShowBaseInterface";
import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {useQuery} from "@tanstack/react-query";

const fetchOnTheAir = async (page: number = 1): Promise<TvShowResponse> => {
    const response = await tmdbApi.get('tv/on_the_air', {
        params: { page }
    })
    return response.data
};

export const useGetOnTheAir = (page: number = 1) => {
    return useQuery<TvShowResponse>({
        queryKey: ['onTheAir', page],
        queryFn: () => fetchOnTheAir(page)
    })
}