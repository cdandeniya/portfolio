'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Software development internships and entrepreneurial ventures that have shaped my technical skills.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden lg:block" />
              
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
                {/* Timeline Dot */}
                <div className="hidden lg:block lg:col-span-1">
                  <div className={`w-4 h-4 rounded-full bg-${exp.color}-600 border-4 border-white shadow-lg`} />
                </div>

                {/* Content */}
                <div className="lg:col-span-11">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.position}
                        </h3>
                        <div className="flex items-center text-lg text-gray-600 mb-2">
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline hover:text-blue-600 transition-colors"
                          >
                            {exp.company}
                          </a>
                          <ExternalLink size={16} className="ml-2 text-gray-400" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 space-y-1 sm:space-y-0 sm:space-x-4">
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {exp.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start text-gray-600"
                          >
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`px-3 py-1 rounded-full text-sm font-medium bg-${exp.color}-100 text-${exp.color}-800`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 