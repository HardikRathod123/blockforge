import { Card, type TColors } from "@/components/Card";
import path from "path";

const cardsData: {
    image: string;
    color: TColors;
    title: string;
    description: string;
}[] = [
    {
        image: "/assets/images/pill.png",
        color: "fuchsia",
        title: "Revolutionary Blockchain API",
        description:
            "Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless connectivity.",
    },
    {
        image: "/assets/images/cuboid.png",
        color: "lime",
        title: "Decentralized Data Solutions",
        description:
            "Unlock the potential of decentralized data solutions with our innovative tools and services.",
    },
    {
        image: "/assets/images/cone.png",
        color: "cyan",
        title: "Next-Gen Smart Contracts",
        description:
            "Create and deploy next-generation smart contracts with our powerful and intuitive platform.",
    },
    {
        image: "/assets/images/icosahedron.png",
        color: "violet",
        title: "Seamless blockchain Integration",
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
                                <Card
                                    key={title}
                                    className="max-w-xs pb-[60px] md:max-w-md md:pb-10"
                                    color={color}
                                >
                                    <div className="-mt-28 flex justify-center">
                                        <div className="relative inline-flex">
                                            <div className="absolute top-[calc(100%+16px)] h-4 w-full rounded-[100%] bg-zinc-950/70 transition duration-300 [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30"></div>
                                            <img
                                                src={image}
                                                alt={`${path.basename(image, ".png")} 3D image`}
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
                                </Card>
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
