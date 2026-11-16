
import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'

function Contact() {
    return (
        <section id="contact" className="py-28 px-6 bg-[#0d120f]">
            <div className="max-w-7xl mx-auto">

                <p className="text-green-400 uppercase tracking-widest text-sm mb-4">
                    Get in Touch
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold leading-tight max-w-4xl">
                        Have a project or opportunity?
                        <span className="text-green-400"> Let's connect.</span>
                    </h2>

                    <p className="text-gray-400 mt-8 max-w-xl leading-8">
                        I'm open to discussing entry-level software development
                        opportunities, collaborations and interesting projects.
                        Feel free to reach out.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-5 mt-14">

                        <a
                            href="mailto:anandsai9106@gmail.com"
                            className="border border-white/10 p-7 rounded-2xl hover:border-green-400 transition group"
                        >
                            <Mail className="text-green-400 mb-8" size={28} />
                            <h3 className="text-xl font-semibold mb-2">Email</h3>
                            <p className="text-gray-500 text-sm break-all">
                                anandsai9106@gmail.com
                            </p>
                            <ArrowUpRight className="text-gray-500 mt-5 group-hover:text-green-400" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/anand-sai-vivek-chandu/"
                            target="_blank"
                            rel="noreferrer"
                            className="border border-white/10 p-7 rounded-2xl hover:border-green-400 transition group"
                        >
                            <div className="text-green-400 text-2xl font-bold mb-8">in</div>
                            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                            <p className="text-gray-500 text-sm">Connect professionally</p>
                            <ArrowUpRight className="text-gray-500 mt-5 group-hover:text-green-400" />
                        </a>

                        <a
                            href="https://github.com/ANANDSAIVIVEK"
                            target="_blank"
                            rel="noreferrer"
                            className="border border-white/10 p-7 rounded-2xl hover:border-green-400 transition group"
                        >
                            <div className="text-green-400 text-xl font-bold mb-8">GitHub</div>
                            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                            <p className="text-gray-500 text-sm">Explore my repositories</p>
                            <ArrowUpRight className="text-gray-500 mt-5 group-hover:text-green-400" />
                        </a>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
