import { motion } from 'framer-motion';

const FinalImpact = () => {
    return (
        <section className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-center px-6 max-w-5xl w-full relative z-10"
            >
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white mb-8 pb-4 drop-shadow-[0_0_35px_rgba(255,255,255,0.7)]">
                    Not all pepper is <br className="hidden md:block" /> created equal.
                </h2>

                <p
                    className="text-2xl md:text-4xl text-gold font-light tracking-wide bg-gradient-to-r from-yellow-100 via-gold to-yellow-100 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,1)]"
                >
                    Taste the richness of real Kerala Black Pepper.
                </p>
            </motion.div>

            {/* Added a subtle bright glow behind the text to enhance perceived brightness */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0"
            />
        </section>
    );
};

export default FinalImpact;
