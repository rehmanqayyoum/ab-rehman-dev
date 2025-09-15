import React from 'react';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import Logo from "../assets/images/logos/logo.svg";

function ThemeToggle() {
    const [theme, setTheme] = useState(() =>
        typeof window !== "undefined" && document.documentElement.classList.contains("dark")
            ? "dark"
            : "light"
    );

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    useEffect(() => {
        // respect saved preference on first load
        const saved = localStorage.getItem("theme");
        if (saved === "dark") setTheme("dark");
    }, []);

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="rounded-full"
            aria-label="Toggle theme"
            title="Toggle theme"
        >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
    );
}


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const NavLink = ({ href, children }) => (
        <a href={href}
            className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)} >
            {children}
        </a>
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex h-20 items-center justify-between">
                    <a href="#home" className="text-xl font-heading text-primary">
                        <img src={Logo} alt='ab.rehman.dev' />
                    </a>
                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#my_services">Services</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                        <ThemeToggle />
                        <a href="#contact">
                            <Button size="sm" className="font-sans rounded-full">Hire Me</Button>
                        </a>
                    </nav>

                    {/* Mobile */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <Button variant="outline" size="icon" onClick={() => setOpen((v) => !v)} aria-label="Menu">
                            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile panel */}
            {open && (
                <div className="md:hidden border-t bg-background">
                    <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-4">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                        <Button className="w-full mt-2">Hire Me</Button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar