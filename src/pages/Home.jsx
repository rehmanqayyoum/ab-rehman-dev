import { Button } from '@/components/ui/button';
import Lottie from 'lottie-react';
import React from 'react';
import ProfileAvatar from '../assets/images/lottie/profile-avatar.json';
import AboutDev from '../assets/images/lottie/about-dev.json';
import { Code2, Linkedin, Mail, Phone, Rocket, User } from 'lucide-react';
// technologies logo's
import ReactLogo from '../assets/images/tools-logos/react.svg';
import VueLogo from '../assets/images/tools-logos/vue.svg';
import AngularLogo from '../assets/images/tools-logos/angular.svg';
import ShopifyLogo from '../assets/images/tools-logos/shopify.svg';
import PhpLogo from '../assets/images/tools-logos/php.svg';
import LaravelLogo from '../assets/images/tools-logos/laravel.svg';
import WordpressLogo from '../assets/images/tools-logos/wordpress.svg';
import HtmlLogo from '../assets/images/tools-logos/html.svg';
import CssLogo from '../assets/images/tools-logos/css.svg';
import JsLogo from '../assets/images/tools-logos/js.svg';
import TailwindLogo from '../assets/images/tools-logos/tailwind.svg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import cover1 from '../assets/images/covers/cover-1.jpg';

// projects
import ShortlistmeImg from '../assets/images/projects/Shortlistme.png';
import RoiImg from '../assets/images/projects/roi.png';
import MeterBoxLockImg from '../assets/images/projects/meterboxlock.png';
import AlEtihadImg from '../assets/images/projects/AlEtihad.png';
import UnifiedImg from '../assets/images/projects/Unified.png';
import DigitalMindsImg from '../assets/images/projects/digital-minds-on.png';
import WorkInAusImg from '../assets/images/projects/workinaus.png';
import AJSMajuImg from '../assets/images/projects/ajsmaju.png';
import MykakaksAdminImg from '../assets/images/projects/mykakaks-admin.png';
import ContactForm from '@/components/ContactForm';
import MyProjects from '@/components/MyProjects';


