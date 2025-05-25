import {ChangeEvent, FC, useMemo, useState} from "react";
import {cn} from "@/shared/lib/utils";

import {Search} from "lucide-react";
import {useSelector} from "react-redux";
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
    type: string;
};

export const MovieSearch: FC<Props> = ({className, type}) => {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useAppDispatch()

    const modalState = useSelector(selectSearchToggle)

    const debouncedSearch = useDebounce(searchValue, 500);

    const {data, isLoading, error} = useGetMovieSearch(debouncedSearch);

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
                {modalState && <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30"/>}
                    <div className="flex flex-col items-center gap-4 w-[500px] px-4">
                        <div className='flex items-center gap-3 self-start w-full'>
                            <Search size={30}/>
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
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: -10}}
                                    transition={{duration: 0.2}}
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
                                                <Search size={15}/> {result.title}
                                                <span>({formatDateToYear(result.release_date)})</span>
                                            </li>
                                        </Link>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
        </div>
    );
};