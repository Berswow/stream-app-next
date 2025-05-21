import { tmdbApi } from "@/shared/lib/api/tmdbApi";
import { useQuery } from "@tanstack/react-query";
import { TrailerResponse } from "@/shared/types/TrailerInterface";

const fetchTrailer = async (type: 'movie' | 'tv', id: number): Promise<string | null> => {
    const response = await tmdbApi.get<TrailerResponse>(`/${type}/${id}/videos`);
    const trailer = response.data.results.find(
        (v) => v.type === 'Trailer' && v.site === 'YouTube'
    );
    return trailer?.key ?? null;
};

export const useGetTrailer = (type: 'movie' | 'tv', id: number) => {
    return useQuery<string | null, Error>({
        queryKey: ['trailer', type, id],
        queryFn: () => fetchTrailer(type, id),
        enabled: Number.isFinite(id) && id > 0,
    });
};