import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Stats = () => {
  const stats = [
    {
      number: "30",
      suffix: "+",
      label: "YEARS OF EXPERIENCE"
    },
    {
      number: "600",
      suffix: "+",
      label: "HAPPY CUSTOMERS"
    },
    {
      number: "99",
      suffix: "%",
      label: "CUSTOMER SATISFACTION"
    }
  ]

  const AnimatedNumber = ({ targetNumber, suffix, delay = 0 }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          const duration = 2000 // 2 seconds
          const increment = parseInt(targetNumber) / (duration / 16) // 60fps
          let current = 0

          const counter = setInterval(() => {
            current += increment
            if (current >= parseInt(targetNumber)) {
              setCount(parseInt(targetNumber))
              clearInterval(counter)
            } else {
              setCount(Math.floor(current))
            }
          }, 16)

          return () => clearInterval(counter)
        }, delay)

        return () => clearTimeout(timer)
      }
    }, [isInView, targetNumber, delay])

    return (
      <div ref={ref} className='flex items-start justify-center'>
        <span className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-none'>
          {count}
        </span>
        <motion.span 
          className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-blue-600 leading-none mt-2 md:mt-4'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 1.5 }}
        >
          {suffix}
        </motion.span>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className='bg-black py-24 lg:py-32' id='about'>
      <motion.div 
        className='mx-8 lg:mx-16 xl:mx-24 max-w-none'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative'>
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={itemVariants}
                className='text-center relative'
              >
                <div className='mb-8 lg:mb-12'>
                  <AnimatedNumber 
                    targetNumber={stat.number} 
                    suffix={stat.suffix}
                    delay={index * 0.3}
                  />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                  className='relative'
                >
                  {/* Decorative line above text */}
                  <div className='w-16 h-0.5 bg-blue-600 mx-auto mb-6'></div>
                  
                  <h3 className='text-white text-sm md:text-base lg:text-lg font-bold tracking-[0.25em] uppercase leading-relaxed'>
                    {stat.label}
                  </h3>
                </motion.div>
              </motion.div>

              {/* Vertical divider - only show between items, not after the last one */}
              {index < stats.length - 1 && (
                <motion.div
                  className='hidden md:block absolute left-1/3 md:left-[33.33%] lg:left-[33.33%] xl:left-[33.33%] top-1/2 transform -translate-y-1/2 w-px h-32 lg:h-40 bg-gradient-to-b from-transparent via-gray-600 to-transparent'
                  style={{ 
                    left: `${((index + 1) * 100) / 3}%`,
                    transform: 'translateX(-50%) translateY(-50%)'
                  }}
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              )}
            </React.Fragment>
          ))}

          {/* Additional vertical dividers for better spacing */}
          <motion.div
            className='hidden md:block absolute left-[33.33%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 lg:h-40 bg-gradient-to-b from-transparent via-gray-600 to-transparent'
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          <motion.div
            className='hidden md:block absolute left-[66.66%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 lg:h-40 bg-gradient-to-b from-transparent via-gray-600 to-transparent'
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Stats