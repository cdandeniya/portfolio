'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'Fitness Tracker',
    description: 'A fitness-tracking web app with AI workout recommendations and nutrition logging.',
    features: [
      'User authentication and real-time data storage',
      'Nutrition info from USDA API',
      'AI-driven workout suggestions',
    ],
    technologies: ['React', 'Firebase', 'MUI', 'Framer Motion', 'USDA API'],
    github: 'https://github.com/cdandeniya/strength-ai.git',
    color: 'sky'
  },
  {
    title: 'Online Stock Trading System',
    description: 'A stock trading platform with real-time transactions and role-based access.',
    features: [
      'MySQL database design',
      'Role-based access for users',
      'Real-time stock transactions',
    ],
    technologies: ['Java', 'JavaScript', 'JDBC', 'MySQL', 'HTML'],
    github: 'https://github.com/cdandeniya/stock-trader.git',
    color: 'green'
  },
  {
    title: 'Sockets Battleship Server',
    description: 'A networked Battleship game server in C for real-time multiplayer gameplay.',
    features: [
      'Real-time multiplayer over sockets',
      'Memory leak prevention with Valgrind',
      'Automated CLI test suite',
    ],
    technologies: ['C', 'C Sockets API', 'Valgrind', 'CLI'],
    github: 'https://github.com/cdandeniya/socket-battleship-server-new.git',
    color: 'yellow'
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="section-padding bg-white relative">
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
              Meet my Projects
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-sky-400 via-blue-500 to-yellow-400 mt-2" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative overflow-hidden bg-white shadow-lg ${
                    isHovered ? 'ring-4 ring-yellow-400' : ''
                  } transition-all duration-500`}
                >
                  {/* Project Image Placeholder - Using gradient based on color */}
                  <div className={`h-64 bg-gradient-to-br ${
                    project.color === 'sky' ? 'from-sky-200 to-blue-300' :
                    project.color === 'green' ? 'from-green-200 to-emerald-300' :
                    'from-yellow-200 to-amber-300'
                  } relative overflow-hidden`}>
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="text-6xl font-extrabold text-white/20">
                        {project.title.charAt(0)}
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-sky-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-base font-light text-black/60 mb-4 studio-text line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-light text-black/60 bg-black/5 border border-black/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs font-light text-black/40">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Code Button */}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium tracking-wider uppercase hover:bg-black/90 transition-all duration-300 w-full justify-center group/btn"
                    >
                      <Github size={16} />
                      View Code
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        className="inline-block"
                      >
                        <ExternalLink size={14} />
                      </motion.span>
                    </motion.a>
                  </div>

                  {/* Hover Overlay Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 0.05 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/cdandeniya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black text-black text-sm font-medium tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300"
          >
            <Github size={18} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
