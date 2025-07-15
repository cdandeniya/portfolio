'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { FileText } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Open to new opportunities, projects, and collaborations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Email Card - Entire card clickable */}
            <motion.a
              href="mailto:cdandeniya1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="block text-center p-6 bg-gray-50 rounded-xl cursor-pointer hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-3 bg-gray-900 rounded-lg mx-auto mb-4 w-fit">
                <Mail size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <span className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                cdandeniya1@gmail.com
              </span>
            </motion.a>

            {/* Location Card - not clickable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="p-3 bg-gray-900 rounded-lg mx-auto mb-4 w-fit">
                <MapPin size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
              <p className="text-gray-600">NYC</p>
            </motion.div>

            {/* Resume Card - Entire card clickable */}
            <motion.a
              href="/Chanul Dandeniya Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="block text-center p-6 bg-gray-50 rounded-xl cursor-pointer hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-3 bg-gray-900 rounded-lg mx-auto mb-4 w-fit">
                <FileText size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Resume</h4>
              <span className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Download PDF
              </span>
            </motion.a>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="font-semibold text-gray-900 mb-6">Follow Me</h4>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com/cdandeniya"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                <Github size={28} className="text-gray-700" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/cdandeniya/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                <Linkedin size={28} className="text-gray-700" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 