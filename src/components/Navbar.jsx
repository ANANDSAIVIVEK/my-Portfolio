
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        ['Home', '#home'],
        ['About', '#about'],
        ['Skills', '#skills'],
        ['Projects', '#projects'],
        ['Contact', '#contact'],
        ['Education', '#education'],
        ['Certifications', '#certifications'],
    ]

    return (

        <nav className="fixed top-0 left-0 w-full z-50 bg-[#080b09]/90 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-2">
                    <img
                        src="/A.png"
                        alt="AS Logo"
                        className="w-10 h-10 object-contain"
                    />
                    <span className="text-xl font-bold">
                        Anand<span className="text-green-400">.</span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {links.map(([name, url]) => (
                        <a key={name} href={url}
                            className="text-sm text-gray-400 hover:text-green-400 transition">
                            {name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex gap-4">
                    <a href="https://github.com/ANANDSAIVIVEK" target="_blank" rel="noreferrer">
                        <span className="text-sm font-bold hover:text-green-400">
                            GitHub
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <span className="text-sm font-bold hover:text-green-400">
                            in
                        </span>
                    </a>
                </div>

                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col px-6 pb-5 gap-5">
                    {links.map(([name, url]) => (
                        <a key={name} href={url}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-300">
                            {name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
