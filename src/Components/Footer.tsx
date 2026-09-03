
import { CiMail } from "react-icons/ci";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const projects = [
    "Smartlet: Swiftlet Smart Farming",
    "Isuzu Mobile Service Booking App",
    "Diponegoro Chemistry Fair 2024",
];

const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/daffa-aly-meganendra/", icon: FaLinkedin },
    { label: "GitHub", href: "https://github.com/Falydra", icon: FaGithub },
    { label: "Instagram", href: "https://www.instagram.com/falydra/", icon: FaInstagram },
];

export default function Footer() {
    return (
        <footer className="mt-auto w-full border-t border-white/10 bg-transparent px-6 py-12 text-white backdrop-blur-md md:px-12">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
                <div>
                    <p className="text-2xl font-semibold tracking-tight">Daffa Aly Meganendra</p>
                    <p className="mt-3 max-w-sm leading-relaxed text-white/60">
                        Informatics student and mobile application developer building useful,
                        accessible digital experiences.
                    </p>
                    <a href="mailto:daffa.meganendra@gmail.com" className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-emerald-300">
                        <CiMail className="h-5 w-5" />
                        daffa.meganendra@gmail.com
                    </a>
                </div>

                <div>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Explore</h2>
                    <nav className="mt-4 flex flex-col items-start gap-3 text-sm text-white/70">
                        <Link to="hero-section" smooth className="cursor-pointer transition-colors hover:text-emerald-300">Home</Link>
                        <Link to="user-profile" smooth className="cursor-pointer transition-colors hover:text-emerald-300">Profile</Link>
                        <Link to="user-background" smooth className="cursor-pointer transition-colors hover:text-emerald-300">Background</Link>
                        <Link to="user-projects" smooth className="cursor-pointer transition-colors hover:text-emerald-300">Projects</Link>
                    </nav>
                </div>

                <div>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">Selected work</h2>
                    <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
                        {projects.map((project) => (
                            <Link key={project} to="user-projects" smooth className="cursor-pointer leading-relaxed transition-colors hover:text-emerald-300">
                                {project}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-5 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center">
                <p>© 2026 Daffa Aly Meganendra. Built with care.</p>
                <div className="flex items-center gap-4">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="text-white/60 transition-colors hover:text-emerald-300">
                            <Icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}