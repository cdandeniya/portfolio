'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { memo } from 'react'

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
    website: 'https://deploy-preview-1--chiral-network.netlify.app/',
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
    website: 'https://stock-trader-production-835b.up.railway.app/index.jsp',
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

function Projects() {
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
                    className={`w-full md:w-1/2 h-48 md:h-64 bg-gradient-to-br ${gradientColors[project.color as keyof typeof gradientColors]} rounded-2xl flex items-center justify-center relative overflow-hidden p-8`}
                  >
                    {project.title === 'Chiral Network' && (
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        {/* Central hub */}
                        <circle cx="100" cy="100" r="18" fill="white" opacity="0.95" />
                        <circle cx="100" cy="100" r="12" fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
                        <circle cx="100" cy="100" r="6" fill="white" opacity="1" />
                        
                        {/* Outer nodes */}
                        <circle cx="40" cy="60" r="10" fill="white" opacity="0.9" />
                        <circle cx="160" cy="60" r="10" fill="white" opacity="0.9" />
                        <circle cx="40" cy="140" r="10" fill="white" opacity="0.9" />
                        <circle cx="160" cy="140" r="10" fill="white" opacity="0.9" />
                        <circle cx="60" cy="40" r="10" fill="white" opacity="0.9" />
                        <circle cx="140" cy="160" r="10" fill="white" opacity="0.9" />
                        
                        {/* Connection lines */}
                        <line x1="100" y1="100" x2="40" y2="60" stroke="white" strokeWidth="2.5" opacity="0.7" />
                        <line x1="100" y1="100" x2="160" y2="60" stroke="white" strokeWidth="2.5" opacity="0.7" />
                        <line x1="100" y1="100" x2="40" y2="140" stroke="white" strokeWidth="2.5" opacity="0.7" />
                        <line x1="100" y1="100" x2="160" y2="140" stroke="white" strokeWidth="2.5" opacity="0.7" />
                        <line x1="100" y1="100" x2="60" y2="40" stroke="white" strokeWidth="2.5" opacity="0.7" />
                        <line x1="100" y1="100" x2="140" y2="160" stroke="white" strokeWidth="2.5" opacity="0.7" />
                        
                        {/* Inter-node connections */}
                        <line x1="40" y1="60" x2="160" y2="60" stroke="white" strokeWidth="1.5" opacity="0.4" />
                        <line x1="40" y1="60" x2="40" y2="140" stroke="white" strokeWidth="1.5" opacity="0.4" />
                        <line x1="60" y1="40" x2="40" y2="60" stroke="white" strokeWidth="1.5" opacity="0.4" />
                      </svg>
                    )}
                    {project.title === 'Cruise' && (
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        {/* Map background */}
                        <rect x="20" y="20" width="160" height="160" rx="8" fill="white" opacity="0.15" />
                        
                        {/* Roads/paths */}
                        <path d="M40 100 Q100 60 160 100" stroke="white" strokeWidth="3" fill="none" opacity="0.6" />
                        <path d="M100 40 Q100 100 100 160" stroke="white" strokeWidth="3" fill="none" opacity="0.6" />
                        
                        {/* Location markers */}
                        <circle cx="40" cy="100" r="8" fill="white" opacity="0.9" />
                        <circle cx="100" cy="60" r="8" fill="white" opacity="0.9" />
                        <circle cx="160" cy="100" r="8" fill="white" opacity="0.9" />
                        
                        {/* Navigation compass */}
                        <circle cx="100" cy="100" r="30" fill="white" opacity="0.2" />
                        <circle cx="100" cy="100" r="25" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
                        <path d="M100 75 L105 90 L100 85 L95 90 Z" fill="white" opacity="0.9" />
                        <circle cx="100" cy="100" r="4" fill="white" opacity="0.9" />
                        
                        {/* Direction indicator */}
                        <line x1="100" y1="100" x2="100" y2="75" stroke="white" strokeWidth="2.5" opacity="0.8" />
                      </svg>
                    )}
                    {project.title === 'NovaTrade' && (
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        {/* Grid background */}
                        <defs>
                          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
                          </pattern>
                        </defs>
                        <rect width="200" height="200" fill="url(#grid)" />
                        
                        {/* Main chart line */}
                        <polyline points="30,160 50,140 70,120 90,100 110,85 130,75 150,65 170,55" 
                          fill="none" stroke="white" strokeWidth="4" opacity="0.95" strokeLinecap="round" strokeLinejoin="round" />
                        
                        {/* Secondary chart line */}
                        <polyline points="30,160 50,145 70,130 90,115 110,105 130,95 150,90 170,85" 
                          fill="none" stroke="white" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
                        
                        {/* Data points */}
                        <circle cx="30" cy="160" r="5" fill="white" opacity="0.9" />
                        <circle cx="50" cy="140" r="5" fill="white" opacity="0.9" />
                        <circle cx="70" cy="120" r="5" fill="white" opacity="0.9" />
                        <circle cx="90" cy="100" r="5" fill="white" opacity="0.9" />
                        <circle cx="110" cy="85" r="5" fill="white" opacity="0.9" />
                        <circle cx="130" cy="75" r="5" fill="white" opacity="0.9" />
                        <circle cx="150" cy="65" r="5" fill="white" opacity="0.9" />
                        <circle cx="170" cy="55" r="6" fill="white" opacity="1" />
                        
                        {/* Baseline */}
                        <line x1="25" y1="160" x2="175" y2="160" stroke="white" strokeWidth="2" opacity="0.4" />
                        
                        {/* Volume bars */}
                        <rect x="45" y="165" width="8" height="15" fill="white" opacity="0.5" />
                        <rect x="65" y="165" width="8" height="20" fill="white" opacity="0.5" />
                        <rect x="85" y="165" width="8" height="25" fill="white" opacity="0.5" />
                        <rect x="105" y="165" width="8" height="30" fill="white" opacity="0.5" />
                        <rect x="125" y="165" width="8" height="35" fill="white" opacity="0.5" />
                        <rect x="145" y="165" width="8" height="40" fill="white" opacity="0.5" />
                      </svg>
                    )}
                    {project.title === 'Fitness Tracker' && (
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        {/* Watch body */}
                        <rect x="50" y="30" width="100" height="140" rx="20" fill="white" opacity="0.95" />
                        <rect x="60" y="40" width="80" height="120" rx="15" fill="none" stroke="white" strokeWidth="2.5" opacity="0.6" />
                        
                        {/* Watch band */}
                        <rect x="70" y="20" width="60" height="15" rx="7" fill="white" opacity="0.9" />
                        <rect x="70" y="165" width="60" height="15" rx="7" fill="white" opacity="0.9" />
                        
                        {/* Display area */}
                        <rect x="65" y="50" width="70" height="100" rx="8" fill="white" opacity="0.3" />
                        
                        {/* Activity rings */}
                        <circle cx="100" cy="80" r="25" fill="none" stroke="white" strokeWidth="4" opacity="0.8" strokeDasharray="120 40" />
                        <circle cx="100" cy="80" r="20" fill="none" stroke="white" strokeWidth="3" opacity="0.7" strokeDasharray="100 30" />
                        <circle cx="100" cy="80" r="15" fill="white" opacity="0.6" />
                        
                        {/* Heart rate */}
                        <path d="M75 120 Q85 110 95 115 T115 120" stroke="white" strokeWidth="3" fill="none" opacity="0.9" />
                        <circle cx="75" cy="120" r="2" fill="white" opacity="0.9" />
                        <circle cx="115" cy="120" r="2" fill="white" opacity="0.9" />
                        
                        {/* Steps indicator */}
                        <rect x="80" y="135" width="40" height="8" rx="4" fill="white" opacity="0.8" />
                        <rect x="80" y="135" width="28" height="8" rx="4" fill="white" opacity="1" />
                      </svg>
                    )}
                    {project.title === 'Sockets Battleship Server' && (
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        {/* Server rack */}
                        <rect x="60" y="40" width="80" height="120" rx="4" fill="white" opacity="0.95" />
                        <rect x="65" y="45" width="70" height="110" rx="2" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
                        
                        {/* Server units */}
                        <rect x="70" y="55" width="60" height="12" rx="1" fill="white" opacity="0.8" />
                        <rect x="70" y="72" width="60" height="12" rx="1" fill="white" opacity="0.8" />
                        <rect x="70" y="89" width="60" height="12" rx="1" fill="white" opacity="0.8" />
                        <rect x="70" y="106" width="60" height="12" rx="1" fill="white" opacity="0.8" />
                        <rect x="70" y="123" width="60" height="12" rx="1" fill="white" opacity="0.8" />
                        
                        {/* Status lights */}
                        <circle cx="75" cy="61" r="2" fill="white" opacity="1" />
                        <circle cx="75" cy="78" r="2" fill="white" opacity="1" />
                        <circle cx="75" cy="95" r="2" fill="white" opacity="1" />
                        <circle cx="75" cy="112" r="2" fill="white" opacity="1" />
                        <circle cx="75" cy="129" r="2" fill="white" opacity="1" />
                        
                        {/* Network connections */}
                        <line x1="20" y1="100" x2="60" y2="100" stroke="white" strokeWidth="3" opacity="0.7" />
                        <line x1="140" y1="100" x2="180" y2="100" stroke="white" strokeWidth="3" opacity="0.7" />
                        <line x1="20" y1="100" x2="20" y2="80" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="20" y1="100" x2="20" y2="120" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="180" y1="100" x2="180" y2="80" stroke="white" strokeWidth="2" opacity="0.6" />
                        <line x1="180" y1="100" x2="180" y2="120" stroke="white" strokeWidth="2" opacity="0.6" />
                        
                        {/* Connection nodes */}
                        <circle cx="20" cy="100" r="6" fill="white" opacity="0.9" />
                        <circle cx="180" cy="100" r="6" fill="white" opacity="0.9" />
                        <circle cx="20" cy="80" r="4" fill="white" opacity="0.8" />
                        <circle cx="20" cy="120" r="4" fill="white" opacity="0.8" />
                        <circle cx="180" cy="80" r="4" fill="white" opacity="0.8" />
                        <circle cx="180" cy="120" r="4" fill="white" opacity="0.8" />
                      </svg>
                    )}
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

                    {/* Technologies & Links */}
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
                      <div className="flex flex-wrap gap-4">
                        {project.website && (
                          <motion.a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 text-sm font-light text-black/60 hover:text-black transition-colors duration-300 group/link"
                          >
                            <ExternalLink size={16} />
                            Visit Website
                            <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </motion.a>
                        )}
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-2 text-sm font-light text-black/60 hover:text-black transition-colors duration-300 group/link"
                        >
                          <Github size={16} />
                          View on GitHub
                          <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </motion.a>
                      </div>
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

export default memo(Projects)
