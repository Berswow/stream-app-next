import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {useQuery} from "@tanstack/react-query";
import {CastMember, CreditsResponse, CrewMember} from "@/shared/types/CreditsInterface";

export interface ParsedCreditsResponse {
    cast: CastMember[];
    crew: {
        directors: CrewMember[];
        producers: CrewMember[];
    };
}

const fetchTvShowCast = async (id: number): Promise<CreditsResponse> => {
    const response = await tmdbApi.get(`tv/${id}/credits`)
    return response.data
}

export const useGetTvShowCast = (id: number) => {
    return useQuery<ParsedCreditsResponse, Error>({
        queryKey: ['tvShowCast', id],
        queryFn: async () => {
            const data = await fetchTvShowCast(id)
            const directors = data.crew.filter(
                (member) => member.job === 'Director'
            );
            const producers = data.crew.filter(
                (member) => member.job === 'Producer'
            );
            return {
                cast: data.cast,
                crew: {
                    directors,
                    producers
                }
            }
        },
        enabled: !isNaN(id) && id > 0
    })
}