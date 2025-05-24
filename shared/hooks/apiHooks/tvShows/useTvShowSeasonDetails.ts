import {SeasonDetails} from "@/shared/types/Show/TvShowSeasonDetailed";
import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {useQuery} from "@tanstack/react-query";

const fetchTvShowSeasonDetails = async (tvShowId: number, seasonId: number): Promise<SeasonDetails> => {
    const response = await tmdbApi.get(`tv/${tvShowId}/season/${seasonId}`)
    return response.data
};

export const useGetTvShowSeasonDetails = (tvShowId: number, seasonId: number) => {
    return useQuery<SeasonDetails>({
        queryKey: ['tvShowSeasonDetails', tvShowId, seasonId],
        queryFn: () => fetchTvShowSeasonDetails(tvShowId, seasonId)
    })
}