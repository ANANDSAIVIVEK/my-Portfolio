
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <section id="home"
            className="min-h-screen flex items-center px-6 pt-24">

            <div className="max-w-7xl mx-auto w-full">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 tracking-widest uppercase text-sm mb-6">
                    Welcome to my portfolio
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-8xl font-bold leading-tight">

                    Hi, I'm Anand.
                    <br />

                    <span className="text-green-400">
                        Java Developer
                    </span>
                </motion.h1>

                <p className="text-gray-400 text-lg max-w-2xl mt-8 leading-relaxed">
                    Computer Science graduate passionate about building
                    scalable applications and solving real-world problems
                    through technology.
                </p>

                <div className="flex flex-wrap gap-5 mt-10">

                    <a href="#projects"
                        className="bg-green-400 text-black px-7 py-4 rounded-full font-semibold hover:bg-green-300 transition flex items-center gap-2">
                        Explore My Work <ArrowUpRight size={18} />
                    </a>

                    <a href="/resume.pdf"
                        download
                        className="border border-white/20 px-7 py-4 rounded-full flex items-center gap-2 hover:border-green-400 transition">
                        Resume <Download size={18} />
                    </a>

                </div>

                <a href="#about"
                    className="inline-flex items-center gap-3 text-gray-500 mt-20 hover:text-green-400 transition">
                    Scroll to explore <ArrowDown size={18} />
                </a>

            </div>
        </section>
    )
}

export default Hero
