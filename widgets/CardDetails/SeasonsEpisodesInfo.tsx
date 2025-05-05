import {FC} from "react";
import {cn} from "@/shared/lib/utils";

type Props = {
    className?: string;
};

export const SeasonsEpisodesInfo: FC<Props> = ({className}) => {
    return (
        <div className={cn("", className)}>
            <h1>SeasonsEpisodesInfo</h1>
        </div>
    );
};