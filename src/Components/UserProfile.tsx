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
        <div id="user-profile" className="w-full h-screen bg-transparent flex-row bg-red-flare z-25 py-20 px-4">
            <motion.div
                className="max-w-5xl mx-auto h-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center gap-8 w-full"
                    variants={itemVariants}
                >
                   

                    <div className="flex flex-col w-1/2 text-center md:text-left">
                        <motion.h1
                            className="text-4xl md:text-4xl font-bold text-white mb-4"
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
                        className="w-1/4 h-1/3 aspect-square mb-8 rounded-full border-4 border-white/40 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.3)] bg-black/20 backdrop-blur-sm flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/images/Pasfoto Formal.jpeg"
                            alt="Daffa Aly Meganendra"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/128?text=DAM';
                            }}
                        />
                    </motion.div>

                </motion.div>
                <div className="w-full flex-col items-start justify-center gap-10 md:flex">
                    <div className="w-full flex-row items-center justify-start gap-4 md:flex">
                        <motion.a
                        href="https://www.linkedin.com/in/daffa-aly-meganendra/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex rounded-md flex-row items-center justify-center gap-4 border w-1/6 h-8"
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
                        className="flex rounded-md flex-row items-center justify-center gap-4 border w-1/6 h-8"
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
                        className="flex rounded-md flex-row items-center justify-center gap-4 border w-1/6 h-8"
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
                    className="flex rounded-3xl cursor-pointer flex-col items-center justify-center gap-4 border w-1/6 h-12"
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