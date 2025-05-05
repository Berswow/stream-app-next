import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {ReviewsResponse} from "@/shared/types/ReviewInterface";
import {useQuery} from "@tanstack/react-query";

const fetchReviews = async (type: "movie" | "tv", id: number) => {
    const response = await tmdbApi.get(`/${type}/${id}/reviews`)
    return response.data
};

export const useGetReviews = (type: "movie" | "tv", id: number) => {
    return useQuery<ReviewsResponse, Error>({
        queryKey: ["reviews", type, id],
        queryFn: () => fetchReviews(type, id),
        enabled: Number.isFinite(id) && id > 0
    });
}