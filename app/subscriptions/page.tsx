import {SubscriptionsMobile} from "@/widgets/Subscriptions/SubscriptionsMobile";
import {SubscriptionsTable} from "@/widgets/Subscriptions/SubscriptionsTable";

export default function Subscriptions() {
    return (
        <div className='my-container'>
            <SubscriptionsMobile className='lg:hidden'/>
            <SubscriptionsTable className='hidden lg:block'/>
        </div>
    );
};