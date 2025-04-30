import React, {FC} from "react";
import {cn} from "@/shared/lib/utils";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/shared/ui/table";
import {table} from "@/shared/lib/subscription-data";

type Props = {
    className?: string;
};

export const SubscriptionsTable: FC<Props> = ({className}) => {
    return (
        <div className={cn("", className)}>
            <div className='flex flex-col gap-15 2xl:gap-20'>
                <div className='flex flex-col gap-2.5 2xl:gap-3.5'>
                    <h2 className='font-bold text-4xl 2xl:text-5xl'>Compare our plans and find the right one for you</h2>
                    <div>
                        <p className='text-base text-neutral-500 2xl:text-lg'>StreamVibe offers three different plans to fit your needs:
                            Basic, Standard, and Premium. Compare
                            the features of each plan and choose the one that&#39;s right for you.</p>
                    </div>
                </div>


                <Table>
                    <TableHeader className='min-h-[75px] font-semibold text-lg bg-neutral-950 border 2xl:min-h-[90px] 2xl:text-xl'>
                        <TableRow>
                            <TableHead className='text-white border border-neutral-800 p-6 2xl:p-7.5'>Features</TableHead>
                            <TableHead className='text-white border border-neutral-800 p-6 2xl:p-7.5'>Basic</TableHead>
                            <TableHead className='text-white border border-neutral-800 p-6 2xl:p-7.5'>Standard</TableHead>
                            <TableHead className='text-white border border-neutral-800 p-6 2xl:p-7.5'>Premium</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className='font-medium text-base 2xl:text-lg'>
                        {table.map((item, i) => (
                            <TableRow className='min-h-[72px] 2xl:min-h-[87px]' key={i}>
                                <TableCell
                                    className='whitespace-normal break-words border border-neutral-800 p-6 text-neutral-500 2xl:p-7.5'>{item.name}</TableCell>
                                <TableCell
                                    className='whitespace-normal break-words border border-neutral-800 p-6 text-neutral-500 2xl:p-7.5'>{item.basic}</TableCell>
                                <TableCell
                                    className='whitespace-normal break-words border border-neutral-800 p-6 text-neutral-500 2xl:p-7.5'>{item.standard}</TableCell>
                                <TableCell
                                    className='whitespace-normal break-words border border-neutral-800 p-6 text-neutral-500 2xl:p-7.5'>{item.premium}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};