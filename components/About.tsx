'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A Computer Science student with strong technical skills and experience in full-stack development, 
            machine learning, and cloud architecture. Currently Lead Solutions Architect at OuterLabs Studio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 shadow-sm hover-lift"
          >
            <div className="flex items-center mb-6">
                              <div className="p-3 bg-gray-900 rounded-lg mr-4">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Stony Brook University
                </h4>
                <p className="text-gray-600 mb-2">
                  BS Computer Science and Applied Math/Statistics
                </p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    Expected May 2027
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    Stony Brook, NY
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">GPA:</span> 3.82/4.0
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Relevant Coursework</h5>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <span>• Operating Systems</span>
                  <span>• System Fundamentals</span>
                  <span>• OOD</span>
                  <span>• Networks</span>
                  <span>• Data Structures & Algorithms</span>
                  <span>• Linear Algebra</span>
                  <span>• Probability Theory</span>
                  <span>• Database Systems</span>
                  <span>• Graph Theory</span>
                  <span>• Analysis of Algorithms</span>
                  <span>• Discrete Mathematics</span>
                  <span>• Data Analysis</span>
                  <span>• Calculus I-III</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who I Am</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a Computer Science student at Stony Brook University with a strong foundation in 
                  computer science and applied mathematics. I have experience in full-stack development, 
                  machine learning, and cloud architecture, currently serving as Lead Solutions Architect 
                  at OuterLabs Studio.
                </p>
                <p>
                  My experience includes working on scalable systems at Amazon, machine learning projects 
                  at Sai AI, and leading technical solutions at OuterLabs Studio. I'm particularly skilled 
                  in React, Next.js, TypeScript, Node.js, and AWS cloud infrastructure.
                </p>
                <p>
                  I've architected systems serving 15,000+ users and implemented CI/CD pipelines that 
                  streamline deployments. My work has contributed to earning three industry awards and 
                  generating six-figure profits within the first year at OuterLabs Studio.
                </p>
              </div>
            </div>

            {/* Key Focus Areas */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Focus Areas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="text-2xl font-bold text-gray-900">Full-Stack Development</div>
                  <div className="text-sm text-gray-600">React, Next.js, TypeScript</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="text-2xl font-bold text-gray-900">Cloud Architecture</div>
                  <div className="text-sm text-gray-600">AWS, CI/CD, Microservices</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="text-2xl font-bold text-gray-900">Machine Learning</div>
                  <div className="text-sm text-gray-600">PyTorch, Transformers</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="text-2xl font-bold text-gray-900">3.82 GPA</div>
                  <div className="text-sm text-gray-600">Academic Excellence</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 