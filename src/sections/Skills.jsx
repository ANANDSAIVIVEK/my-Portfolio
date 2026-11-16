
import { motion } from 'framer-motion'

const skillGroups = [
    {
        title: 'Programming Languages',
        skills: ['Java', 'JavaScript', 'Python', 'SQL'],
    },
    {
        title: 'Frontend Development',
        skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
    },
    {
        title: 'Backend Development',
        skills: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs'],
    },
    {
        title: 'Databases',
        skills: ['MySQL', 'MongoDB'],
    },
    {
        title: 'Tools & Platforms',
        skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Postman'],
    },
]

function Skills() {
    return (
        <section id="skills" className="py-28 px-6 bg-[#0d120f]">
            <div className="max-w-7xl mx-auto">

                <p className="text-green-400 uppercase tracking-widest text-sm mb-4">
                    My Expertise
                </p>

                <h2 className="text-4xl md:text-6xl font-bold mb-16">
                    Technical <span className="text-green-400">Skills.</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl p-7 hover:border-green-400/50 transition"
                        >
                            <h3 className="text-xl font-semibold mb-7">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-sm border border-white/10 hover:bg-green-400 hover:text-black transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skills
