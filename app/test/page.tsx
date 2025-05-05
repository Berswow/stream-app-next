"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/shared/ui/sheet";
import {SlidersHorizontal} from "lucide-react";
import {Button} from "@/shared/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/shared/ui/carousel";
import {Card, CardContent} from "@/shared/ui/card";
import {MOVIE_GENRES} from "@/shared/constants/genres";
import {useState} from "react";
import {cn} from "@/shared/lib/utils";

export default function Test() {
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

    const toggleGenre = (id: number) => {
        setSelectedGenres((prev) =>
            prev.includes(id) ? prev.filter((genreId) => genreId !== id) : [...prev, id]
        );
    };

    return (
        <div className='my-container'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className='flex gap-1 items-center bg-neutral-500'>
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

                    <Carousel opts={{align: "start"}} className="w-full mt-4">
                        <CarouselContent>
                            {MOVIE_GENRES.map((genre) => {
                                const isSelected = selectedGenres.includes(genre.id);
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
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </SheetContent>
            </Sheet>
        </div>
    );
}
