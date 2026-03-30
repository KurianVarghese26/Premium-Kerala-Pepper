import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const HealthBenefits = () => {
    const benefits = [
        "Supports digestion and nutrient absorption",
        "Rich in powerful antioxidants",
        "Boosts metabolism and immune system",
        "Possesses detoxifying and anti-inflammatory properties"
    ];

    return (
        <section className="py-32 px-6 lg:px-20 bg-darker w-full flex justify-center">
            <div className="max-w-4xl w-full">

                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif text-white mb-6"
                    >
                        Wellness in <br /><span className="text-gold italic">Every Pinch</span>
                    </motion.h2>
                </div>

                <div className="space-y-6">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                            className="flex items-center space-x-6 border-b border-white/5 pb-6"
                        >
                            <div className="flex-shrink-0">
                                <CheckCircle2 className="text-gold w-8 h-8 opacity-80" aria-hidden="true" />
                            </div>
                            <p className="text-xl md:text-2xl text-gray-300 font-light">
                                {benefit}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HealthBenefits;
