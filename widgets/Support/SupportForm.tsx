import {FC} from "react";
import {cn} from "@/shared/lib/utils";
import {Card, CardContent} from "@/shared/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Textarea } from "@/shared/ui/textarea";
import {toast} from "sonner";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

type Props = {
    className?: string;
};

const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    phoneNumber: z.coerce.number().refine(val => val > 0, {
        message: "Phone number must be a valid number",
    }),
    message: z.string().min(5).max(100),
})

export const SupportForm: FC<Props> = ({className}) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: undefined,
            message: ""
        }
    })

    const handleOnSubmit = (data: z.infer<typeof formSchema>) => {
        toast("Support message sent!");
    }

    return (
        <div className={cn("", className)}>
            <Card className='h-auto bg-neutral-950 rounded-2xl border-neutral-800 p-6 lg:p-10 2xl:p-12.5'>
                <CardContent className='p-0'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleOnSubmit)} className="text-white">
                            <div className='flex flex-col gap-5 lg:gap-10 2xl:gap-12.5'>

                                <div className='flex flex-col gap-5 lg:flex-row 2xl:gap-12.5'>
                                    <FormField control={form.control} name="firstName" render={({field}) => (
                                        <FormItem className='flex flex-col gap-3 w-full 2xl:gap-4'>
                                            <FormLabel className='text-base font-semibold 2xl:text-lg'>First Name</FormLabel>
                                            <FormControl className='h-[53px] bg-secondary 2xl:h-[67px]'>
                                                <Input className='border-neutral-800' placeholder="John"  {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                    <FormField control={form.control} name="lastName" render={({field}) => (
                                        <FormItem className='flex flex-col gap-3 w-full 2xl:gap-4'>
                                            <FormLabel className='text-base font-semibold 2xl:text-lg'>Last Name</FormLabel>
                                            <FormControl className='h-[53px] bg-secondary 2xl:h-[67px]'>
                                                <Input className='border-neutral-800' placeholder="Doe" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                </div>


                                <div className='flex flex-col gap-5 lg:flex-row 2xl:gap-12.5'>
                                    <FormField control={form.control} name="email" render={({field}) => (
                                        <FormItem className='flex flex-col gap-3 w-full 2xl:gap-4'>
                                            <FormLabel className='text-base font-semibold 2xl:text-lg'>Email</FormLabel>
                                            <FormControl className='h-[53px]  bg-secondary 2xl:h-[67px]'>
                                                <Input className='border-neutral-800' placeholder="example@mail.com" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                    <FormField control={form.control} name="phoneNumber" render={({field}) => (
                                        <FormItem className='flex flex-col gap-3 w-full 2xl:gap-4'>
                                            <FormLabel className='text-base font-semibold 2xl:text-lg'>Phone Number</FormLabel>
                                            <FormControl className='h-[53px] bg-secondary 2xl:h-[67px]'>
                                                <Input className='border-neutral-800' placeholder="+1234567890" type="tel" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                </div>

                                <FormField control={form.control} name="message" render={({field}) => (
                                    <FormItem className='flex flex-col gap-3 w-full 2xl:gap-4'>
                                        <FormLabel className='text-base font-semibold 2xl:text-lg'>Message</FormLabel>
                                        <FormControl className='h-[53px] bg-secondary'>
                                            <Textarea className='h-[109px] resize-none border-neutral-800 lg:h-[129px] 2xl:h-[163px]' placeholder="Your message..." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}/>

                                <div className='flex flex-col items-center gap-5 lg:flex-row lg:justify-between'>
                                    <div className='flex gap-2 items-center 2xl:gap-2.5'>
                                        <Checkbox className='w-[24px] h-[24px] border-neutral-800 2xl:w-[28px] 2xl:h-[28px]'/><span className='text-base text-neutral-500 2xl:text-lg'>I agree with Terms of Use and Privacy Policy</span>
                                    </div>
                                    <Button type="submit" className="h-[49px] w-full lg:w-auto 2xl:h-[63px]">Send Message</Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};