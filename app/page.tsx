import {HeroBackground, HeroTitle} from "@/widgets/Home/Hero";

export default function Home() {
    return (
        <div>
            <div className='absolute inset-0 -z-20'>
                <HeroBackground/>
                <HeroTitle/>
            </div>
        </div>
    );
}
