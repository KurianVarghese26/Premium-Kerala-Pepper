import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FeatureText = ({ feature, progress, index, total }) => {
    const windowSize = 1 / total;
    const start = index * windowSize;
    const end = start + windowSize;

    // Very swift crossfade overlap
    const fadeInStart = start;
    const fadeInEnd = start + (windowSize * 0.25);
    const fadeOutStart = end - (windowSize * 0.25);
    const fadeOutEnd = end;

    const opacity = useTransform(
        progress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
    );

    // Drastically reduced the Y shift so they don't violently pass through each other.
    const y = useTransform(
        progress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        [20, 0, 0, -20]
    );

    // Subtle blur just to soften the edges, not a massive 16px smudge
    const filter = useTransform(
        progress,
        [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
        ["blur(6px)", "blur(0px)", "blur(0px)", "blur(6px)"]
    );

    // Removed the scaling effect for text as it feels less "premium reading" and more "bouncy". Apple keeps typography strictly unscaled while fading.

    return (
        <motion.h3
            style={{ opacity, y, filter }}
            className="absolute inset-x-0 mx-auto w-full text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-white pointer-events-none px-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] tracking-tight leading-tight"
        >
            {feature}
        </motion.h3>
    );
};

const ProductShowcase = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
    const imageRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
    const imageY = useTransform(scrollYProgress, [0, 1], [15, -15]);

    const features = [
        "100% Natural & Pure",
        "Sourced from Kerala",
        "Strong Aroma & Flavor",
        "Handpicked Quality",
        "Hygienically Packed"
    ];

    return (
        <section ref={containerRef} className="h-[250vh] w-full bg-[#050505] relative border-t border-white/5">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.3]) }}
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none"
                />

                <div className="w-1/2 h-full flex items-center justify-center relative">
                    <motion.div
                        style={{ scale: imageScale, rotate: imageRotate, y: imageY }}
                        className="w-56 h-[360px] md:w-[320px] md:h-[480px] rounded-[2.5rem] bg-gradient-to-br from-[#111111] to-[#080808] border border-white/5 flex items-center justify-center shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gold/10 blur-[80px] rounded-full transition-opacity duration-1000 group-hover:opacity-100" />

                        <motion.img
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            src="/images/herosection/PrimeSpice_Black_Pepper_packaging_shot-removebg-preview.png"
                            alt="PrimeSpice Packaging"
                            className="relative z-10 w-[80%] h-full object-contain p-4 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                        />
                    </motion.div>
                </div>

                <div className="w-1/2 h-full flex flex-col justify-center px-10 relative">
                    {features.map((feature, i) => (
                        <FeatureText
                            key={i}
                            feature={feature}
                            progress={scrollYProgress}
                            index={i}
                            total={features.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
