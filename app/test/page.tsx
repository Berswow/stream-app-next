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

            <div className="my-container flex flex-col gap-5">
                <DescriptionInfo/>
                <DetailsInfo/>
                <CastInfo/>
                <ReviewsInfo/>
            </div>
        </>
    );
};