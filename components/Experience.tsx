'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'Amazon',
    companyUrl: 'https://amazon.com',
    position: 'Junior Developer',
    location: 'Manhattan, NY',
    period: 'Oct 2021 - Oct 2024',
    description: 'Built and optimized scalable billing systems, modernized legacy infrastructure, and improved reliability for high-volume transactions.',
    achievements: [
      'Processed 10M+ transactions monthly with reduced error rates',
      'Migrated billing systems to AWS microservices',
      'Enhanced API reliability and led code reviews'
    ],
    technologies: ['Java', 'AWS', 'ECS', 'S3', 'DynamoDB', 'JUnit'],
    color: 'orange'
  },
  {
    company: 'OuterLabs Studio',
    companyUrl: 'https://outerlabs.studio',
    position: 'Lead Solutions Architect',
    location: 'Brooklyn, NY',
    period: 'Aug 2023 - Jun 2025',
    description: 'Led delivery of 15+ projects, designed scalable architectures, and managed cloud infrastructure for 15,000+ users.',
    achievements: [
      'Expanded client portfolio by 30%',
      'Built scalable front-end and backend solutions',
      'Integrated CI/CD pipelines and won industry awards'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    color: 'blue'
  },
  {
    company: 'Sai AI',
    companyUrl: 'https://trysai.com/',
    position: 'Machine Learning Intern',
    location: 'Ithaca, NY',
    period: 'Aug 2024 - Dec 2024',
    description: 'Fine-tuned large language models and deployed fast inference services on AWS.',
    achievements: [
      'Reduced model perplexity by 9%',
      'Deployed FastAPI inference to AWS ECS',
      'Logged and tracked 25+ training runs'
    ],
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'Docker'],
    color: 'purple'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white relative">
      <div className="container-studio">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-gradient-to-b from-sky-400 to-blue-500" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
              Experience
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-sky-400 via-blue-500 to-yellow-400 mt-2" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white shadow-lg p-8 flex flex-col hover:shadow-2xl transition-all duration-500"
              >
                {/* Company Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-sky-600 transition-colors duration-300">
                    {exp.position}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-light text-black/60 hover:text-black transition-colors duration-300 group/link"
                  >
                    {exp.company}
                    <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                  <div className="text-sm font-light text-black/40 mt-2">
                    {exp.period} • {exp.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-base font-light text-black/60 studio-text mb-6 flex-grow">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-xs font-light tracking-[0.2em] uppercase text-black/40 mb-3">Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="text-sm font-light text-black/60 flex items-start"
                      >
                        <span className="text-sky-400 mr-2 mt-1">—</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-light tracking-[0.2em] uppercase text-black/40 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-light text-black/60 bg-black/5 border border-black/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
