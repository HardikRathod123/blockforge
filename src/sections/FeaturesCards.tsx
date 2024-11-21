import { cn } from "@/lib/utils";

const cardsData = [
    {
        image: "/public/assets/images/pill.png",
        color: "fuchsia",
        title: "Revolutionary Blockchain API",
        description:
            "Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless connectivity.",
    },
    {
        image: "/public/assets/images/cuboid.png",
        color: "lime",
        title: "Decentralized data solutions",
        description:
            "Unlock the potential of decentralized data solutions with our innovative tools and services.",
    },
    {
        image: "/public/assets/images/cone.png",
        color: "cyan",
        title: "Next-gen smart contracts",
        description:
            "Create and deploy next-generation smart contracts with our powerful and intuitive platform.",
    },
    {
        image: "/public/assets/images/icosahedron.png",
        color: "violet ",
        title: "Seamless blockchain integration",
        description:
            "Seamlessly integrate blockchain technology into your existing systems with our powerful tools.",
    },
];
export const FeaturesCards = () => {
    return (
        <section className="py-24 md:-mt-28">
            <div className="container overflow-x-clip">
                <h2 className="text-center font-heading text-4xl font-black md:text-5xl lg:text-6xl">
                    Discover the future of blockchain with Blockforge.
                </h2>
                <div className="mt-36 flex lg:mt-48">
                    <div className="flex flex-none gap-8">
                        {cardsData.map(
                            ({ title, image, color, description }, index) => (
                                <div
                                    className="group relative z-0 max-w-xs p-8 md:max-w-md md:p-10"
                                    key={title}
                                >
                                    <div
                                        className={cn(
                                            "absolute right-1.5 top-1.5 -z-10 size-16 rounded-2xl bg-fuchsia-500 opacity-0 blur-lg transition duration-300 group-hover:opacity-100",
                                            color === "lime" && "bg-lime-500",
                                            color === "cyan" && "bg-cyan-500",
                                            color === "violet" &&
                                                "bg-violet-500",
                                        )}
                                    ></div>
                                    <div
                                        className={cn(
                                            "absolute right-1.5 top-1.5 -z-10 size-16 rounded-2xl bg-fuchsia-500 transition duration-300 group-hover:bg-fuchsia-400",
                                            color === "lime" &&
                                                "bg-lime-500 group-hover:bg-lime-400",
                                            color === "cyan" &&
                                                "bg-cyan-500 group-hover:bg-cyan-400",
                                            color === "violet" &&
                                                "bg-violet-500 group-hover:bg-violet-400",
                                        )}
                                    ></div>
                                    <div className="absolute inset-0 -z-10 rounded-2xl bg-zinc-800 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
                                    <div className="-mt-28 flex justify-center">
                                        <div className="relative inline-flex">
                                            <div className="absolute top-[calc(100%+16px)] h-4 w-full rounded-[100%] bg-zinc-950/70 transition duration-300 [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30"></div>
                                            <img
                                                src={image}
                                                alt="Pill 3D image"
                                                className="size-40 transition duration-300 group-hover:-translate-y-6"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="mt-12 font-heading text-3xl font-black">
                                        {title}
                                    </h3>
                                    <p className="mt-4 text-lg text-zinc-400">
                                        {description}
                                    </p>
                                    <div className="mt-12 flex justify-between">
                                        <button
                                            className={cn(
                                                "font-heading text-sm font-extrabold uppercase tracking-wider text-fuchsia-500",
                                                color === "lime" &&
                                                    "text-lime-500",
                                                color === "cyan" &&
                                                    "text-cyan-500",
                                                color === "violet" &&
                                                    "text-violet-500",
                                            )}
                                        >
                                            Learn more
                                        </button>
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
                            ),
                        )}
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-center">
                    <div className="inline-flex gap-4 rounded-full bg-zinc-950 p-2.5">
                        {cardsData.map(({ title }) => (
                            <div
                                key={title}
                                className="size-2.5 cursor-pointer rounded-full bg-zinc-500"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
