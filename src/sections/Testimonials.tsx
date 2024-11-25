import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const testimonials: {
    name: string;
    title: string;
    avatar: string;
    text: string;
}[] = [
    {
        name: "Erica Wyatt",
        title: "Product Manager — BlockLink",
        avatar: "/assets/images/avatar-erica-wyatt.jpg",
        text: "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
    },
    {
        name: "Noel Baldwin",
        title: "Lead Developer — BitBridge",
        text: "Our productivity has skyrocketed since we started using Blockforge. It's a game-changer for our team.",
        avatar: "/assets/images/avatar-noel-baldwin.jpg",
    },
    {
        name: "Harry Bender",
        title: "CTO — CryptoSolutions",
        text: "The integration process was seamless, and the performance improvements are beyond our expectations.",
        avatar: "/assets/images/avatar-harry-bender.jpg",
    },
];

export const Testimonials = () => {
    return (
        <section className="bg-zinc-800 py-32">
            <div className="container">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
                    {testimonials.map(
                        ({ title, text, avatar, name }, index) => (
                            <motion.blockquote
                                key={index}
                                className={cn(
                                    index >= 2 && "md:hidden lg:block",
                                )}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.5 * index,
                                    ease: "easeInOut",
                                    duration: 1,
                                }}
                                viewport={{ once: true }}
                            >
                                <p className="font-heading text-3xl font-black lg:text-4xl">
                                    &ldquo;{text}&rdquo;
                                </p>
                                <cite className="mt-8 block not-italic">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div
                                                className="size-16 rounded-full bg-zinc-700 bg-cover"
                                                style={{
                                                    backgroundImage: `url(${avatar})`,
                                                }}
                                            ></div>
                                        </div>
                                        <div>
                                            <div className="text-lg font-black">
                                                {name}
                                            </div>
                                            <div className="text-zinc-400">
                                                {title}
                                            </div>
                                        </div>
                                    </div>
                                </cite>
                            </motion.blockquote>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};
