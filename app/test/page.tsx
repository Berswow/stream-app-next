"use client"

import {SheetFilter} from "@/shared/ui/components/sheet-filter";
import {DefaultCard} from "@/shared/ui/components/cards/default-card";
import {useGetDiscoverMovie} from "@/shared/hooks/apiHooks/movies/useDiscoverMovie";

export default function Test() {
    const {data} = useGetDiscoverMovie()
    const movieList = data?.results || []

    return (
        <div className='my-container flex flex-col gap-5'>
            <SheetFilter/>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
                {movieList.map(movie => (
                    <DefaultCard key={movie.id} item={movie} className='transition-transform duration-300 active:scale-95'/>
                ))}
            </div>
        </div>
    );
}
