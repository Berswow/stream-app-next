import {ChangeEvent, FC, useMemo, useState} from "react";
import {cn} from "@/shared/lib/utils";

import { Button } from "@/shared/ui/button";
import {Film, Search, Tv, User} from "lucide-react";
import {useSelector} from "react-redux";
import {Sheet, SheetContent, SheetTrigger} from "@/shared/ui/sheet";
import {Input} from "@/shared/ui/input";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {selectSearchToggle, setSearchToggle} from "@/store/slices/uiSlice";
import {useDebounce} from "@/shared/hooks/useDebounce";
import {useGetMovieSearch} from "@/shared/hooks/apiHooks/movies/useMovieSearch";
import {useAppDispatch} from "@/store/store";
import {formatDateToYear} from "@/shared/lib/formatDate";

type Props = {
    className?: string;
};

const filters = [
    { label: "Movies", value: "movie", icon: <Film className="w-4 h-4" /> },
    { label: "TV Shows", value: "tv", icon: <Tv className="w-4 h-4" /> },
    { label: "People", value: "person", icon: <User className="w-4 h-4" /> },
]

export const GlobalSearch: FC<Props> = ({className}) => {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useAppDispatch()
    const [type, setType] = useState("movie")

    const modalState = useSelector(selectSearchToggle)

    const debouncedSearch = useDebounce(searchValue, 500);

    const { data, isLoading, error } = useGetMovieSearch(debouncedSearch);

    const searchResults = useMemo(() => data?.results.slice(0, 5) || [], [data]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleResultClick = () => {
        dispatch(setSearchToggle(!modalState));
        setSearchValue("");
    };

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

                        <div className='flex items-center gap-3 self-start w-full'>
                            <Search size={30} />
                            <Input
                                value={searchValue}
                                onChange={handleSearch}
                                placeholder={`Search ${type}...`}
                                className="self-start h-14 font-bold border-none"
                            />
                        </div>

                        {isLoading && (
                            <div className="text-white mt-4">Loading...</div>
                        )}

                        {error && (
                            <div className="text-red-500 mt-4">Error</div>
                        )}

                        <AnimatePresence>
                            {searchResults.length > 0 && !isLoading && !error && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex flex-col gap-3 py-2 self-start"
                                >
                                    {searchResults.map((result) => (
                                        <Link
                                            href={`/movies/${result.id}`}
                                            onClick={handleResultClick}
                                            key={result.id}
                                        >
                                            <li
                                                className="flex items-center gap-2 p-3 text-nowrap cursor-pointer rounded-xl hover:shadow-[0px_5px_10px_5px_#000000] transition-shadow duration-300"
                                            >
                                                <Search size={15} /> {result.title} <span>({formatDateToYear(result.release_date)})</span>
                                            </li>
                                        </Link>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};