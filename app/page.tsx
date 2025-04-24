import {HeroBackground, HeroTitle} from "@/widgets/Home/Hero";
import {DevicesList} from "@/widgets/Home/Devices/DevicesList";

export default function Home() {
    return (
        <div>
            <div className='absolute inset-0 -z-20'>
                <HeroBackground/>
                <HeroTitle/>
                <DevicesList/>
            </div>
        </div>
    );
}
