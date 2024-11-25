import { Card, type TColors } from "@/components/Card";
import { CutCornerButton } from "@/components/CutCornerButton";
import { Tag } from "@/components/Tag";
import { getPostColorFromCategory } from "@/lib/postUtils";
import { cn } from "@/lib/utils";
import type { CollectionEntry } from "astro:content";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const colors: TColors[] = ["fuchsia", "cyan", "violet", "lime"];

export const LatestPosts = ({
    latestPosts,
}: {
    latestPosts: CollectionEntry<"blog">[];
}) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "start center"],
    });
    const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);
    return (
        <section className="py-60">
            <div className="container">
                <h2 className="text-center font-heading text-4xl font-black md:text-5xl lg:text-6xl">
                    Your portal to everything blockchain.
                </h2>
                <p className="mx-auto mt-8 max-w-3xl text-center text-xl text-zinc-400 lg:text-2xl">
                    Keep up with the newest trends, updates, and insights in the
                    blockchain world, updated weekly.
                </p>
                <div className="mt-16 grid grid-cols-1 gap-8 md:mt-28 md:grid-cols-2">
                    <div className="flex flex-col gap-8">
                        {latestPosts.map(
                            (
                                { data: { title, category, description } },
                                index,
                            ) => (
                                <Card
                                    key={title}
                                    color={getPostColorFromCategory(category)}
                                    buttonText="Read more"
                                    className={cn(
                                        index % 2 === 1 && "md:hidden",
                                    )}
                                >
                                    <Tag
                                        color={getPostColorFromCategory(
                                            category,
                                        )}
                                    >
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
                    <motion.div
                        className="mt-16 hidden flex-col gap-8 md:flex"
                        ref={targetRef}
                        style={{ marginTop }}
                    >
                        {latestPosts.map(
                            (
                                { data: { title, category, description } },
                                index,
                            ) => (
                                <Card
                                    key={title}
                                    color={getPostColorFromCategory(category)}
                                    buttonText="Read more"
                                    className={cn(
                                        index % 2 === 0 && "md:hidden",
                                    )}
                                >
                                    <Tag
                                        color={getPostColorFromCategory(
                                            category,
                                        )}
                                    >
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
                    </motion.div>
                </div>
                <div className="mt-48 flex justify-center md:mt-32">
                    <CutCornerButton>Read the blog</CutCornerButton>
                </div>
            </div>
        </section>
    );
};
