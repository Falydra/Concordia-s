import { motion } from "framer-motion";

const timelineItems = [
    {
        period: "2016 - 2019",
        title: "SMP N 1 Sragen",
        description: "Menyelesaikan pendidikan menengah pertama dengan fokus pada pengembangan akademik dan keterampilan dasar.",
    },
    {
        period: "2019 - 2022",
        title: "SMA N 2 Sragen",
        description: "Menyelesaikan pendidikan menengah atas dengan mengembangkan kemampuan akademik dan berpikir kritis.",
    },
    {
        period: "2022 - 2026",
        title: "Diponegoro University",
        description: "Menyelesaikan studi S1 Informatika dengan IPK 3.63 dan berfokus pada pengembangan perangkat lunak serta teknologi informasi.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Background() {
    return (
        <section
            id="user-background"
            className="relative w-full min-h-screen px-6 mb-8 text-white"
        >
            <motion.div
                className="mx-auto max-w-4xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={itemVariants} className="mb-16 text-center">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/60">
                        My Background
                    </p>
                    <h2 className="text-4xl font-bold md:text-5xl">Education Timeline</h2>
                </motion.div>

                <div className="relative">
                    <div className="absolute bottom-0 left-3 top-0 w-px bg-white/25 md:left-1/2 md:-translate-x-1/2" />
                    <div className="space-y-12">
                        {timelineItems.map((item, index) => (
                            <motion.article
                                key={item.title}
                                variants={itemVariants}
                                className={`relative flex w-full items-start pl-12 md:w-1/2 md:pl-0 ${
                                    index % 2 === 0 ? "md:pr-14" : "md:ml-auto md:pl-14"
                                }`}
                            >
                                <span
                                    className={`absolute top-1.5 h-7 w-7 rounded-full border-4 border-black bg-white left-0 ${
                                        index % 2 === 0
                                            ? "md:left-auto md:right-[-14px]"
                                            : "md:left-[-14px]"
                                    }`}
                                />
                                <div className="w-full rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                                    <p className="mb-2 text-sm text-white/60">{item.period}</p>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="mt-3 leading-relaxed text-white/70">{item.description}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}