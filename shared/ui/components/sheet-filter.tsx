import {FC} from "react";
import {cn} from "@/shared/lib/utils";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/shared/ui/sheet";
import {Button} from "@/shared/ui/button";
import {SlidersHorizontal} from "lucide-react";
import {Carousel, CarouselContent, CarouselItem} from "@/shared/ui/carousel";
import {Card, CardContent} from "@/shared/ui/card";
import {useSelector} from "react-redux";
import {
    selectGenres, selectYear,
    setAddGenres, setYear,
    setDeleteGenres, setDeleteYear
} from "@/store/slices/filterSlice";
import {useAppDispatch} from "@/store/store";
import {useGetGenre} from "@/shared/hooks/apiHooks/useGenre";
import {YEARS} from "@/shared/constants/years";

type Props = {
    className?: string;
    itemType: 'movie' | 'tv'
};

export const SheetFilter: FC<Props> = ({className, itemType}) => {
    const {data} = useGetGenre(itemType)
    const genreList = data?.genres ?? []


    const dispatch = useAppDispatch()

    const genres = useSelector(selectGenres)
    const currentYear = useSelector(selectYear)

    const toggleGenre = (id: number) => {
        if (genres.includes(id)) {
            dispatch(setDeleteGenres(id))
        } else {
            dispatch(setAddGenres(id))
        }
    };

    const toggleYears = (selectedYear: number) => {
        if (currentYear === selectedYear) {
            dispatch(setDeleteYear())
        } else {
            dispatch(setYear(selectedYear))
        }
    };

    return (
        <div className={cn("", className)}>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className='flex gap-1 items-center bg-primary'>
                        <SlidersHorizontal size={17}/>
                        <p className='text-lg font-semibold'>Filters</p>
                    </Button>
                </SheetTrigger>
                <SheetContent side='top' className='h-screen'>
                    <SheetHeader>
                        <SheetTitle>Select genres</SheetTitle>
                        <SheetDescription>
                            Choose the genres you want to see:
                        </SheetDescription>
                    </SheetHeader>

                    {/*  Genres carousel */}
                    <Carousel opts={{align: "start", dragFree: true}} className="w-full mt-4">
                        <CarouselContent>
                            {genreList.map((genre) => {
                                const isSelected = genres.includes(genre.id);
                                return (
                                    <CarouselItem
                                        key={genre.id}
                                        className="min-w-0 basis-1/3 md:basis-1/4 lg:basis-1/6"
                                    >
                                        <Card
                                            onClick={() => toggleGenre(genre.id)}
                                            className={cn(
                                                "flex justify-center items-center cursor-pointer h-17 transition-colors py-6 border",
                                                isSelected
                                                    ? "bg-neutral-200 dark:bg-neutral-800 border-neutral-900 dark:border-primary"
                                                    : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                            )}
                                        >
                                            <CardContent className="flex items-center justify-center">
                                                <span className="text-sm font-medium text-center">
                                                    {genre.name}
                                                </span>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>

                    {/*  Year carousel */}
                    <Carousel opts={{align: "start", dragFree: true}} className="w-full mt-4">
                        <CarouselContent>
                            {YEARS.map((year) => {
                                const isSelected = year === currentYear;
                                return (
                                    <CarouselItem
                                        key={year}
                                        className="min-w-0 basis-1/5 md:basis-1/4 lg:basis-1/6"
                                    >
                                        <Card
                                            onClick={() => toggleYears(year)}
                                            className={cn(
                                                "flex justify-center items-center cursor-pointer h-0 transition-colors py-6 border",
                                                isSelected
                                                    ? "bg-neutral-200 dark:bg-neutral-800 border-neutral-900 dark:border-primary"
                                                    : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                            )}
                                        >
                                            <CardContent className="flex items-center justify-center">
                                                <span className="text-sm font-medium text-center">
                                                    {year}
                                                </span>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>
                </SheetContent>
            </Sheet>
        </div>
    );
};