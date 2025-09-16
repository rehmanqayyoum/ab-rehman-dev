import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { Button } from './ui/button';

const ContactForm = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // "success" | "error" | null

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus(null);

        // Honeypot check (hidden field)
        const hp = new FormData(formRef.current).get("website");
        if (hp) return; // bot detected

        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            );

            setStatus("success");
            formRef.current.reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };


    return (
        <form className=" space-y-5 p-4 sm:p-6 md:p-8 rounded-2xl border bg-gray-50 shadow-sm w-full max-w-lg" ref={formRef} onSubmit={sendEmail}>
            <div>
                <label className="block mb-2 text-sm sm:text-base md:text-[16px] font-medium text-muted-foreground">Your Name</label>
                <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 font-sans text-sm sm:text-base md:text-[16px] focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none transition"
                    placeholder="Enter your name"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm sm:text-base md:text-[16px] font-medium text-muted-foreground">Your Email</label>
                <input
                    type="email"
                    name="user_email" /* must match EmailJS template */
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 font-sans text-sm sm:text-base md:text-[16px] focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none transition"
                    placeholder="Enter your email"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm sm:text-base md:text-[16px] font-medium text-muted-foreground">Message</label>
                <textarea
                    rows={4}
                    name="message" /* must match EmailJS template */
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 font-sans text-sm sm:text-base md:text-[16px] focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none transition"
                    placeholder="Write your message..."
                />
            </div>
            {/* Honeypot (hidden) */}
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
            />
            <Button size="lg" type="submit" disabled={loading} className="w-full font-sans rounded-md">
                {loading ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
                <p className="text-sm text-green-600">Message sent. I’ll get back to you soon!</p>
            )}
            {status === "error" && (
                <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
            )}
        </form>
    )
}

export default ContactForm;