
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
    {
        degree: 'Bachelor of Technology',
        field: 'Computer Science and Engineering',
        institution: 'Ramachandra College of Engineering',
        location: 'Eluru, Andhra Pradesh',
        duration: 'Aug 2023 – Apr 2026',
        score: 'CGPA: 7.61',
    },
    {
        degree: 'Diploma',
        field: 'Computer Science and Engineering',
        institution: 'Sir C.R. Reddy Polytechnic',
        location: 'Eluru, Andhra Pradesh',
        duration: 'Dec 2020 – Jun 2023',
        score: 'Percentage: 78.9%',
    },
]

function Education() {
    return (
        <section id="education" className="py-28 px-6 bg-[#0d120f]">
            <div className="max-w-7xl mx-auto">

                <p className="text-green-400 uppercase tracking-widest text-sm mb-4">
                    Academic Background
                </p>

                <h2 className="text-4xl md:text-6xl font-bold mb-16">
                    My <span className="text-green-400">Education.</span>
                </h2>

                <div className="space-y-7">
                    {education.map((item, index) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="flex flex-col md:flex-row gap-6 border border-white/10 rounded-2xl p-7 md:p-9 hover:border-green-400/50 transition"
                        >
                            <div className="w-14 h-14 shrink-0 rounded-xl bg-green-400/10 flex items-center justify-center">
                                <GraduationCap className="text-green-400" size={28} />
                            </div>

                            <div className="flex-1">
                                <p className="text-green-400 text-sm mb-2">
                                    {item.duration}
                                </p>

                                <h3 className="text-2xl font-bold mb-2">
                                    {item.degree}
                                </h3>

                                <p className="text-gray-300 mb-3">
                                    {item.field}
                                </p>

                                <p className="text-gray-400">
                                    {item.institution}
                                </p>

                                <p className="text-gray-500 text-sm mt-1">
                                    {item.location}
                                </p>
                            </div>

                            <div className="md:self-center">
                                <span className="inline-block px-4 py-2 rounded-full bg-green-400/10 text-green-400 text-sm">
                                    {item.score}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Education
