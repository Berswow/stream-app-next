import {tmdbApi} from "@/shared/lib/api/tmdbApi";
import {useQuery} from "@tanstack/react-query";
import {PeopleResponse} from "@/shared/types/Person/PersonBaseInterface";

const fetchPersonSearch = async (query: string): Promise<PeopleResponse> => {
    const response = await tmdbApi.get('search/person', {
        params: {
            query
        }
    })
    return response.data
};

export const useGetPersonSearch = (query: string) => {
    return useQuery<PeopleResponse>({
        queryKey: ['personSearch', query],
        queryFn: () => fetchPersonSearch(query)
    })
}