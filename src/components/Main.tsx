import React from "react";

interface MainProps {
    children: React.ReactNode;
    title: string
}
export function Main({ children, title }: MainProps) {
    return (
        <main className="max-w-screen-xl pb-3 pt-3 pl-3 pr-3">
            { children }
        </main>
    )
}