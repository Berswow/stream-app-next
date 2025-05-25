import { FC, useState} from "react";
import {cn} from "@/shared/lib/utils";

import { Button } from "@/shared/ui/button";
import {Film, Search, Tv, User} from "lucide-react";
import {useSelector} from "react-redux";
import {Sheet, SheetContent, SheetTrigger} from "@/shared/ui/sheet";
import {selectSearchToggle, setSearchToggle} from "@/store/slices/uiSlice";
import {useAppDispatch} from "@/store/store";
import {MovieSearch} from "@/widgets/Search/MovieSearch";

type Props = {
    className?: string;
};

const filters = [
    { label: "Movies", value: "movie", icon: <Film className="w-4 h-4" /> },
    { label: "TV Shows", value: "tvShow", icon: <Tv className="w-4 h-4" /> },
    { label: "People", value: "person", icon: <User className="w-4 h-4" /> },
]

export const GlobalSearch: FC<Props> = ({className}) => {
    const dispatch = useAppDispatch()
    const [type, setType] = useState("movie")

    const modalState = useSelector(selectSearchToggle)

    return (
        <div className={cn("", className)}>
            <Sheet open={modalState} onOpenChange={() => dispatch(setSearchToggle(!modalState))}>
                <SheetTrigger asChild>
                    <Search className='cursor-pointer hover:text-red-600 transition-colors duration-300' size={30} />
                </SheetTrigger>

                {modalState && <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30" />}

                <SheetContent side="top"
                              className="flex flex-col items-center max-h-[100dvh] overflow-visible z-50 py-8 bg-neutral-800 border-none shadow-[0px_5px_10px_5px_#000000]">
                    <div className="flex flex-col items-center gap-4 w-[500px] px-4">
                        <div className="flex justify-between gap-5">
                            {filters.map((f) => (
                                <Button
                                    key={f.value}
                                    variant={type === f.value ? "default" : "outline"}
                                    onClick={() => setType(f.value)}
                                    className={type === f.value ? `flex items-center gap-1 text-sm shadow-[0px_5px_10px_5px_#000000] transition-shadow duration-300` : `flex items-center gap-1 text-sm hover:shadow-[0px_5px_10px_5px_#000000] transition-shadow duration-300`}
                                >
                                    {f.icon}
                                    {f.label}
                                </Button>
                            ))}
                        </div>
                        {type === 'movie' ? <MovieSearch className='w-full' type={type}/> : <h1>Coming soon</h1>}

                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};