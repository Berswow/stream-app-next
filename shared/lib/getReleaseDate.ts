import { MovieDetailed } from "@/shared/types/Movie/MovieDetailInterface";
import { TvShowDetailed } from "@/shared/types/Show/TvShowDetailInterface";

export const getReleaseDate = (item: MovieDetailed | TvShowDetailed): string | undefined => {
    if ("release_date" in item) {
        return item.release_date;
    }
    if ("first_air_date" in item) {
        return item.first_air_date;
    }
    return undefined;
};