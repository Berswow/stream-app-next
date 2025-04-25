import React from "react";
import {cn} from "@/shared/lib/utils";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shared/ui/accordion";
import {HomeTitle} from "@/shared/ui/components/home-title";

type Props = {
    className?: string;
};

const faqData = [
    {
        id: 1,
        question: "What is CineStreamBox?",
        answer: "CineStreamBox is a streaming service that allows you to watch movies and shows on demand."
    },
    {
        id: 2,
        question: "How much does CineStreamBox cost?",
        answer: "CineStreamBox offers various pricing plans. Check our website for the latest details."
    },
    {
        id: 3,
        question: "What content is available on CineStreamBox?",
        answer: "You can watch a vast collection of movies, TV shows, and exclusive originals."
    },
    {
        id: 4,
        question: "How can I watch CineStreamBox?",
        answer: "CineStreamBox is available on web browsers, mobile apps, and smart TVs."
    },
    {
        id: 5,
        question: "How do I sign up for CineStreamBox?",
        answer: "Simply visit our website, choose a plan, and create an account."
    },
    {
        id: 6,
        question: "What is the CineStreamBox free trial?",
        answer: "New users can enjoy a 7-day free trial with access to all features."
    },
    {
        id: 7,
        question: "How do I contact CineStreamBox customer support?",
        answer: "You can reach us via email, live chat, or our help center."
    },
    {
        id: 8,
        question: "What are the CineStreamBox payment methods?",
        answer: "We accept credit cards, PayPal, and other online payment methods."
    },
];

export const FaqList: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("my-container", className)}>
            <HomeTitle
                title="Frequently Asked Questions"
                description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
            />

            <Accordion type="single" collapsible>
                <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-10 2xl:gap-x-20">
                    {faqData.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={`item-${item.id}`}
                            className="border-b-red-900 m-0 py-5"
                        >
                            <AccordionTrigger>
                                <div className="flex items-center gap-5">
                                    <div className="p-3 rounded-md bg-neutral-800">
                                        <p className="text-base font-semibold 2xl:text-xl">0{item.id}</p>
                                    </div>
                                    <h3 className="text-lg font-medium md:text-xl 2xl:text-2xl">{item.question}</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-neutral-500 text-sm font-normal md:text-base 2xl:text-lg">
                                    {item.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </div>
            </Accordion>
        </div>
    );
};
