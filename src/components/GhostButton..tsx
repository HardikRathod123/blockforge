import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export const GhostButton = ({
    children,
    className,
}: ComponentPropsWithoutRef<"button">) => {
    return (
        <button
            className={cn(
                "font-heading text-sm font-extrabold uppercase tracking-wider text-fuchsia-500",
                className,
            )}
        >
            {children}
        </button>
    );
};
