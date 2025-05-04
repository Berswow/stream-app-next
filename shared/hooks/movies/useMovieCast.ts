import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {useQuery} from "@tanstack/react-query";
import {CastMember, CreditsResponse, CrewMember} from "@/shared/types/Movie/MovieCreditsInterface";

export interface ParsedCreditsResponse {
    cast: CastMember[];
    crew: {
        directors: CrewMember[];
        producers: CrewMember[];
    };
}

const fetchMovieCast = async (id: number): Promise<CreditsResponse> => {
    const response = await tmdbApi.get(`movie/${id}/credits`)
    return response.data
}

export const useGetMovieCast = (id: number) => {
    return useQuery<ParsedCreditsResponse, Error>({
        queryKey: ['movieCast', id],
        queryFn: async () => {
            const data = await fetchMovieCast(id)
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