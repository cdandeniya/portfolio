'use client'

import { motion } from 'framer-motion'
import { Code, Server, Cloud, GitBranch, Award } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code,
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'React/Next.js', level: 90 },
      { name: 'Node.js', level: 90 }
    ],
    color: 'blue'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'CI/CD', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Linux', level: 85 }
    ],
    color: 'amber'
  },
  {
    title: 'Practices & Tools',
    icon: GitBranch,
    skills: [
      { name: 'Agile/SCRUM', level: 90 },
      { name: 'Unit/Integration Testing', level: 90 },
      { name: 'GitHub', level: 95 },
      { name: 'System Design', level: 85 }
    ],
    color: 'purple'
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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Key skills in software engineering, cloud, and product development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            const colorClass = {
              blue: 'bg-blue-600',
              amber: 'bg-amber-600',
              purple: 'bg-purple-600'
            }[category.color] || 'bg-gray-400';
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift h-full">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-${category.color}-600 rounded-lg mr-4`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-2 ${colorClass} rounded-full transition-all duration-300`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Honors & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
            <Award size={24} className="text-yellow-500" /> Honors & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, idx) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start bg-gray-50 rounded-lg p-4 border border-gray-100"
              >
                <span className="text-lg font-semibold text-gray-800 mb-1">{award.name}</span>
                <span className="text-sm text-gray-500 mb-1">{award.years}</span>
                <span className="text-xs text-gray-400">{award.institution}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 