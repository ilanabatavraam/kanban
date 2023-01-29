import React from "react";

interface TasksProps {
    children: React.ReactNode;
    title: string
}
export function Tasks({ children, title }: TasksProps) {
    return (
            <section className="flex gap-2">
                {children}
                {children}
                {children}
                {children}
            </section>
        )
}