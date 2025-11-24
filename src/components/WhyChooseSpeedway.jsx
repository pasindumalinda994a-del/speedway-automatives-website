import React from 'react'
import { motion } from 'framer-motion'
import { Award, Clock, Users, MapPin, Shield, Star } from 'lucide-react'
import Marquee from '../utils/Marquee'

// Credentials data
const CREDENTIALS = [
  {
    icon: <Clock className="w-16 h-16" />,
    title: "30+ Years Experience",
    description: "Three decades of trusted automotive expertise"
  },
  {
    icon: <Award className="w-16 h-16" />,
    title: "VACC Certified",
    description: "Victorian Automotive Chamber of Commerce accredited"
  },
  {
    icon: <Users className="w-16 h-16" />,
    title: "Fleet Specialists",
    description: "Comprehensive commercial vehicle solutions"
  }
]

// Service areas
const SERVICE_AREAS = ["Dandenong", "Rowville", "Hampton Park", "Keysborough", "Noble Park"]

const WhyChooseSpeedway = () => {
  return (
    <div className='mt-32 mb-20' id='why-choose'>
      {/* Section Title */}
      <motion.div 
        className='ml-8 lg:ml-16 xl:ml-24 mb-20'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-blue-600 text-sm md:text-base lg:text-lg font-bold tracking-[0.25em] uppercase leading-relaxed text-center mb-6'>
          Why Choose Speedway
        </h2>
        
        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-center max-w-4xl mx-auto'
        >
          <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 tracking-tight'>
            Trusted automotive excellence across Melbourne's southeast
          </h3>
        </motion.div>
      </motion.div>

      {/* Main Content Container */}
      <div className='ml-8 lg:ml-16 xl:ml-24 mr-8 lg:mr-16 xl:mr-24'>
        
        {/* Credentials Section */}
        <motion.div 
          className='mb-32'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20'>
            {CREDENTIALS.map((credential, index) => (
              <motion.div 
                key={index}
                className='group text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div className='flex items-center justify-center mb-6'>
                  <div className='text-white'>
                    {credential.icon}
                  </div>
                </div>
                <h3 className='text-2xl lg:text-3xl font-black text-white mb-4 leading-tight'>
                  {credential.title}
                </h3>
                <p className='text-white/70 text-lg leading-relaxed max-w-xs mx-auto'>
                  {credential.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Service Areas with Marquee */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        
        
        {/* Marquee Animation */}
        <Marquee items={SERVICE_AREAS} speed={30} />
      </motion.div>
    </div>
  )
}

export default WhyChooseSpeedway