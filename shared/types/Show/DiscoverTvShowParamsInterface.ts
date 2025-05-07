export interface DiscoverTvShowParams {
    air_date_gte?: string;
    air_date_lte?: string;
    first_air_date_year?: number;
    first_air_date_gte?: string;
    first_air_date_lte?: string;
    include_adult?: boolean;
    include_null_first_air_dates?: boolean;
    language?: string;
    page?: number;
    screened_theatrically?: boolean;

    sort_by?: string;

    timezone?: string;
    vote_average_gte?: number;
    vote_average_lte?: number;
    vote_count_gte?: number;
    vote_count_lte?: number;

    watch_region?: string;

    with_companies?: string;
    with_genres?: string;
    with_keywords?: string;
    with_networks?: string;
    with_origin_country?: string;
    with_original_language?: string;

    with_runtime_gte?: number;
    with_runtime_lte?: number;

    with_status?: string;

    with_watch_monetization_types?: string;
    with_watch_providers?: string;
    without_companies?: string;
    without_genres?: string;
    without_keywords?: string;
    without_watch_providers?: string;

    with_type?: string;
}