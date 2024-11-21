import { CutCornerButton } from "@/components/CutCornerButton";
import { GhostButton } from "@/components/GhostButton.";

const listItems = [
    "Experience unparalleled security and scalability",
    "Fully benefit from scalable network effects",
    "Unlock the potential of decentralized networks",
];
export const FeaturesGridSection = () => {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex flex-col gap-56">
                    <div>
                        <h2 className="font-heading text-4xl font-black">
                            Empowering the future of blockchain.
                        </h2>
                        <p className="mt-8 text-xl text-zinc-400">
                            Blockforge provides robust and secure infrastructure
                            to support the next generation of decentralized
                            applications.
                        </p>
                        <ul className="mt-12 flex flex-col gap-8">
                            {listItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <div className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-full outline outline-4 -outline-offset-4 outline-fuchsia-500/10">
                                        <div className="size-1.5 rounded-full bg-fuchsia-500"></div>
                                    </div>
                                    <span className="text-xl font-bold">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-12 flex gap-8">
                            <CutCornerButton>Get Started</CutCornerButton>
                            <GhostButton>Learn More</GhostButton>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="font-heading text-4xl font-black">
                            Blockforge leads the way.
                        </h2>
                        <div className="mt-6 flex flex-col gap-6 text-xl text-zinc-400">
                            <p>
                                Blockforge is dedicated to supporting the
                                evolution of Web3 applications by delivering the
                                necessary infrastructure and security for Web3.
                            </p>
                            <p>
                                Blockforge champions Web3 for everyone. As a
                                decentralized blockchain scaling platform,
                                Blockforge enables developers to create
                                scalable, user-friendly dApps with low
                                transaction costs, all while ensuring robust
                                security.
                            </p>
                        </div>
                        <div className="mt-12 flex gap-8">
                            <CutCornerButton>Get Started</CutCornerButton>
                            <GhostButton>Learn More</GhostButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
