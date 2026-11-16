
function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 py-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">

                <a href="#home" className="text-xl font-bold">
                    Anand<span className="text-green-400">.</span>
                </a>

                <p className="text-gray-500 text-sm text-center">
                    Designed & Built by Anand
                </p>

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} All rights reserved.
                </p>

            </div>
        </footer>
    )
}

export default Footer
