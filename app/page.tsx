import {HeroBackground, HeroTitle} from "@/widgets/Home/Hero";
import {DevicesList} from "@/widgets/Home/Devices/DevicesList";
import {FaqList} from "@/widgets/Home/Faq/FaqList";
import {SubscriptionPlan} from "@/widgets/Home/Subscription/SubscriptionPlan";
import {Cta} from "@/widgets/CTA/Cta";
import React from "react";
import {Footer} from "@/widgets/Footer/Footer";

export default function Home() {
    return (
        <div>
            <div className='absolute inset-0 -z-20'>
                <HeroBackground/>
                <HeroTitle/>
                <div>
                    <DevicesList/>
                    <FaqList/>
                    <SubscriptionPlan/>
                    <Cta/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
