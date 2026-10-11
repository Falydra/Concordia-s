import { useState } from "react";
import { ArrowUpRight, MoreHorizontal } from "lucide-react";
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
time: "2024 - 2024",
techStack: ["Flutter", "Dart", "Supabase", "API"],
image: "/images/IsuzuApp.png",
},
{
title: "Diponegoro Chemistry Fair 2024",
description: "A website for the Diponegoro Chemistry Fair 2024, providing information and registration for participants.",
detail: "Developed the official responsive website and optimized the digital registration workflow for international participants, collaborating with committee stakeholders to deliver a user-friendly platform aligned with the event branding.",
time: "2024 - 2024",
techStack: ["JavaScript", "Node.js", "MySQL", "Laravel", "Tailwind CSS", "React", "PHP"],
image: "/images/LandscapeVector.jpg",
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
	const [expandedProject, setExpandedProject] = useState<string | null>(null);

	return (
		<section id="user-projects" className="relative w-full px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
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
					<h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Projects</h2>
				</motion.div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => {
						const isDetailsOpen = expandedProject === project.title;

						return (
						<motion.article
							key={project.title}
							whileHover={{ scale: 1.03 }}
							variants={cardVariants}
							tabIndex={0}
							className="group relative min-h-[410px] overflow-hidden rounded-xl border border-white/15 bg-white/10 outline-none transition-colors duration-300 hover:border-white/40 focus:border-white/40 sm:min-h-[380px]"
						>
							<div
								className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
								style={{ backgroundImage: `url("${project.image}")` }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/5" />

							<div className="relative flex min-h-[410px] flex-col justify-end p-4 sm:min-h-[380px] sm:p-6">
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
								<button
									type="button"
									aria-expanded={isDetailsOpen}
									aria-label={`${isDetailsOpen ? "Hide" : "View"} more details about ${project.title}`}
									onClick={() => setExpandedProject(isDetailsOpen ? null : project.title)}
									className="relative z-20 mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:border-emerald-300/70 hover:bg-emerald-300/15 focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
								>
									{isDetailsOpen ? "Hide details" : "View more"}
									{isDetailsOpen ? <ArrowUpRight className="h-4 w-4 rotate-180" /> : <MoreHorizontal className="h-4 w-4" />}
								</button>
							</div>

							<div className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/95 to-black/75 p-4 transition duration-300 ease-out sm:p-6 ${isDetailsOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus:translate-y-0 sm:group-focus:opacity-100"}`}>
								<p className="mb-2 text-xs uppercase tracking-[0.2em] text-emerald-300/80">Project detail</p>
								<h3 className="text-xl font-semibold">{project.title}</h3>
								<p className="mt-3 leading-relaxed text-white/75">{project.detail}</p>
							</div>
						</motion.article>
						);
					})}
				</div>
			</motion.div>
		</section>
	);
}
