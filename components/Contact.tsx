'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm open to discussing new opportunities, interesting projects, 
            or technology collaborations. Currently Lead Solutions Architect at OuterLabs Studio.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm passionate about technology and always excited to connect with like-minded individuals. 
              Whether you're interested in collaboration, new opportunities, or want to discuss 
              interesting projects, I'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="p-3 bg-gray-900 rounded-lg mx-auto mb-4 w-fit">
                <Mail size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <a 
                href="mailto:cdandeniya1@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                cdandeniya1@gmail.com
              </a>
            </motion.div>

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
              <p className="text-gray-600">Brooklyn, NY</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="p-3 bg-gray-900 rounded-lg mx-auto mb-4 w-fit">
                <Phone size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <p className="text-gray-600">Available upon request</p>
            </motion.div>
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