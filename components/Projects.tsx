'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Chiral Network',
    description: 'Decentralized, BitTorrent-like P2P file-sharing platform with DHT-based peer discovery and multi-source downloads.',
    features: [
      'Implemented DHT file-access request handling and pending request tracking',
      'Added download chunk integrity verification with tests and runtime checks',
    ],
    technologies: ['Rust', 'TypeScript', 'Svelte', 'P2P Networking', 'DHT'],
    github: 'https://github.com/cdandeniya',
    color: 'sky'
  },
  {
    title: 'Cruise',
    description: 'Voice-first iOS navigation app with turn-by-turn routing, real-time GPS tracking, and AI voice assistant.',
    features: [
      'AI voice assistant with speech-to-text and natural-language command handling',
      'Google Maps integration with real-time GPS tracking',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Google Maps API', 'OpenAI GPT-4', 'iOS'],
    github: 'https://github.com/cdandeniya',
    color: 'green'
  },
  {
    title: 'NovaTrade',
    description: 'Full-stack stock trading web application with role-based access control, portfolio tracking, and order execution.',
    features: [
      'Advanced order types (Market, Trailing Stop, Hidden Stop)',
      'Layered architecture with JDBC DAOs and MySQL',
    ],
    technologies: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'Tomcat', 'Maven'],
    github: 'https://github.com/cdandeniya',
    color: 'yellow'
  },
  {
    title: 'Fitness Tracker',
    description: 'A fitness-tracking web app with AI workout recommendations and nutrition logging.',
    features: [
      'User authentication and real-time data storage',
      'AI-driven workout suggestions',
    ],
    technologies: ['React', 'Firebase', 'MUI', 'Framer Motion', 'USDA API'],
    github: 'https://github.com/cdandeniya/strength-ai.git',
    color: 'purple'
  },
  {
    title: 'Sockets Battleship Server',
    description: 'A networked Battleship game server in C for real-time multiplayer gameplay.',
    features: [
      'Real-time multiplayer over sockets',
      'Memory leak prevention with Valgrind',
    ],
    technologies: ['C', 'C Sockets API', 'Valgrind', 'CLI'],
    github: 'https://github.com/cdandeniya/socket-battleship-server-new.git',
    color: 'orange'
  }
]

export default function Projects() {
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
              Projects
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-sky-400 via-blue-500 to-yellow-400 mt-2" />
        </motion.div>

        {/* Full-Width Alternating Layout */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            const gradientColors = {
              sky: 'from-sky-200 to-blue-300',
              green: 'from-green-200 to-emerald-300',
              yellow: 'from-yellow-200 to-amber-300',
              purple: 'from-purple-200 to-purple-300',
              orange: 'from-orange-200 to-orange-300'
            }

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 items-center`}>
                  {/* Visual Element */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className={`w-full md:w-1/2 h-48 md:h-64 bg-gradient-to-br ${gradientColors[project.color as keyof typeof gradientColors]} rounded-2xl flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="text-7xl md:text-8xl font-extrabold text-white/20">
                      {project.title.charAt(0)}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 space-y-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-sky-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-base md:text-lg font-light text-black/70 studio-text leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: isEven ? -10 : 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="text-sm md:text-base font-light text-black/60 flex items-start"
                        >
                          <span className="text-sky-400 mr-3 mt-1 flex-shrink-0">—</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies & Link */}
                    <div className="flex flex-col gap-3 pt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-light text-black/50 bg-black/5 border border-black/10 hover:border-black/30 hover:text-black/70 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 text-sm font-light text-black/60 hover:text-black transition-colors duration-300 group/link w-fit"
                      >
                        <Github size={16} />
                        View on GitHub
                        <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
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
