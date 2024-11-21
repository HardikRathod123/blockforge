import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export const Circle = ({
    className,
    children,
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={cn(
                "inline-flex size-[240px] items-center justify-center rounded-full bg-zinc-900 outline -outline-offset-[6px] outline-fuchsia-500/10",
                className,
            )}
        >
            {children}
        </div>
    );
};
