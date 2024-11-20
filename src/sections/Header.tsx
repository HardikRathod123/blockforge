export const HeaderSection = () => {
    return (
        <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg">
            <div className="container">
                <div className="flex h-24 items-center justify-between">
                    <div>
                        <img
                            src="/public/assets/images/logo.svg"
                            alt="BlockForge logo"
                        />
                    </div>
                    <div>
                        <div className="relative size-10">
                            <div className="trans absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="h-0.5 w-5 -translate-y-1 bg-zinc-300"></div>
                            </div>
                            <div className="trans absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="h-0.5 w-5 translate-y-1 bg-zinc-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
