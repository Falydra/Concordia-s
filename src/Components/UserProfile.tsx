import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import {Link} from "react-scroll";

export default function userProfile() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <div id="user-profile" className="z-10 flex min-h-[100svh] w-full items-center bg-transparent px-4 py-20 sm:px-6 lg:px-8 bg-[_radial-gradient(at_0%_100%,_hsla(253,16%,7%,1)_0,transparent_50%),_radial-gradient(at_100%_0%,_hsla(339,79%,10%,1)_0,transparent_50%)]">
            <motion.div
                className="mx-auto flex w-full max-w-5xl flex-col justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                
                <motion.div
                    className="flex w-full flex-col items-center justify-between gap-10 md:flex-row md:gap-16"
                    variants={itemVariants}
                >
                   

                    <div className="flex w-full max-w-2xl flex-col text-center md:text-left">
                        <motion.h1
                            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
                            variants={itemVariants}
                        >
                            Daffa Aly Meganendra
                        </motion.h1>
                        <motion.p
                            className="text-gray-300 leading-relaxed"
                            variants={itemVariants}
                        >
                        Passionate Informatics student at Diponegoro University specializing in mobile application development, 
                        with a deep commitment to creating intuitive and highly accessible digital experiences. Possesses strong 
                        soft skills in cross-functional collaboration, empathetic problem-solving, and adaptive communication.
                        </motion.p>
                    </div>
                    <motion.div
                        className="mb-2 aspect-square w-40 shrink-0 overflow-hidden rounded-full border-4 border-white/40 bg-black/20 shadow-[0_0_30px_rgba(255,255,255,0.3)] backdrop-blur-sm sm:w-52 md:order-first md:mb-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/images/PasfotoFormal.jpeg"
                            alt="Daffa Aly Meganendra"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/128?text=DAM';
                            }}
                        />
                    </motion.div>

                </motion.div>
                <div className="mt-10 flex w-full flex-col items-center justify-center gap-8 md:items-start">
                    <div className="flex w-full flex-wrap items-center justify-center gap-3 md:justify-start">
                        <motion.a
                        href="https://www.linkedin.com/in/daffa-aly-meganendra/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 min-w-[110px] flex-1 flex-row items-center justify-center gap-2 rounded-md border px-3 sm:flex-none"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        variants={itemVariants}
                        >
                            <FaLinkedin className="text-white w-5 h-5" />
                            <h1 className="text-white text-xs font-semibold">
                                LinkedIn
                            </h1>
                        </motion.a>
                        <motion.a
                        href="https://github.com/Falydra"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 min-w-[110px] flex-1 flex-row items-center justify-center gap-2 rounded-md border px-3 sm:flex-none"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        variants={itemVariants}
                        >
                            <FaGithub className="text-white w-5 h-5" />
                            <h1 className="text-white text-xs font-semibold">
                                Github
                            </h1>
                        </motion.a>
                        <motion.a
                        href="https://www.instagram.com/falydra/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 min-w-[110px] flex-1 flex-row items-center justify-center gap-2 rounded-md border px-3 sm:flex-none"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        variants={itemVariants}
                        >
                            <FaInstagram className="text-white w-5 h-5" />
                            <h1 className="text-white text-xs font-semibold">
                                Instagram
                            </h1>
                        </motion.a>

                    </div>
                    <motion.div
                    className="flex h-12 w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border px-5 sm:w-fit"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    variants={itemVariants}
                    >
                        <Link delay={100} smooth to="user-background" className="text-white text-sm font-semibold">
                            Get To Know Me
                        </Link>
                    </motion.div>
                   

                </div>
                
                
            </motion.div>
            
        </div>
    )
}