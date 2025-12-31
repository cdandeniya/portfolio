'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'Saiera',
    companyUrl: '#',
    position: 'Software Development Intern',
    location: 'Remote',
    period: 'Jun 2025 – Aug 2025',
    description: 'Built multimodal chatbot using GPT-4o API for personalized student Q&A and content generation from course materials.',
    achievements: [
      'Developed document ingestion pipeline processing 100+ files daily',
      'Built scalable system using AWS S3, Firebase, and MongoDB'
    ],
    technologies: ['Python', 'GPT-4o', 'AWS', 'Firebase', 'MongoDB'],
  },
  {
    company: 'Research Lab',
    companyUrl: '#',
    position: 'Lead Undergraduate Researcher',
    location: 'Stony Brook, NY',
    period: 'Jan 2025 – May 2025',
    description: 'Implemented real-time human-activity recognition on edge devices using TensorFlow Lite and OpenCV.',
    achievements: [
      'Led team of 4 in weekly design meetings',
      'Built motion classification system for low-power devices'
    ],
    technologies: ['Python', 'TensorFlow Lite', 'OpenCV'],
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
      'Won industry awards for technical excellence'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS'],
  },
  {
    company: 'Amazon',
    companyUrl: 'https://amazon.com',
    position: 'Software Engineering Apprentice',
    location: 'Manhattan, NY',
    period: 'Oct 2021 - Oct 2024',
    description: 'Contributed to backend services for large-scale billing and payment APIs, implementing cross-service integrations on AWS.',
    achievements: [
      'Migrated legacy workflows to microservices, reducing retry incidents by 8%',
      'Improved test coverage by 15% and performed 40+ code reviews'
    ],
    technologies: ['Java', 'AWS', 'DynamoDB', 'JUnit'],
  },
  {
    company: 'Amazon Alexa-Speech',
    companyUrl: 'https://amazon.com',
    position: 'Fellow',
    location: 'Remote',
    period: 'Jun 2021 - Oct 2021',
    description: 'Supported Alexa speech-processing features through keyword-processing and data pipeline optimization.',
    achievements: [
      'Improved latency and throughput across distributed microservices'
    ],
    technologies: ['Java', 'Microservices'],
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

        {/* Timeline Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-blue-500 to-yellow-400 hidden md:block" />

            <div className="space-y-16 md:space-y-24">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-20 md:pl-32"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-10 top-2 w-4 h-4 bg-white border-4 border-sky-400 rounded-full shadow-lg hidden md:block" />

                  {/* Content */}
                  <div className="group">
                    {/* Date & Location */}
                    <div className="mb-4">
                      <div className="text-xs font-light tracking-[0.2em] uppercase text-black/40 mb-2">
                        {exp.period}
                      </div>
                      <div className="text-sm font-light text-black/50">
                        {exp.location}
                      </div>
                    </div>

                    {/* Position & Company */}
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-sky-600 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      {exp.companyUrl !== '#' ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-lg md:text-xl font-light text-black/60 hover:text-black transition-colors duration-300 group/link"
                        >
                          {exp.company}
                          <ExternalLink size={16} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <div className="text-lg md:text-xl font-light text-black/60">
                          {exp.company}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg font-light text-black/70 studio-text mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="text-sm md:text-base font-light text-black/60 flex items-start"
                          >
                            <span className="text-sky-400 mr-3 mt-1.5 flex-shrink-0">—</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-light text-black/50 bg-black/5 border border-black/10 hover:border-black/30 hover:text-black/70 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
