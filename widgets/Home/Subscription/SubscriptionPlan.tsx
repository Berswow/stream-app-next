import React from "react";
import {cn} from "@/shared/lib/utils";
import {HomeTitle} from "@/shared/ui/components/home-title";
import {SubscriptionCard} from "@/shared/ui/components/subscription-card";

type Props = {
    className?: string;
};

const plansData = [
    {id: 1, plan: 'Basic Plan', description: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.', monthlyPrice: 9.99, annualPrice: 90.99},
    {id: 2, plan: 'Standard Plan', description: 'Access to a wider selection of movies and shows, including most new releases and exclusive content', monthlyPrice: 12.99, annualPrice: 120.99},
    {id: 3, plan: 'Premium Plan', description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing', monthlyPrice: 14.99, annualPrice: 140.99}
]

export const SubscriptionPlan: React.FC<Props> = ({className}) => {
    return (
        <div className={cn("my-container", className)}>
            <HomeTitle
                title="Choose the plan that's right for you"
                description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
            />
            <div className='flex flex-col gap-5 xl:flex-row justify-between 2xl:gap-7.5'>
                {plansData.map((plan) => (
                    <SubscriptionCard key={plan.id} className='flex-1' plan={plan.plan} description={plan.description} monthlyPrice={plan.monthlyPrice}/>
                ))}
            </div>
        </div>
    );
};