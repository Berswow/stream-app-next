import {HeroBackground, HeroTitle} from "@/widgets/Home/Hero";
import {DevicesList} from "@/widgets/Home/Devices/DevicesList";
import {FaqList} from "@/widgets/Home/Faq/FaqList";
import {SubscriptionPlan} from "@/widgets/Home/Subscription/SubscriptionPlan";
import React from "react";

export default function Home() {
    return (
        <div>
            <div className='relative -mt-23 -z-20'>
                <HeroBackground/>
                <HeroTitle/>
            </div>
            <div>
                <DevicesList/>
                <FaqList/>
                <SubscriptionPlan/>
            </div>
        </div>
    );
}
