import type { TColors } from "@/components/Card";
import type { CollectionEntry } from "astro:content";

export const getPostColorFromCategory = (
    category: CollectionEntry<"blog">["data"]["category"],
): TColors => {
    switch (category) {
        case "Technology":
            return "fuchsia";
        case "Innovation":
            return "cyan";
        case "Security":
            return "violet";
        case "Sustainability":
            return "lime";
        default:
            return "fuchsia";
    }
};
