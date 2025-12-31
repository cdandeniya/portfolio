'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'React/Next.js', level: 90 },
      { name: 'Node.js', level: 90 }
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'CI/CD', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Linux', level: 85 }
    ],
  },
  {
    title: 'Practices & Tools',
    skills: [
      { name: 'Agile/SCRUM', level: 90 },
      { name: 'Unit/Integration Testing', level: 90 },
      { name: 'GitHub', level: 95 },
      { name: 'System Design', level: 85 }
    ],
  }
]

const awards = [
  {
    name: "Baigent Memorial Scholarship",
    years: "2024, 2025",
    institution: "Stony Brook University"
  },
  {
    name: "Dean's Merit Fund for Engineering",
    years: "2024",
    institution: "Stony Brook University"
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white relative">
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
              Skills & Expertise
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-sky-400 via-blue-500 to-yellow-400 mt-2" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="bg-white shadow-lg p-8 h-full hover:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-black mb-8 group-hover:text-sky-600 transition-colors duration-300">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-light text-black/70">
                          {skill.name}
                        </span>
                        <span className="text-xs font-light text-black/40">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-black/5 h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="h-1.5 bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Honors & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-black/10 pt-16"
        >
          <h3 className="text-3xl font-bold text-black mb-12 flex items-center gap-3">
            <Award size={32} className="text-yellow-400" />
            Honors & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, idx) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="border-l-4 border-yellow-400 pl-6"
              >
                <span className="text-xl font-light text-black mb-2 block">{award.name}</span>
                <span className="text-sm font-light text-black/50 mb-1 block">{award.years}</span>
                <span className="text-xs font-light text-black/40">{award.institution}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
