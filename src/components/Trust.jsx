import { motion } from 'framer-motion';

const Trust = () => {
    const points = [
        { title: "Direct Farm Sourcing", desc: "Straight from the growers in Kerala to your table." },
        { title: "Export Quality", desc: "Meeting the highest global standards for purity and size." },
        { title: "Carefully Processed", desc: "Sun-dried and hygienically packed to retain natural oils." }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="py-40 px-6 lg:px-20 bg-black w-full flex flex-col items-center justify-center text-center">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-3xl mb-20"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                    We don’t just sell spices — <br />
                    <span className="text-gray-500 italic">we deliver authenticity.</span>
                </h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col md:flex-row justify-center items-stretch gap-12 w-full max-w-5xl"
            >
                {points.map((point, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className="flex-1 flex flex-col items-center border-t border-white/10 pt-8 mt-4 md:mt-0"
                    >
                        <div className="w-2 h-2 rounded-full bg-gold mb-8" />
                        <h4 className="text-xl font-medium text-white mb-3">{point.title}</h4>
                        <p className="text-gray-400 font-light text-center leading-relaxed max-w-xs">{point.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

        </section>
    );
};

export default Trust;
