import {Hero} from "@/widgets/MoviesTvShows/Hero/Hero";
import {ReviewsInfo} from "@/widgets/test/ReviewsInfo";
import {DescriptionInfo} from "@/widgets/test/DescriptionInfo";
import {DetailsInfo} from "@/widgets/test/DetailsInfo";
import {CastInfo} from "@/widgets/test/CastInfo";

export default function Test() {

    return (
        <>
            <Hero/>


            {/*  Content Grid  */}
            <div className="my-container flex flex-col gap-5 md:hidden">
                <DescriptionInfo/>
                <DetailsInfo/>
                <CastInfo/>
                <ReviewsInfo/>
            </div>

            <div className="my-container hidden md:flex flex-row justify-between gap-5">
                <div className='flex flex-col gap-5 w-2/3'>
                    <DescriptionInfo/>
                    <CastInfo/>
                    <ReviewsInfo/>
                </div>
                <div className='w-1/3'>
                    <DetailsInfo/>
                </div>
            </div>
        </>
    );
};