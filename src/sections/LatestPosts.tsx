import { Card, type TColors } from "@/components/Card";
import { CutCornerButton } from "@/components/CutCornerButton";
import { Tag } from "@/components/Tag";
import { getPostColorFromCategory } from "@/lib/postUtils";
import type { CollectionEntry } from "astro:content";

const colors: TColors[] = ["fuchsia", "cyan", "violet", "lime"];

export const LatestPosts = ({
    latestPosts,
}: {
    latestPosts: CollectionEntry<"blog">[];
}) => {
    return (
        <section className="py-60">
            <div className="container">
                <h2 className="text-center font-heading text-4xl font-black">
                    Your portal to everything blockchain.
                </h2>
                <p className="mt-8 text-center text-xl text-zinc-400">
                    Keep up with the newest trends, updates, and insights in the
                    blockchain world, updated weekly.
                </p>
                <div className="mt-16 flex flex-col gap-8">
                    {latestPosts.map(
                        ({ data: { title, category, description } }, index) => (
                            <Card
                                key={title}
                                color={getPostColorFromCategory(category)}
                                buttonText="Read more"
                            >
                                <Tag color={getPostColorFromCategory(category)}>
                                    {category}
                                </Tag>
                                <h3 className="mt-3 font-heading text-3xl font-black">
                                    {title}
                                </h3>
                                <p className="mt-6 text-lg text-zinc-400">
                                    {description}
                                </p>
                            </Card>
                        ),
                    )}
                </div>
                <div className="mt-48 flex justify-center">
                    <CutCornerButton>Read the blog</CutCornerButton>
                </div>
            </div>
        </section>
    );
};
