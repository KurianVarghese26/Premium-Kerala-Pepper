import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Isolated word component guarantees accurate scrolling hook evaluation
const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.05, 1]);
    const color = useTransform(progress, range, ["#0a0a0a", "#ffffff"]);
    const filter = useTransform(progress, range, ["blur(14px)", "blur(0px)"]);
    const y = useTransform(progress, range, [5, 0]);

    return (
        <motion.span
            style={{ opacity, color, filter, y }}
            className="inline-block transition-colors duration-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
            {children}&nbsp;
        </motion.span>
    );
};

const BrandStory = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 100%"]
    });

    // Remapped to ensure it completes smoothly but entirely removes the "scrolling delay"
    // by tying it natively to the container without massive excess space.
    const aggressiveProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const text = "Sourced from the lush hills of Kerala, our black pepper delivers bold aroma, rich flavor, and uncompromising purity.";
    const words = text.split(" ");

    return (
        // Drastically reduced height from 250vh to 120vh so there is zero "empty scrolling delay" after it finishes.
        <section ref={containerRef} className="h-[120vh] w-full bg-[#050505] relative border-t border-b border-white/5">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 md:px-20 overflow-hidden">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 shadow-[0_0_100px_rgba(255,255,255,0.02)] blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-serif leading-[1.3] md:leading-[1.2] select-none flex flex-wrap justify-center gap-x-3 md:gap-x-5 lg:gap-x-6">
                        {words.map((word, i) => {
                            const step = 1 / words.length;
                            const start = i * step;
                            const end = start + step;

                            return (
                                <Word
                                    key={i}
                                    progress={aggressiveProgress}
                                    range={[start, end]}
                                >
                                    {word}
                                </Word>
                            );
                        })}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
