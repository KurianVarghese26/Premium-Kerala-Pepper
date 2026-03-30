import { motion } from 'framer-motion';

const ProductDetails = () => {
    return (
        <section className="py-24 px-6 lg:px-20 bg-black w-full flex justify-center items-center min-h-screen relative overflow-hidden">

            {/* Background Soft Glow to separate the gloss card from the stark black */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-gold/[0.04] blur-[150px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                // Condensing padding (p-8) and max-width so the entire UI comfortably clears smaller browser heights.
                className="w-full max-w-[400px] bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] hover:border-gold/20 transition-colors duration-700 rounded-[2.5rem] p-8 md:p-10 relative z-10 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden group"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-gold/50 transition-colors duration-700" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-white/[0.02] blur-[30px] pointer-events-none group-hover:bg-gold/[0.05] transition-colors duration-700" />

                {/* Product Pouch Display - radically reduced height to prevent vertical cutoff */}
                <div className="flex justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-gold/[0.05] group-hover:bg-gold/[0.15] transition-colors duration-700 blur-[40px] rounded-full" />
                    <motion.img
                        initial={{ y: 0 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        src="/images/herosection/PrimeSpice Black Pepper pouch display.png"
                        alt="PrimeSpice Pouch"
                        // Shrunk to h-48 roughly so the vertical height footprint is vastly condensed
                        className="relative z-10 w-36 md:w-40 h-auto object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.9)]"
                    />
                </div>

                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-serif text-white mb-1 tracking-tight">PrimeSpice Black Pepper</h2>
                    <p className="text-[#888] font-sans font-light text-[10px] tracking-[0.2em] uppercase">Premium Export Quality</p>
                </div>

                {/* Condensed spacing in the rows */}
                <div className="space-y-3 mb-8 font-sans text-sm md:text-base">
                    <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
                        <span className="text-[#777] font-light">Net Weight</span>
                        <span className="text-white font-medium tracking-wide">500g</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
                        <span className="text-[#777] font-light">Origin</span>
                        <span className="text-white font-medium tracking-wide">Kerala, India</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
                        <span className="text-[#777] font-light">Type</span>
                        <span className="text-white font-medium tracking-wide">Whole Black Pepper</span>
                    </div>
                    <div className="flex justify-between items-end pt-2">
                        <span className="text-[#777] font-light">Price</span>
                        <span className="text-3xl font-serif text-white tracking-tighter drop-shadow-md">₹500</span>
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#fff", color: "#000" }}
                    whileTap={{ scale: 0.97 }}
                    // Reduced padding to py-3
                    className="w-full py-3 rounded-full bg-white/[0.05] border border-white/10 text-white font-sans font-semibold tracking-wide text-sm transition-all duration-300 shadow-xl backdrop-blur-md flex items-center justify-center cursor-pointer"
                >
                    Purchase Now
                </motion.button>

                <p className="text-center text-[9px] text-[#666] font-sans mt-4 tracking-[0.1em] uppercase">Complimentary Shipping Included</p>
            </motion.div>

        </section>
    );
};

export default ProductDetails;
