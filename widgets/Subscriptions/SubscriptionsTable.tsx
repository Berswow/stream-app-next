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
            <div className='flex flex-col gap-20'>
                <div className='flex justify-between items-center gap-24'>
                    <div className='flex flex-col gap-3.5'>
                        <h2>Compare our plans and find the right one for you</h2>
                        <p style={{color: "var(--grey-60)"}}>CineStreamBox offers three different plans to fit your needs:
                            Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right
                            for you.</p>
                    </div>
                </div>
                <Table className='border border-neutral-700'>
                    <TableHeader className='h-[90px] text-[20px] bg-neutral-950 border border-neutral-700'>
                        <TableRow className='border border-neutral-700'>
                            <TableHead className='text-white border border-neutral-700 p-7.5'>Features</TableHead>
                            <TableHead className='text-white border border-neutral-700 p-7.5'>Basic</TableHead>
                            <TableHead className='text-white border border-neutral-700 p-7.5'>Standard</TableHead>
                            <TableHead className='text-white border border-neutral-700 p-7.5'>Premium</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className='text-[20px]'>
                        {table.map((item, i) => (
                            <TableRow className='h-[90px]' key={i}>
                                <TableCell
                                    className='whitespace-normal break-words border border-neutral-700 p-7.5 text-neutral-400'>{item.name}</TableCell>
                                <TableCell
                                    className='whitespace-normal break-words border border-neutral-700 p-7.5 text-neutral-400'>{item.basic}</TableCell>
                                <TableCell
                                    className='whitespace-normal break-words border border-neutral-700 p-7.5 text-neutral-400'>{item.standard}</TableCell>
                                <TableCell
                                    className='whitespace-normal break-words border border-neutral-700 p-7.5 text-neutral-400'>{item.premium}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};