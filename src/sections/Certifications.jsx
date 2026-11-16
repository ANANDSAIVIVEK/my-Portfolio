
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'ServiceNow Certified Application Developer',
    organization: 'ServiceNow',
    year: '2026',
    description: 'Application development and platform customization.',
  },
  {
    title: 'Azure AI Fundamentals / AI Azure Training',
    organization: 'Microsoft / AICTE',
    year: '2025',
    description: 'Fundamentals of artificial intelligence and Azure AI services.',
  },
  {
    title: 'Internet of Things',
    organization: 'NPTEL',
    year: '2025',
    description: 'Coursework covering Internet of Things concepts.',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-green-400 uppercase tracking-widest text-sm mb-4">
          Learning & Achievements
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Certifications<span className="text-green-400">.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="border border-white/10 rounded-2xl p-7 hover:border-green-400/50 transition"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center">
                  <Award className="text-green-400" size={25} />
                </div>

                <span className="text-gray-500 text-sm">
                  {cert.year}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">
                {cert.title}
              </h3>

              <p className="text-green-400 text-sm mb-4">
                {cert.organization}
              </p>

              <p className="text-gray-400 text-sm leading-7">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certifications
