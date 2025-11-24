import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import service1 from '../assets/service1.webp';
import service2 from '../assets/service2.webp';  
import service3 from '../assets/service3.webp';
import service4 from '../assets/service4.webp';
import service5 from '../assets/service5.webp';
import service6 from '../assets/service6.webp';

// Services data
const SERVICES = [
  {
    id: 1,
    title: "Logbook Servicing",
    description: "Maintain your warranty with manufacturer-approved services",
    image: service1,
    link: "#logbook-service"
  },
  {
    id: 2,
    title: "European Car Specialists",
    description: "Expert service for BMW, Mercedes, Audi, VW & more",
    image: service2,
    link: "#european-services"
  },
  {
    id: 3,
    title: "Auto Transmission & Clutch",
    description: "Leading transmission repair specialists",
    image: service3,
    link: "#transmission-services"
  },
  {
    id: 4,
    title: "Brakes & Safety Systems",
    description: "Professional brake, steering & suspension repairs",
    image: service4,
    link: "#safety-services"
  },
  {
    id: 5,
    title: "Air Conditioning",
    description: "Re-gas, repairs & system maintenance",
    image: service5,
    link: "#ac-services"
  },
  {
    id: 6,
    title: "Roadworthy Inspections",
    description: "Licensed testing & pre-purchase inspections",
    image: service6,
    link: "#book-inspection"
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getServiceWidth = (index) => {
    if (hoveredIndex === null) {
      return `${100 / SERVICES.length}%`; // Equal width when no hover
    }
    if (hoveredIndex === index) {
      return '45%'; // Expanded width for hovered service
    }
    return `${55 / (SERVICES.length - 1)}%`; // Compressed width for others
  };

  return (
    <div id='services' className='mt-32 mb-20'>
      {/* Section Title */}
      <motion.div 
        className='ml-8 lg:ml-16 xl:ml-24 mb-20'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
       <h2 className='text-blue-600 text-sm md:text-base lg:text-lg font-bold tracking-[0.25em] uppercase leading-relaxed text-center mb-6'>
         Our Services
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
           Advanced vehicle care with certified expertise
         </h3>
       </motion.div>
      </motion.div>

      {/* Modern Services Container */}
      <motion.div 
        className='mx-8 lg:mx-16 xl:mx-24'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Premium Container with Modern Border */}
        <div className='relative p-1 rounded-3xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 shadow-2xl'>
          {/* Inner Container */}
          <div className='relative rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden shadow-inner'>
            {/* Subtle Top Gradient */}
            <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent' />
            
            {/* Services Grid */}
            <div className='flex h-[500px] lg:h-[600px] overflow-hidden rounded-3xl'>
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.id}
                  className='relative cursor-pointer group overflow-hidden first:rounded-l-3xl last:rounded-r-3xl'
                  style={{
                    width: getServiceWidth(index),
                    transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {/* Background Image */}
                  <div className='absolute inset-0 overflow-hidden'>
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className='w-full h-full object-cover filter brightness-50 contrast-125 saturate-110'
                      animate={{
                        scale: hoveredIndex === index ? 1.15 : 1,
                        filter: hoveredIndex === index 
                          ? 'brightness(0.6) contrast(1.3) saturate(1.2)' 
                          : 'brightness(0.5) contrast(1.25) saturate(1.1)'
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Premium Dark Overlay - Multiple Layers for Depth */}
                  <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80' />
                  <div className='absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent' />
                  
                  {/* Premium Glassmorphism Effect */}
                  <motion.div 
                    className='absolute inset-0 backdrop-blur-[0.5px]'
                    animate={{
                      backgroundColor: hoveredIndex === index ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.3)'
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Service Number - Better Positioned */}
                  <div className='absolute top-6 left-6 z-20'>
                    <motion.div 
                      className='text-white/80 font-black tracking-wider'
                      animate={{
                        fontSize: hoveredIndex === index ? '2.5rem' : hoveredIndex !== null ? '4rem' : '4rem',
                        opacity: hoveredIndex === index ? 0.3 : hoveredIndex !== null ? 0.15 : 0.4,
                        y: hoveredIndex === index ? 10 : 0
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>
                  </div>

                  {/* Minimalist Title for Default State - Better Positioned */}
                  <motion.div 
                    className='absolute bottom-6 left-6 right-6'
                    animate={{
                      opacity: hoveredIndex === null ? 1 : 0,
                      y: hoveredIndex === null ? 0 : 20
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <h3 className='text-xl lg:text-2xl font-bold text-white leading-tight tracking-tight'>
                      {service.title}
                    </h3>
                  </motion.div>

                  {/* Expanded Content - Better Positioned */}
                  <motion.div 
                    className='absolute inset-0 flex flex-col justify-between p-6 z-30'
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 30
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    

                    {/* Bottom Section - Content Card */}
                    <motion.div 
                      className='bg-gradient-to-br from-black/70 via-black/60 to-black/50 rounded-2xl p-6 border border-white/20 backdrop-blur-md shadow-2xl'
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredIndex === index ? 0 : 20,
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.6, delay: hoveredIndex === index ? 0.2 : 0 }}
                    >
                      <h3 className='text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight tracking-tight'>
                        {service.title}
                      </h3>
                      <p className='text-white/90 text-base lg:text-lg leading-relaxed mb-6 font-light max-w-xs'>
                        {service.description}
                      </p>
                      
                      {/* Learn More Button */}
                      <motion.a
                        href={service.link}
                        className='inline-flex items-center text-white font-semibold group/btn hover:text-blue-400 transition-colors duration-300'
                        whileHover={{ x: 5 }}
                      >
                        <span>Learn More</span>
                        <ArrowUpRight className='w-5 h-5 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-300' />
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  {/* Premium Border Effect */}
                  <motion.div 
                    className='absolute inset-0 rounded-3xl border'
                    animate={{
                      borderColor: hoveredIndex === index ? 'rgba(255,255,255,0.3)' : 'transparent'
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Subtle Inner Glow */}
                  <motion.div 
                    className='absolute inset-0 rounded-3xl'
                    animate={{
                      boxShadow: hoveredIndex === index 
                        ? 'inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.2)'
                        : 'none'
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Animated Corner Accent */}
                  <motion.div 
                    className='absolute top-0 right-0'
                    animate={{
                      width: hoveredIndex === index ? 40 : 0,
                      height: hoveredIndex === index ? 40 : 0,
                      borderLeftWidth: hoveredIndex === index ? 40 : 0,
                      borderBottomWidth: hoveredIndex === index ? 40 : 0,
                    }}
                    style={{
                      borderLeftColor: 'transparent',
                      borderBottomColor: 'rgba(255,255,255,0.2)',
                      borderTopRightRadius: '1.5rem'
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Button Below Container */}
      <motion.div 
        className='flex justify-center mt-12'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.button
          className='group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-lg border border-blue-500/30 shadow-lg hover:shadow-xl transition-all duration-300'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Button Background Animation */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0'
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Button Content */}
          <span className='relative flex items-center text-lg'>
            View All Services
            <ChevronRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
          </span>
          
          {/* Subtle Inner Highlight */}
          <div className='absolute inset-0 rounded-lg border border-white/20 pointer-events-none' />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Services;