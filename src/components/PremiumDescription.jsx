import { motion } from 'framer-motion';

const PremiumDescription = () => {
    return (
        <section className="py-32 px-6 lg:px-20 bg-darker w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left Large Text Block */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl"
            >
                <h2 className="text-sm uppercase tracking-widest text-gold mb-6 font-semibold">The Origins</h2>
                <p className="text-3xl lg:text-5xl font-serif text-white leading-tight mb-8">
                    PrimeSpice Black Pepper is carefully sourced from the fertile plantations of Kerala...
                </p>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                    Grown in harmony with nature, every peppercorn is hand-selected by generations of skilled farmers.
                    The humid climate and rich soil infuse an unparalleled intensity into every harvest.
                </p>
            </motion.div>

            {/* Right Animated Image/Gradient */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden bg-[#0d0d0d] group border border-white/5"
            >
                <motion.div
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#2a2518] bg-[length:200%_200%] opacity-80"
                />

                {/* Subtle decorative elements inside the right block */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 m-4 rounded-[2rem] transition-transform duration-700 ease-out group-hover:scale-[0.98]">
                    <div className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden">

                        {/* Diagonal light sweep */}
                        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

                        {/* Center icon / shape using Kerala Map */}
                        <div className="relative z-10">
                            <img
                                src="/images/herosection/india-or-kerala-state-map-icon-vector-46148408-removebg-preview.png"
                                alt="Kerala Map"
                                className="w-48 h-48 md:w-80 md:h-80 object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.4)] opacity-90"
                            />

                            {/* Behind map glow */}
                            <div className="absolute inset-0 bg-gold/20 blur-[60px] rounded-full -z-10" />
                        </div>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default PremiumDescription;
