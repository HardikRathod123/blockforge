import { CutCornerButton } from "@/components/CutCornerButton";
import { GhostButton } from "@/components/GhostButton.";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const listItems = [
    "Experience unparalleled security and scalability",
    "Fully benefit from scalable network effects",
    "Unlock the potential of decentralized networks",
];
export const FeaturesGridSection = () => {
    const torusKnotRef = useRef(null);
    const { scrollYProgress: torusKnotYProgress } = useScroll({
        target: torusKnotRef,
        offset: ["start end", "end start"],
    });
    const torusKnotTranslateY = useTransform(
        torusKnotYProgress,
        [0, 1],
        [100, -100],
    );
    const torusKnotRotate = useTransform(torusKnotYProgress, [0, 1], [30, -30]);

    const firstHemisphereRef = useRef(null);
    const { scrollYProgress: firstHemisphereScrollYProgress } = useScroll({
        target: firstHemisphereRef,
        offset: ["start end", "end start"],
    });
    const firstHemisphereTranslateY = useTransform(
        firstHemisphereScrollYProgress,
        [0, 1],
        [50, -50],
    );
    const firstHemisphereRotate = useTransform(
        firstHemisphereScrollYProgress,
        [0, 1],
        [-10, -50],
    );

    const coneRef = useRef(null);
    const { scrollYProgress: coneScrollYProgress } = useScroll({
        target: coneRef,
        offset: ["start end", "end start"],
    });
    const coneTranslateY = useTransform(
        coneScrollYProgress,
        [0, 1],
        [100, -100],
    );
    const coneRotate = useTransform(coneScrollYProgress, [0, 1], [12, 45]);

    const secondHemisphereRef = useRef(null);
    const { scrollYProgress: secondHemisphereScrollYProgress } = useScroll({
        target: secondHemisphereRef,
        offset: ["start end", "end start"],
    });
    const secondHemisphereTranslateY = useTransform(
        secondHemisphereScrollYProgress,
        [0, 1],
        [50, -50],
    );
    const secondHemisphereRotate = useTransform(
        secondHemisphereScrollYProgress,
        [0, 1],
        [-25, 10],
    );

    return (
        <section className="overflow-x-clip py-24">
            <div className="container">
                <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="col-span-2">
                            <h2 className="font-heading text-4xl font-black md:text-5xl lg:text-6xl">
                                Empowering the future of blockchain.
                            </h2>
                            <p className="mt-8 text-xl text-zinc-400 lg:text-2xl">
                                Blockforge provides robust and secure
                                infrastructure to support the next generation of
                                decentralized applications.
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
                        <div className="hidden md:block">
                            <div className="relative z-0 inline-flex">
                                <motion.img
                                    src="/assets/images/torus-knot.png"
                                    alt="Torus Know 3D image"
                                    className="size-96 max-w-none"
                                    style={{
                                        translateY: torusKnotTranslateY,
                                        rotate: torusKnotRotate,
                                    }}
                                    ref={torusKnotRef}
                                />
                                <motion.img
                                    src="/assets/images/hemisphere.png"
                                    alt="firstHemisphere 3D image"
                                    className="absolute top-3/4 -z-10 size-96 max-w-none -scale-x-[1]"
                                    style={{
                                        translateY: firstHemisphereTranslateY,
                                        rotate: firstHemisphereRotate,
                                    }}
                                    ref={firstHemisphereRef}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="relative hidden md:block">
                            <div className="absolute right-0 z-0">
                                <motion.img
                                    src="/assets/images/cone.png"
                                    alt="Cone 3D image"
                                    className="size-96 max-w-none"
                                    style={{
                                        translateY: coneTranslateY,
                                        rotate: coneRotate,
                                    }}
                                    ref={coneRef}
                                />
                                <motion.img
                                    src="/assets/images/hemisphere.png"
                                    alt="firstHemisphere 3D image"
                                    className="absolute top-3/4 -z-10"
                                    style={{
                                        translateY: secondHemisphereTranslateY,
                                        rotate: secondHemisphereRotate,
                                    }}
                                    ref={secondHemisphereRef}
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h2 className="font-heading text-4xl font-black md:text-5xl lg:text-6xl">
                                Blockforge leads the way.
                            </h2>
                            <div className="mt-6 flex flex-col gap-6 text-xl text-zinc-400 lg:text-2xl">
                                <p>
                                    Blockforge is dedicated to supporting the
                                    evolution of Web3 applications by delivering
                                    the necessary infrastructure and security
                                    for Web3.
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
            </div>
        </section>
    );
};
