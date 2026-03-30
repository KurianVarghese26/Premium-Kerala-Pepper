import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax background (moves slower)
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // Parallax text (moves faster)
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center py-20">

            {/* Background layer */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(50,50,50,0.8)_0%,rgba(0,0,0,1)_70%)] pointer-events-none"
            >
                {/* Adds a subtle grain overlay */}
                <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
            </motion.div>

            {/* Text layer */}
            <motion.div
                style={{ y: textY }}
                className="relative z-10 text-center w-full px-6"
            >
                <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-bold text-white tracking-tighter leading-none">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 md:mb-8">Bold.</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600 mb-4 md:mb-8">Sharp.</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gold via-yellow-600 to-yellow-900">Unforgettable.</span>
                </h2>
            </motion.div>

        </section>
    );
};

export default Experience;
