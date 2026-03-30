import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Extremely subtle float on scroll that gives physical weight to the page
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    return (
        <section ref={ref} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#000]">
            {/* Absolute dark void background to ensure maximum contrast */}
            <div className="absolute inset-0 bg-black z-[-2]" />

            {/* Cinematic Background Gradient / Texture */}
            <motion.div
                style={{ y, opacity, scale }}
                className="absolute inset-0 z-[-1] pointer-events-none"
            >
                {/* Soft, warm ambient light blooming from the center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />

                {/* Secondary sharp light ray crossing diagonally for that flawless Apple gleam */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/[0.04] via-transparent to-transparent" />
            </motion.div>

            <div className="relative z-10 text-center max-w-5xl px-6 w-full">
                {/* Initial text float-in built to feel extremely high-budget and serene */}
                <motion.h1
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: [0.2, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-[7.5rem] font-serif font-normal tracking-tight text-white mb-6 md:mb-8 leading-[1.05]"
                >
                    Experience the <br className="hidden md:block" />
                    <span className="bg-gradient-to-br from-yellow-100 via-gold to-yellow-600 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                        King of Spices
                    </span> <br className="hidden md:block" />
                    <span className="italic text-white/90">in Its Purest Form</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.6, ease: [0.2, 1, 0.3, 1] }}
                    className="text-lg md:text-2xl text-gray-400 font-sans font-light max-w-2xl mx-auto leading-relaxed tracking-wide"
                >
                    Premium Kerala Black Pepper, handpicked and sun-dried to preserve its natural strength, aroma, and taste.
                </motion.p>
            </div>

            {/* Cinematic scroll indicator down arrow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-medium">Scroll to explore</span>
                <motion.div
                    animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-[1px] h-16 bg-white/10 overflow-hidden"
                >
                    <motion.div className="absolute left-0 w-full bg-gradient-to-b from-transparent via-gold to-transparent h-1/2" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
