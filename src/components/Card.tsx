import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";
import { GhostButton } from "./GhostButton.";

export type TColors = "fuchsia" | "lime" | "cyan" | "violet";

export const Card = ({
    children,
    className,
    buttonText = "Learn More",
    color,
}: {
    color?: TColors;
    buttonText?: string;
} & ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={cn("group relative z-0 p-8 md:p-10", className)}>
            <div
                className={cn(
                    "absolute right-1.5 top-1.5 -z-10 size-16 rounded-2xl bg-fuchsia-500 opacity-0 blur-lg transition duration-300 group-hover:opacity-100",
                    color === "lime" && "bg-lime-500",
                    color === "cyan" && "bg-cyan-500",
                    color === "violet" && "bg-violet-500",
                )}
            ></div>
            <div
                className={cn(
                    "absolute right-1.5 top-1.5 -z-10 size-16 rounded-2xl bg-fuchsia-500 transition duration-300 group-hover:bg-fuchsia-400",
                    color === "lime" && "bg-lime-500 group-hover:bg-lime-400",
                    color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400",
                    color === "violet" &&
                        "bg-violet-500 group-hover:bg-violet-400",
                )}
            ></div>
            <div className="absolute inset-0 -z-10 rounded-2xl bg-zinc-800 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
            <div>{children}</div>
            <div className="mt-12 flex justify-between">
                <GhostButton
                    className={cn(
                        color === "lime" && "text-lime-500",
                        color === "cyan" && "text-cyan-500",
                        color === "violet" && "text-violet-500",
                    )}
                >
                    {buttonText}
                </GhostButton>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-8 -translate-x-2 text-zinc-500 transition duration-300 group-hover:translate-x-0 group-hover:text-zinc-300"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                </svg>
            </div>
        </div>
    );
};
