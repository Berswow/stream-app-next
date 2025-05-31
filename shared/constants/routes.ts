export const ROUTES = {
    // static

    HOME: '/',
    MOVIES_SHOWS: '/movies-shows',
    SUBSCRIPTIONS: '/subscriptions',
    SUPPORT: '/support',

    // dynamic

    MOVIE_DETAILED_SLUG: (id: number) => `/movies/${id}`,
    TVSHOW_DETAILED_SLUG: (id: number) => `/tvshows/${id}`,

    MOVIE_GENRE_SLUG: (genreSlug: string) => `/movies/genre/${genreSlug}`,
    TVSHOW_GENRE_SLUG: (genreSlug: string) => `/tvshows/genre/${genreSlug}`,
}