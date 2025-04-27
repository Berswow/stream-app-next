import {ReactNode} from "react";

interface TvShowsLayoutProps {
    children: ReactNode;
}

export default function TvShowsLayout({children}: TvShowsLayoutProps) {
    return (
        <div>
            <section>{children}</section>
        </div>
    )
}