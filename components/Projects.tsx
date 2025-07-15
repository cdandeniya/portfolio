'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Database, Cpu } from 'lucide-react'

const projects = [
  {
    title: 'Fitness Tracker',
    description: 'A responsive fitness-tracking web application enabling users to log workouts & meals, fetch nutrition data from the USDA FoodData API, and receive AI-driven workout recommendations.',
    features: [
      'User authentication and real-time data storage with Firebase',
      'Integration with USDA FoodData API for nutrition information',
      'AI-driven workout recommendations and progress tracking',
      'Dark-mode theming and smooth animations with Framer Motion',
      'Responsive design optimized for all devices'
    ],
    technologies: ['React', 'Firebase', 'MUI', 'Framer Motion', 'USDA API'],
    github: 'https://github.com/cdandeniya/fitness-tracker',
    live: '#',
    icon: Code,
    color: 'blue'
  },
  {
    title: 'Online Stock Trading System',
    description: 'A comprehensive online stock trading platform with relational database design, role-based access control, and real-time transaction capabilities.',
    features: [
      'Relational database design with MySQL for data integrity',
      'Role-based access control for customers, brokers, and managers',
      'Real-time stock transactions and secure order placements',
      'Transactional integrity using SQL commit/rollback mechanisms',
      'Dynamic web-based interface with JavaScript and HTML'
    ],
    technologies: ['Java', 'JavaScript', 'JDBC', 'MySQL', 'HTML'],
    github: 'https://github.com/cdandeniya/stock-trading-system',
    live: '#',
    icon: Database,
    color: 'green'
  },
  {
    title: 'Sockets Battleship Server',
    description: 'A networked Battleship game in C using the Sockets API, enabling real-time gameplay between two clients connected to a centralized server.',
    features: [
      'Real-time multiplayer gameplay over network connections',
      'Optimized data structures with dynamic memory management',
      'Memory leak prevention verified with Valgrind',
      'Automated test suite with interactive CLI',
      'Server administration and real-time game monitoring'
    ],
    technologies: ['C', 'C Sockets API', 'Valgrind', 'CLI'],
    github: 'https://github.com/cdandeniya/socket-battleship-server-new',
    live: '#',
    icon: Cpu,
    color: 'purple'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Technical projects and entrepreneurial ventures showcasing my skills in software development, 
            AI/ML, and building innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift h-full">
                  {/* Project Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-${project.color}-600 rounded-lg mr-4`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-${project.color}-100 text-${project.color}-800`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4 pt-4 border-t border-gray-100">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/cdandeniya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 