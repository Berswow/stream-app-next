export interface DiscoverMovieParams {
    page?: number;
    language?: string;
    region?: string;

    sort_by?:
        | "popularity.asc"
        | "popularity.desc"
        | "release_date.asc"
        | "release_date.desc"
        | "revenue.asc"
        | "revenue.desc"
        | "primary_release_date.asc"
        | "primary_release_date.desc"
        | "original_title.asc"
        | "original_title.desc"
        | "vote_average.asc"
        | "vote_average.desc"
        | "vote_count.asc"
        | "vote_count.desc";

    certification?: string;
    certification_country?: string;
    certification_gte?: string;
    certification_lte?: string;

    include_adult?: boolean;
    include_video?: boolean;
    primary_release_year?: number;
    primary_release_date_gte?: string;
    primary_release_date_lte?: string;
    release_date_gte?: string;
    release_date_lte?: string;

    vote_average_gte?: number;
    vote_average_lte?: number;
    vote_count_gte?: number;
    vote_count_lte?: number;

    with_genres?: string;
    without_genres?: string;

    with_runtime_gte?: number;
    with_runtime_lte?: number;

    with_original_language?: string;
    with_origin_country?: string;

    with_release_type?: string;

    with_cast?: string;
    with_crew?: string;
    with_people?: string;
    with_companies?: string;
    without_companies?: string;

    with_keywords?: string;
    without_keywords?: string;

    with_watch_providers?: string;
    without_watch_providers?: string;
    with_watch_monetization_types?: "flatrate" | "free" | "ads" | "rent" | "buy";
    watch_region?: string;

    year?: number;
}
