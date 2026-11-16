
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Code2 } from 'lucide-react'

const projects = [
    {
        number: '01',
        title: 'StudentSphere',
        category: 'Full Stack Web Application',
        description:
            'A student management application that allows users to manage student records with search functionality and CRUD operations.',
        tech: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'React.js'],
        demo: 'https://studentsphere-one.vercel.app',
        featured: true,
    },
    {
        number: '02',
        title: 'TrackMate',
        category: 'Real-Time Tracking Application',
        description:
            'A real-time bus tracking application featuring GPS-based location updates, estimated arrival times and notifications.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
        demo: 'https://trackmaterce.onrender.com',
        featured: true,
    },
    {
        number: '03',
        title: 'FoundItJ',
        category: 'Lost & Found Management System',
        description:
            'A lost and found management application with REST API endpoints for reporting and managing lost and found items.',
        tech: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
        demo: null,
        featured: false,
    },
    {
        number: '04',
        title: 'Employee Payroll System',
        category: 'Java Application',
        description:
            'An employee payroll management system demonstrating object-oriented programming concepts such as inheritance and encapsulation.',
        tech: ['Java', 'OOP', 'Inheritance', 'Encapsulation'],
        demo: null,
        featured: false,
    },
    {
        number: '05',
        title: 'Zomato Clone',
        category: 'Full Stack Web Application',
        description:
            'A food ordering platform clone built to explore frontend development, server-side functionality and database integration.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        demo: null,
        featured: false,
    },
]

function Projects() {
    return (
        <section id="projects" className="py-28 px-6">
            <div className="max-w-7xl mx-auto">

                <p className="text-green-400 uppercase tracking-widest text-sm mb-4">
                    What I've Built
                </p>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        Featured <span className="text-green-400">Projects.</span>
                    </h2>

                    <a
                        href="https://github.com/ANANDSAIVIVEK"
                        target="_blank"
                        rel="noreferrer"
                        className="text-green-400 flex items-center gap-2 hover:gap-4 transition-all"
                    >
                        Explore GitHub <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-7">

                    {projects.map((project, index) => (
                        <motion.article
                            key={project.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group border border-white/10 rounded-2xl p-7 md:p-9 bg-[#0d120f] hover:border-green-400/50 transition duration-300 ${project.featured ? 'md:col-span-1' : ''
                                }`}
                        >
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-green-400 text-sm font-mono">
                                    / {project.number}
                                </span>

                                <Code2 className="text-gray-500 group-hover:text-green-400 transition" />
                            </div>

                            <p className="text-gray-500 text-sm mb-3">
                                {project.category}
                            </p>

                            <h3 className="text-2xl md:text-3xl font-bold mb-5 group-hover:text-green-400 transition">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 leading-7 mb-8 min-h-20">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-9">
                                {project.tech.map((technology) => (
                                    <span
                                        key={technology}
                                        className="text-xs px-3 py-2 rounded-full bg-white/5 text-gray-300 border border-white/10"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-6 border-t border-white/10 pt-6">

                                {project.demo ? (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-green-400 text-sm hover:text-green-300"
                                    >
                                        Live Demo <ExternalLink size={16} />
                                    </a>
                                ) : (
                                    <span className="text-gray-600 text-sm">
                                        No live demo
                                    </span>
                                )}

                                <a
                                    href="https://github.com/ANANDSAIVIVEK/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-gray-400 text-sm hover:text-white"
                                >
                                    GitHub <ArrowUpRight size={16} />
                                </a>

                            </div>
                        </motion.article>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Projects