const Home = () => {
    const projects = [
        {
            title: "Al-Etihad Cooperative Insurance Website",
            description: "A professional insurance platform crafted with a clean and responsive UI, ensuring seamless access to policies and services. Focused on performance, accessibility, and user trust across all devices.",
            image: AlEtihadImg,
            tags: ["PHP", "Bootstrap", "RTL", "Responsive", "Accessibility", "LTR/RTL", "Customer Website"],
            link: "https://aletihad.sa",
            featured: true,
        },
        {
            title: "Al-Etihad Insurance Customer Portal",
            description: "Developed a responsive, RTL-supported insurance customer portal (CRM) enabling fast access to policies, claims, and services for Al-Etihad Cooperative Insurance.",
            image: UnifiedImg,
            tags: ["CRM", "Dashboard", "AlEtihad Policies", "React", "LTR/RTL", "Responsive", "Customer Portal"],
            link: "https://es.aletihad.sa/",
            featured: true,
        },
        {
            title: "Shortlistme",
            description: "A skill-first job matching platform that spotlights candidates based on real capabilities not just keywords ensuring fair, bias-free recruitment. Built with clean UI and responsive layouts using modern frontend tools.",
            image: ShortlistmeImg,
            tags: ["Php", "Laravel", "Bootstrap", "Material UI", "SEO"],
            link: "https://shortlistme.com",
        },
        {
            title: "Level Up Your Service-Based Business",
            description: "A modern marketing platform designed to help service-based businesses. Delivered a clean, responsive, and performance-optimized frontend that ensures seamless navigation and a professional digital presence.",
            image: RoiImg,
            tags: ["React Js", "Bootstrap", "SASS", "API", "SEO", "React Native", "Material UI",],
            link: "https://www.roilevelup.com/",
        },
        {
            title: "Digital Minds On Platform",
            description: "Designed and developed a modern, responsive website for Digital Minds On, delivering a sleek UI and smooth user experience with optimized performance to boost their digital presence.",
            image: DigitalMindsImg,
            tags: ["React", "Bootstrap", "Material UI", "UI/UX", "SEO", "Responsive Development"],
            link: "https://digitalmindson.com/",
            featured: true
        },
        {
            title: "Meter Box Lock",
            description: "Designed and developed a responsive product website for MeterBox Lock, delivering a clean UI, smooth user experience, and optimized performance to boost customer engagement and inquiries.",
            image: MeterBoxLockImg,
            tags: ["Laravel", "SEO Optimized", "Responsive Design", "Custom CMS-friendly setup", "Product Showcase", "Homepage Rotator/Slider", "Contact Form SMTP",],
            link: "https://meterboxlock.com.au",
        },
        {
            title: "WorkInAUS Job Platform",
            description: "Developed a full-stack job marketplace platform with AI job creation, video-enabled job ads, resume uploads, and employer compliance tools for Australian job seekers and recruiters.",
            image: WorkInAusImg,
            tags: ["React", "Tailwind", "AI Tools", "Video Ads", "Resume Upload"],
            link: "https://workinaus.com.au/home",
            featured: false,
        },
        {
            title: "AJS Maju Website",
            description: "Designed and developed the full frontend for AJS Maju, delivering a seamless, responsive UI that enhances user experience and brand identity. Built with performance, accessibility, and clarity in mind to ensure consistency across devices.",
            image: AJSMajuImg,
            tags: ["React", "Bootstrap", "UI/UX", "Brand Identity", "Responsive Web", "XD to React Conversion"],
            link: "https://beta.ajsmaju.com/",
            featured: false,
        },
        {
            title: "Mykakaks Admin Panel",
            description: "Developed an admin dashboard for Mykakaks to streamline bookings, customer management, team allocations, and slot availability. Designed with a modern, responsive UI/UX to optimize daily operations and ensure scalability.",
            image: MykakaksAdminImg,
            tags: ["React", "Bootstrap", "React DataTable", "Admin Dashboard", "Responsive Design"],
            link: "#",
            featured: false,
        }
    ];

    return (
        <div id="home" className="bg-background text-foreground">
            <section className="relative isolate px-6 py-10 sm:py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
                <div className="mx-auto max-w-6xl grid md:grid-cols-2 items-center">
                    <div className="hidden md:flex justify-center md:justify-start">
                        <div className="user-avatar scale-140 -ml-10">
                            <Lottie animationData={ProfileAvatar} loop={true} className="w-96 md:w-[500px]" />
                        </div>
                    </div>

                    <div className="text-center md:text-left md:pe-6">
                        <p className="mb-3 inline-block rounded-full border px-3 py-1 text-xs text-muted-foreground font-medium">
                            Clean Code · Elegant UI · Seamless User Experience
                        </p>
                        <h1 className="mt-2 text-4xl font-heading font-bold sm:text-6xl">
                            Hi, I’m <span className="text-primary">Abdul Rehman</span>
                        </h1>
                        <p className="mx-auto md:mx-0 mt-5 max-w-2xl text-lg font-sans text-muted-foreground font-normal">
                            Frontend Engineer crafting fast, accessible and elegant Web or Mobile experiences.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="#projects">
                                <Button size="lg" className="font-sans rounded-xl font-semibold">View Projects</Button>
                            </a>
                            <a href="#contact">
                                <Button size="lg" variant="outline" className="font-sans rounded-xl font-semibold">Contact Me</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="border-t py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    {/* Left: Text */}
                    <div className="text-center md:text-left px-0 sm:px-2 md:px-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
                        About Me
                    </h2>

                    <p className="text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed font-normal">
                        I’m a dedicated front-end developer with a passion for crafting clean,
                        engaging, and user-friendly digital experiences. My focus is on building
                        responsive interfaces that balance modern design with seamless usability.
                        With years of hands-on coding and problem-solving, I bring both creativity
                        and precision to every project I work on.
                    </p>

                    <ul className="space-y-3 sm:space-y-4 text-left">
                        <li className="flex items-start sm:items-center gap-3">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary shrink-0 mt-1 sm:mt-0" />
                        <span className="text-sm sm:text-base md:text-base font-medium">5 years of professional coding and development experience</span>
                        </li>

                        <li className="flex items-start sm:items-center gap-3">
                        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary shrink-0 mt-1 sm:mt-0" />
                        <span className="text-sm sm:text-base md:text-base font-medium">Skilled in modern front-end technologies and best practices</span>
                        </li>

                        <li className="flex items-start sm:items-center gap-3">
                        <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary shrink-0 mt-1 sm:mt-0" />
                        <span className="text-sm sm:text-base md:text-base font-medium">Driven to deliver fast, polished, and intuitive interfaces</span>
                        </li>
                    </ul>
                    </div>

                    {/* Right: Avatar / Lottie */}
                    <div className="flex justify-center md:justify-start px-0 sm:px-2 md:px-0">
                    <div className="user-avatar transform scale-100 sm:scale-105 md:scale-110 lg:scale-125">
                        <Lottie
                        animationData={AboutDev}
                        loop={true}
                        className="w-full sm:w-2/3 md:w-3/4 lg:max-w-[500px] xl:max-w-[560px] 2xl:max-w-[640px]"
                        />
                    </div>
                    </div>
                </div>
            </section>

            <section id="tools_technologies" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    {/* Heading */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 md:mb-10">
                    <span className="text-primary">Tools & Technologies</span> I Work With
                    </h2>

                    {/* Marquee */}
                    <div className="mx-auto max-w-6xl items-center">
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee space-x-10 sm:space-x-14 md:space-x-16 lg:space-x-20 py-4 sm:py-6">
                        {/* 1st set */}
                        <img src={HtmlLogo} alt="Html" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={CssLogo} alt="Css" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={JsLogo} alt="JavaScript" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={ReactLogo} alt="React" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={VueLogo} alt="Vue" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={AngularLogo} alt="Angular" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={ShopifyLogo} alt="Shopify" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={PhpLogo} alt="PHP" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={LaravelLogo} alt="Laravel" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={WordpressLogo} alt="WordPress" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={TailwindLogo} alt="Tailwind CSS" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />

                        {/* 2nd set for infinite loop */}
                        <img src={HtmlLogo} alt="Html" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={CssLogo} alt="Css" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={JsLogo} alt="JavaScript" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={ReactLogo} alt="React" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={VueLogo} alt="Vue" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={AngularLogo} alt="Angular" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={ShopifyLogo} alt="Shopify" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={PhpLogo} alt="PHP" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={LaravelLogo} alt="Laravel" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={WordpressLogo} alt="WordPress" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        <img src={TailwindLogo} alt="Tailwind CSS" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            <section id="my_services" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                    My <span className="text-primary">Services</span>
                </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
                {/* Service Card */}
                <div className="relative bg-gray-50 p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl shadow hover:shadow-lg transition cursor-pointer mb-5">
                    <span className="absolute -top-6 left-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary/60">
                    01
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 mt-3">
                    Web Development
                    </h3>
                    <p className="text-sm sm:text-[15px] md:text-[15px] lg:text-[16px] text-gray-600 font-normal">
                    Building fast, modern, and SEO-friendly websites with clean, scalable
                    code.
                    </p>
                </div>

                <div className="relative bg-gray-50 p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl shadow hover:shadow-lg transition cursor-pointer mb-5">
                    <span className="absolute -top-6 left-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary/60">
                    02
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 mt-3">
                    UI/UX Implementation
                    </h3>
                    <p className="text-sm sm:text-[15px] md:text-[15px] lg:text-[16px] text-gray-600 font-normal">
                    Converting Figma/Sketch designs into pixel-perfect, responsive, and
                    user-friendly interfaces.
                    </p>
                </div>

                <div className="relative bg-gray-50 p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl shadow hover:shadow-lg transition cursor-pointer mb-5">
                    <span className="absolute -top-6 left-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary/60">
                    03
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 mt-3">
                    SPA & Dashboards
                    </h3>
                    <p className="text-sm sm:text-[15px] md:text-[15px] lg:text-[16px] text-gray-600 font-normal">
                    Developing dynamic Single Page Applications and dashboards using React
                    & modern frameworks.
                    </p>
                </div>

                <div className="relative bg-gray-50 p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl shadow hover:shadow-lg transition cursor-pointer mb-5">
                    <span className="absolute -top-6 left-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary/60">
                    04
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 mt-3">
                    Performance Optimization
                    </h3>
                    <p className="text-sm sm:text-[15px] md:text-[15px] lg:text-[16px] text-gray-600 font-normal">
                    Speed optimization, Core Web Vitals improvements, and smooth
                    cross-browser experiences.
                    </p>
                </div>

                <div className="relative bg-gray-50 p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl shadow hover:shadow-lg transition cursor-pointer mb-5">
                    <span className="absolute -top-6 left-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary/60">
                    05
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 mt-3">
                    API Integration
                    </h3>
                    <p className="text-sm sm:text-[15px] md:text-[15px] lg:text-[16px] text-gray-600 font-normal">
                    Connecting applications with REST/GraphQL APIs for real-time data and
                    smooth functionality.
                    </p>
                </div>

                <div className="relative bg-gray-50 p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl shadow hover:shadow-lg transition cursor-pointer mb-5">
                    <span className="absolute -top-6 left-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary/60">
                    06
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 mt-3">
                    RTL & Multilingual
                    </h3>
                    <p className="text-sm sm:text-[15px] md:text-[15px] lg:text-[16px] text-gray-600 font-normal">
                    Implementing right-to-left (Arabic/Urdu) and multilingual website
                    support for global reach.
                    </p>
                </div>
                </div>
            </div>
            </section>


            <section id="how_banner" className="relative bg-cover bg-center bg-no-repeat py-14 sm:py-16 md:py-20 lg:py-24" style={{ backgroundImage: `url(${cover1})` }}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/70"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-primary-foreground">
                        Have any project in mind?
                        </h2>

                        {/* Paragraph */}
                        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 text-primary-foreground font-normal">
                        I’m excited to hear about your project, big or small. Let’s collaborate to
                        bring it to life. Reach out today, and together we’ll turn your vision
                        into reality!
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button
                            size="lg"
                            className="rounded-full shadow-lg px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 font-semibold"
                            >
                            View CV
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button
                            size="lg"
                            variant="secondary"
                            className="font-semibold rounded-full shadow-lg px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4"
                            >
                            Hire Me
                            </Button>
                        </a>
                        </div>
                    </div>
            </section>


            <section id="projects" className="border-t py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12"
                    >
                    Featured <span className="text-primary">Projects</span>
                    </h2>
                    <MyProjects projects={projects} />
                </div>
            </section>


            <section id="contact" className="border-t py-16">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Heading */}
                    <div className="text-center mb-12">
                    <h2
                        className="
                        inline-block 
                        text-2xl sm:text-3xl md:text-4xl 
                        font-heading font-bold
                        "
                    >
                        Get <span className="text-primary">In Touch</span>
                    </h2>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-10">
                    {/* Left Side */}
                    <div className="space-y-8 text-center md:text-left">
                        <p className="text-muted-foreground leading-relaxed text-base md:text-[16px] font-normal">
                        Feel free to reach out. I’m always open to discussing projects,
                        creative ideas, or opportunities to be part of your vision.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-6">
                        {/* Email */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="flex justify-center sm:justify-start">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            </div>
                            <div>
                            <h4 className="font-semibold text-sm md:text-base">Email</h4>
                            <a
                                href="mailto:rehmanqayyoum1@gmail.com"
                                className="font-normal text-muted-foreground hover:text-primary transition-colors text-sm md:text-[16px]"
                            >
                                rehmanqayyoum1@gmail.com
                            </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="flex justify-center sm:justify-start">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            </div>
                            <div>
                            <h4 className="font-semibold text-sm md:text-base">Phone</h4>
                            <a
                                href="tel:+923014022328"
                                className="font-normal text-muted-foreground hover:text-primary transition-colors text-sm md:text-[16px]"
                            >
                                +92 301 4022328
                            </a>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="flex justify-center sm:justify-start">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            </div>
                            <div>
                            <h4 className="font-semibold text-sm md:text-base">LinkedIn</h4>
                            <a
                                href="https://www.linkedin.com/in/rehman-qayyoum-52425b1b6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-normal text-muted-foreground hover:text-primary transition-colors text-sm md:text-[16px]"
                            >
                                linkedin.com/in/yourprofile
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="md:justify-items-end">
                        <ContactForm />
                    </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="footer" className="bg-gray-900 py-6">
            <div
                className="
                max-w-6xl mx-auto 
                flex flex-col md:flex-row 
                items-center justify-between 
                px-4 text-xs sm:text-sm md:text-[16px] 
                text-gray-400 gap-2 text-center md:text-left
                "
            >
                <p className="font-medium">
                Clean Code · Elegant UI · Seamless User Experience
                </p>
                <p className="font-medium">
                © {new Date().getFullYear()} Abdul Rehman. All Rights Reserved.
                </p>
            </div>
            </footer>

        </div>
    )
}

export default Home;