'use client'

import { motion } from 'framer-motion'
import { Code, Server, Database, Cloud, TestTube, GitBranch } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'C/C++', level: 85 },
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'SQL', level: 90 }
    ],
    color: 'blue'
  },
  {
    title: 'Frameworks & Libraries',
    icon: Server,
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'Redux Toolkit', level: 80 }
    ],
    color: 'green'
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'ECS', level: 85 },
      { name: 'S3', level: 90 },
      { name: 'DynamoDB', level: 85 },
      { name: 'CI/CD', level: 90 }
    ],
    color: 'orange'
  },
  {
    title: 'Testing & Tools',
    icon: TestTube,
    skills: [
      { name: 'JUnit', level: 90 },
      { name: 'Mockito', level: 85 },
      { name: 'Pytest', level: 80 },
      { name: 'PyTorch', level: 75 },
      { name: 'GitHub', level: 95 }
    ],
    color: 'purple'
  },
  {
    title: 'Development Practices',
    icon: GitBranch,
    skills: [
      { name: 'Agile Development', level: 95 },
      { name: 'SCRUM', level: 90 },
      { name: 'Microservices', level: 90 },
      { name: 'Unit Testing', level: 95 },
      { name: 'Integration Testing', level: 90 }
    ],
    color: 'indigo'
  },
  {
    title: 'Other Skills',
    icon: Database,
    skills: [
      { name: 'Object-Oriented Programming', level: 95 },
      { name: 'Back-end Development', level: 90 },
      { name: 'Linux', level: 85 },
      { name: 'Jira', level: 90 },
      { name: 'System Design', level: 85 }
    ],
    color: 'teal'
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
            A comprehensive skill set spanning programming languages, frameworks, cloud infrastructure, 
            and development practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
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
                            className={`h-2 bg-${category.color}-600 rounded-full transition-all duration-300`}
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

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'System Architecture',
              'API Design',
              'Performance Optimization',
              'Security Best Practices',
              'Database Design',
              'DevOps',
              'Code Review',
              'Technical Leadership'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-sm font-medium text-gray-700">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 