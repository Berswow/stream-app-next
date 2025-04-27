import {ReactNode} from "react";

interface MoviesLayoutProps {
    children: ReactNode;
}

export default function MoviesLayout({children}: MoviesLayoutProps) {
    return (
        <div>
            <section>{children}</section>
        </div>
    )
}