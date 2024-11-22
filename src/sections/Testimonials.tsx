const testimonials: {
    name: string;
    title: string;
    avatar: string;
    text: string;
}[] = [
    {
        name: "Erica Wyatt",
        title: "Product Manager — BlockLink",
        avatar: "/public/assets/images/avatar-erica-wyatt.jpg",
        text: "The user experience is phenomenal and the support team is always there to help. Highly recommended!",
    },
    {
        name: "Noel Baldwin",
        title: "Lead Developer — BitBridge",
        text: "Our productivity has skyrocketed since we started using Blockforge. It's a game-changer for our team.",
        avatar: "/public/assets/images/avatar-noel-baldwin.jpg",
    },
    {
        name: "Harry Bender",
        title: "CTO — CryptoSolutions",
        text: "The integration process was seamless, and the performance improvements are beyond our expectations.",
        avatar: "/public/assets/images/avatar-harry-bender.jpg",
    },
];

export const Testimonials = () => {
    return (
        <section className="bg-zinc-800 py-32">
            <div className="container">
                <div className="grid grid-cols-1 gap-16">
                    {testimonials.map(
                        ({ title, text, avatar, name }, index) => (
                            <blockquote key={index}>
                                <p className="font-heading text-3xl font-black">
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
                            </blockquote>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};
