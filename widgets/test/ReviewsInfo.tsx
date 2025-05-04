import { FC } from "react";
import { cn } from "@/shared/lib/utils";
import { useGetMovieReviews } from "@/shared/hooks/movies/useMovieReviews";
import { Skeleton } from "@/shared/ui/skeleton";
import useEmblaCarousel from "embla-carousel-react";

type Props = {
    className?: string;
    movieId: number;
};

export const ReviewsInfo: FC<Props> = ({ className, movieId }) => {
    const [emblaRef] = useEmblaCarousel({align: "start"});

    const { data, isLoading } = useGetMovieReviews(movieId);
    const reviewsList = data?.results ?? [];

    return (
        <div
            className={cn(
                "flex flex-col gap-2 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-800 lg:p-10 lg:gap-2.5 2xl:p-12.5 2xl:gap-3.5",
                className
            )}
        >
            <h4 className="font-medium text-sm text-neutral-500 lg:text-base 2xl:text-lg">
                Reviews
            </h4>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex flex-col gap-4 lg:flex-row 2xl:gap-5">
                    {isLoading ? (
                        [...new Array(2)].map((_, i) => (
                            <Skeleton
                                key={i}
                                className="w-full lg:min-w-[50%] lg:shrink-0 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-900 lg:p-7.5 2xl:p-10"
                            />
                        ))
                    ) : reviewsList.length ? (
                        reviewsList.map((review) => (
                            <div
                                key={review.id}
                                className="w-full flex flex-col gap-4 p-6 rounded-2xl border-neutral-700 border-1 bg-neutral-900 lg:basis-1/2 lg:shrink-0 lg:p-7.5 2xl:p-10"
                            >
                                <div className="flex justify-between items-center">
                                    <p className="font-medium lg:text-lg 2xl:text-xl">{review.author}</p>
                                    <p className="text-yellow-300 font-medium text-sm lg:text-base 2xl:text-lg">
                                        {review.author_details.rating ?? "–"}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500 lg:text-base 2xl:text-lg line-clamp-3">
                                        {review.content}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-neutral-500 text-sm lg:text-base">No reviews yet.</p>
                    )}
                </div>
            </div>

        </div>
    );
};
