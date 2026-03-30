const Footer = () => {
    return (
        <footer className="w-full bg-black py-12 px-6 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-serif text-white tracking-wide">PrimeSpice</h2>
                    <p className="text-gray-500 text-sm mt-1 tracking-wider uppercase">From God&apos;s Own Country</p>
                </div>

                <div className="flex gap-8 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a>
                </div>

                <div className="text-gray-600 text-xs">
                    &copy; {new Date().getFullYear()} PrimeSpice. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
