import { MovieDetailed } from "@/shared/types/Movie/MovieDetailInterface";
import { TvShowDetailed } from "@/shared/types/Show/TvShowDetailInterface";
import {MovieInterface} from "@/shared/types/Movie/MovieBaseInterface";
import {TvShowInterface} from "@/shared/types/Show/TvShowBaseInterface";

const isMovieDefault = (item: MovieInterface | TvShowInterface): item is MovieInterface => {
    return (item as MovieInterface).title !== undefined;
};

const isMovieDetailed = (item: MovieDetailed | TvShowDetailed): item is MovieDetailed => {
    return (item as MovieDetailed).title !== undefined;
};



export const getDisplayTitleDefault = (item?: MovieInterface | TvShowInterface): string => {
    if (item && isMovieDefault(item)) {
        return item.title;
    }
    return item?.name || "No title";
};

export const getDisplayTitleDetailed = (item?: MovieDetailed | TvShowDetailed): string => {
    if (item && isMovieDetailed(item)) {
        return item.title;
    }
    return item?.name || "No title";
};