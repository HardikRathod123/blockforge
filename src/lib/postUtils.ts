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

export const getColorFromPositionType = (
    type: CollectionEntry<"positions">["data"]["type"],
): TColors => {
    switch (type) {
        case "Full Time":
            return "lime";
        case "Part Time":
            return "cyan";
        case "Internship":
            return "cyan";
        case "Contract":
            return "violet";
        default:
            return "fuchsia";
    }
};

export const getColorFromPositionCategory = (
    type: CollectionEntry<"positions">["data"]["category"],
): TColors => {
    switch (type) {
        case "Engineering":
            return "lime";
        case "Product":
            return "cyan";
        case "Marketing":
            return "violet";
        default:
            return "fuchsia";
    }
};
