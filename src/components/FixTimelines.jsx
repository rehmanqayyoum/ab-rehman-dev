import { ArrowUp, Linkedin, Mail, Phone } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const FixTimelines = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed right-6 top-1/3 flex flex-col items-center gap-4 z-50">
            <a href="https://www.linkedin.com/in/rehman-qayyoum-52425b1b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:scale-110 transition-transform"
            >
                <Linkedin size={22} />
            </a>

            <a href="mailto:rehmanqayyoum1@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:scale-110 transition-transform"
            >
                <Mail size={22} />
            </a>

            <a href="tel:+923014022328"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:scale-110 transition-transform"
            >
                <Phone size={22} />
            </a>

            <div className="w-[2px] h-16 bg-primary"></div>

            {showTopBtn && (
                <button onClick={scrollToTop}
                    className="relative  w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300"
                >
                    <ArrowUp size={22} />
                    <span className="absolute inset-0 rounded-full bg-primary/40 animate-ripple"></span>
                </button>
            )}
        </div>
    )
}

export default FixTimelines