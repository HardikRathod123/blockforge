import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";
import type { TColors } from "./Card";

export const Tag = ({
    children,
    className,
    color = "fuchsia",
}: { color?: TColors } & ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={cn(
                "inline-flex rounded-full bg-fuchsia-500/15 px-3 py-1.5 font-heading text-xs font-extrabold uppercase tracking-wider text-fuchsia-500",
                color === "cyan" && "bg-cyan-500/15 text-cyan-500",
                color === "violet" && "bg-violet-500/15 text-violet-500",
                color === "lime" && "bg-lime-500/15 text-lime-500",
                className,
            )}
        >
            {children}
        </div>
    );
};
