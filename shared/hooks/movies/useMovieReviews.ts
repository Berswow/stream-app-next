import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {ReviewsResponse} from "@/shared/types/ReviewInterface";
import {useQuery} from "@tanstack/react-query";

const fetchMovieReviews = async (id: number): Promise<ReviewsResponse> => {
    const response = await tmdbApi.get(`movie/${id}/reviews`)
    return response.data
};

export const useGetMovieReviews = (id: number) => {
    return useQuery<ReviewsResponse, Error>({
        queryKey: ['movieReviews', id],
        queryFn: () => fetchMovieReviews(id),
        enabled: !isNaN(id) && id > 0
    });
}