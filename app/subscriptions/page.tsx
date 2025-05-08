import {SubscriptionsMobile} from "@/widgets/Subscriptions/SubscriptionsMobile";
import {SubscriptionsTable} from "@/widgets/Subscriptions/SubscriptionsTable";

export default function Subscriptions() {
    return (
        <div className='my-container mt-30 sm:mt-35 md:mt-40 lg:mt-45 2xl:mt-50'>
            <SubscriptionsMobile className='lg:hidden'/>
            <SubscriptionsTable className='hidden lg:block'/>
        </div>
    );
};