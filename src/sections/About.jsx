
import { motion } from 'framer-motion'

function About() {
    return (
        <section id="about" className="py-28 px-6">
            <div className="max-w-7xl mx-auto">

                <p className="text-green-400 uppercase tracking-widest text-sm mb-4">
                    Get to know me
                </p>

                <h2 className="text-4xl md:text-6xl font-bold mb-12">
                    About <span className="text-green-400">Me.</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">
                            Building solutions through code.
                        </h3>

                        <p className="text-gray-400 leading-8 mb-5">
                            I'm a Computer Science graduate with a strong interest
                            in software development, particularly Java and backend
                            development.
                        </p>

                        <p className="text-gray-400 leading-8 mb-5">
                            I enjoy developing practical applications, working
                            with databases, designing REST APIs and learning
                            technologies that solve real-world problems.
                        </p>

                        <p className="text-gray-400 leading-8">
                            My experience includes working with Java, Spring Boot,
                            React.js, Node.js and SQL through academic and personal
                            projects.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-5"
                    >
                        <div className="border border-white/10 p-7 rounded-2xl">
                            <h3 className="text-3xl font-bold text-green-400">2026</h3>
                            <p className="text-gray-400 mt-3">B.Tech Graduate</p>
                        </div>

                        <div className="border border-white/10 p-7 rounded-2xl">
                            <h3 className="text-3xl font-bold text-green-400">Java</h3>
                            <p className="text-gray-400 mt-3">Primary Language</p>
                        </div>

                        <div className="border border-white/10 p-7 rounded-2xl">
                            <h3 className="text-3xl font-bold text-green-400">4+</h3>
                            <p className="text-gray-400 mt-3">Development Projects</p>
                        </div>

                        <div className="border border-white/10 p-7 rounded-2xl">
                            <h3 className="text-3xl font-bold text-green-400">Full Stack</h3>
                            <p className="text-gray-400 mt-3">Development Interest</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default About
