import React from "react";

interface MainProps {
    children: React.ReactNode;
    title: string
}
export function Main({ children, title }: MainProps) {
    return (
        <main className="max-w-screen-xl mr-auto ml-auto pb-3 pt-3 pl-3 pr-3 flex flex-col gap-3">
            { children }
        </main>
    )
}