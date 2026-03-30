import { motion } from 'framer-motion';

const Usage = () => {
    const cards = [
        { title: "Daily Cooking", desc: "Adds a robust kick to your everyday meals." },
        { title: "Curries & Gravies", desc: "The secret ingredient for deep, complex flavors." },
        { title: "Marinades", desc: "Penetrates meats and veggies for a lasting impression." },
        { title: "Salads & Eggs", desc: "A simple sprinkle elevates the simplest dishes." },
        { title: "Herbal Teas", desc: "Enhances immunity when brewed with warm water." },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="py-32 px-6 lg:px-20 bg-black w-full relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 md:text-center"
                >
                    <h2 className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-semibold">Versatility</h2>
                    <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tight">A Spice for Every Occasion</h3>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                            className="relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-500 p-10 rounded-3xl group cursor-default overflow-hidden"
                        >
                            {/* Glossy top highlight inside the card */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-gold/50 transition-colors duration-500" />

                            <div className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-8 group-hover:bg-gold/[0.08] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500">
                                <div className="w-4 h-4 rounded-full bg-[#555] group-hover:bg-gold transition-colors duration-500 shadow-inner" />
                            </div>
                            <h4 className="text-2xl font-serif text-white mb-3 tracking-wide">{card.title}</h4>
                            <p className="text-[#888] font-sans font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-500">{card.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Usage;
