import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getFileName = (src: string) => {
    const filename = src
        .split("/")
        .pop()
        ?.replace(".png", "")
        .replace(".jpg", "");
    if (!filename) return "";

    const capitalizedFilename =
        filename.charAt(0).toLocaleUpperCase() + filename.slice(1);
    return capitalizedFilename;
};
