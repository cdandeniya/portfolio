'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'OuterLabs Studio',
    position: 'Lead Solutions Architect',
    location: 'Brooklyn, NY',
    period: 'Aug 2023 - Jun 2025',
    description: 'Expanded client portfolio by 30% through strategic acquisition plans, securing high-value accounts and fostering long-term partnerships.',
    achievements: [
      'Delivered 15+ projects under tight deadlines, ensuring optimal quality and client satisfaction',
      'Designed and built scalable front-end architectures using React, Next.js, and TypeScript',
      'Architected robust backend solutions with Node.js and PostgreSQL, optimizing performance',
      'Maintained on-premise and AWS Cloud server infrastructure for 15,000+ users',
      'Integrated CI/CD pipelines with GitHub Actions to streamline deployments',
      'Contributed to OuterLabs\' success, earning three industry awards and generating six-figure profits'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'GitHub Actions'],
    color: 'blue'
  },
  {
    company: 'Sai AI',
    position: 'Machine Learning Intern',
    location: 'Ithaca, NY',
    period: 'Aug 2024 - Dec 2024',
    description: 'Assisted in fine-tuning 3B-parameter open-source language models, reducing validation perplexity by 9% versus the base model.',
    achievements: [
      'Assisted in fine-tuning 3B-parameter open-source language models (Hugging Face Transformers & PyTorch Lightning)',
      'Reduced validation perplexity by 9% versus the base model',
      'Containerized and deployed a FastAPI inference service to AWS ECS with Docker',
      'Achieved <500ms median latency at 10 QPS',
      'Logged metrics with Weights & Biases, enabling the team to track 25+ training runs'
    ],
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'Docker', 'AWS ECS', 'Weights & Biases'],
    color: 'purple'
  },
  {
    company: 'Amazon',
    position: 'Junior Developer',
    location: 'Manhattan, NY',
    period: 'Oct 2021 - Oct 2024',
    description: 'Designed and implemented a scalable billing system processing 10M+ transactions monthly, reducing error rates by 35%.',
    achievements: [
      'Designed and implemented a scalable billing system processing 10M+ transactions monthly',
      'Optimized RESTful payment execution APIs to decrease latency for advertisers',
      'Spearheaded migration of legacy billing systems to microservices architecture on AWS',
      'Improved maintainability and reduced downtime by 45% through system modernization',
      'Enhanced API reliability by designing and executing 150+ unit and integration tests',
      'Collaborated with cross-functional teams of 12 developers and performed 30+ code reviews'
    ],
    technologies: ['Java', 'AWS', 'ECS', 'S3', 'DynamoDB', 'JUnit', 'Mockito', 'Pytest', 'Microservices'],
    color: 'orange'
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
                          <span className="font-semibold">{exp.company}</span>
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