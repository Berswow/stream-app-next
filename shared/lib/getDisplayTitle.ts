import { MovieDetailed } from "@/shared/types/Movie/MovieDetailInterface";
import { TvShowDetailed } from "@/shared/types/Show/TvShowDetailInterface";

const isMovie = (item: MovieDetailed | TvShowDetailed): item is MovieDetailed => {
    return (item as MovieDetailed).title !== undefined;
};

export const getDisplayTitle = (item?: MovieDetailed | TvShowDetailed): string => {
    if (item && isMovie(item)) {
        return item.title;
    }
    return item?.name || "No title";
};