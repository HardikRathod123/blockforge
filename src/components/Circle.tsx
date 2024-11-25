import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

export const Circle = ({
    className,
    children,
    animate = false,
}: { animate?: boolean } & ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={cn(
                "inline-flex size-[240px] items-center justify-center rounded-full bg-zinc-900",
                className,
            )}
        >
            <motion.div
                animate={animate && { rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className={cn(
                    "absolute inset-0 rounded-full border-[6px] border-transparent outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10",
                    animate && "border-t-fuchsia-500/30",
                )}
            ></motion.div>
            {children}
        </div>
    );
};
