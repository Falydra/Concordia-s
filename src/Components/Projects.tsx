import { motion } from "framer-motion";

const projects = [
{
title: "Smartlet: Swiftlet Smart Farming",
description: "A smart farming application designed to help swiftlet farmers monitor and manage their farms.",
detail: "Developed a cross-platform mobile application by translating user feedback and business workflows into an intuitive interface, collaborating with cross-functional teams to deliver production-ready features ahead of schedule.",
time: "2024 - 2025",
techStack: ["Flutter", "Dart", "REST API", "Go", "Docker", "postgreSQL"],
image: "/images/StoreLogo.png",
},
{
title: "Isuzu Mobile Service Booking App",
description: "A mobile application for booking and managing service appointments with Isuzu dealerships.",
detail: "Developed user-centric mobile services for vehicle discovery and service booking, transforming stakeholder requirements into an intuitive, brand-aligned interface while delivering the application within strict deadlines.",
time: "2023 - 2024",
techStack: ["Flutter", "Dart", "Supabase", "API"],
image: "/images/Isuzu App.png",
},
{
title: "Diponegoro Chemistry Fair 2024",
description: "A website for the Diponegoro Chemistry Fair 2024, providing information and registration for participants.",
detail: "Developed the official responsive website and optimized the digital registration workflow for international participants, collaborating with committee stakeholders to deliver a user-friendly platform aligned with the event branding.",
time: "2022 - 2023",
techStack: ["JavaScript", "Node.js", "MySQL", "Laravel", "Tailwind CSS", "React", "PHP"],
image: "/images/Landscape Vector.jpg",
},
];


const containerVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.15 },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: "easeOut" },
	},
};

export default function Projects() {
	return (
		<section id="user-projects" className="relative w-full px-6 py-24 text-white">
			<motion.div
				className="mx-auto max-w-6xl"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.15 }}
                
			>
				<motion.div variants={cardVariants} className="mb-12 text-center">
					<p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/60">
						Selected Work
					</p>
					<h2 className="text-4xl font-bold md:text-5xl">Projects</h2>
				</motion.div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<motion.article
							key={project.title}
							whileHover={{ scale: 1.03 }}
							variants={cardVariants}
							tabIndex={0}
							className="group relative min-h-[380px] overflow-hidden rounded-xl border border-white/15 bg-white/10 outline-none transition-colors duration-300 hover:border-white/40 focus:border-white/40"
						>
							<div
								className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
								style={{ backgroundImage: `url("${project.image}")` }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/5" />

							<div className="relative flex min-h-[380px] flex-col justify-end p-6">
								<div className="mb-4 flex items-start justify-between gap-4">
									<h3 className="max-w-[75%] text-xl font-semibold leading-tight">{project.title}</h3>
									<span className="shrink-0 rounded-full bg-black/40 px-2 py-1 text-xs text-white/75">{project.time}</span>
								</div>
								<p className="leading-relaxed text-white/80">{project.description}</p>
								<div className="mt-5 flex flex-wrap gap-2">
									{project.techStack.map((technology) => (
										<span
											key={technology}
											className="rounded-full border border-white/25 bg-black/35 px-3 py-1 text-xs text-white/85"
										>
											{technology}
										</span>
									))}
								</div>
							</div>

							<div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-gradient-to-t from-black via-black/95 to-black/75 p-6 opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
								<p className="mb-2 text-xs uppercase tracking-[0.2em] text-emerald-300/80">Project detail</p>
								<h3 className="text-xl font-semibold">{project.title}</h3>
								<p className="mt-3 leading-relaxed text-white/75">{project.detail}</p>
							</div>
						</motion.article>
					))}
				</div>
			</motion.div>
		</section>
	);
}
