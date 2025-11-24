// import React from 'react'
// import { motion } from 'framer-motion'
// import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react'

// // Sample logo - replace with your actual logo
// const logo = "https://via.placeholder.com/200x80/ffffff/000000?text=LOGO"

// // Sample social media links - replace with your actual SOCIAL_MEDIA_LINKS
// const SOCIAL_MEDIA_LINKS = [
//   { href: "#", icon: <div className="w-5 h-5 bg-white rounded"></div> },
//   { href: "#", icon: <div className="w-5 h-5 bg-white rounded"></div> },
//   { href: "#", icon: <div className="w-5 h-5 bg-white rounded"></div> },
//   { href: "#", icon: <div className="w-5 h-5 bg-white rounded"></div> }
// ]

// const containerVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       staggerChildren: 0.1,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//     },
//   },
// }

// const Footer = () => {
//   return (
//     <footer className='relative bg-black overflow-hidden mt-32'>
//       {/* Background Gradient Effects */}
//       <div className='absolute inset-0 bg-gradient-to-br from-blue-600/5 via-black to-purple-600/5' />
//       <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' />
      
//       {/* Subtle Grid Pattern */}
//       <div className='absolute inset-0 opacity-5'>
//         <div className='h-full w-full' style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
//           backgroundSize: '20px 20px'
//         }} />
//       </div>

//       <motion.div 
//         className='relative z-10 mx-8 lg:mx-16 xl:mx-24 pt-20 pb-8'
//         initial='hidden'
//         whileInView='visible'
//         variants={containerVariants}
//         viewport={{ once: true }}
//       >
//         {/* Main Footer Content */}
//         <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16'>
          
//           {/* Logo & Brand Section */}
//           <motion.div variants={itemVariants} className='lg:col-span-2'>
//             <motion.figure
//               className='mb-8'
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.2 }}
//             >
//               <h1 className='text-4xl font-bold text-white mb-4'>
//                 <span className='text-blue-500'>SPEEDWAY</span>AUTO
//               </h1>
//               <motion.div 
//                 className='h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full'
//                 initial={{ width: 0 }}
//                 whileInView={{ width: 64 }}
//                 transition={{ duration: 1, delay: 0.8 }}
//               />
//             </motion.figure>
            
//             <p className='text-gray-400 text-lg leading-relaxed mb-6 max-w-md'>
//               Professional automotive service with cutting-edge technology and premium care for your vehicle.
//             </p>
            
//           </motion.div>
          
//           {/* Quick Links */}
//           <motion.div variants={itemVariants}>
//             <h3 className='text-xl font-bold text-white mb-6 relative'>
//               Services
//               <div className='absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full' />
//             </h3>
//             <ul className='space-y-3'>
//               {['Logbook Servicing', 'European Cars', 'Transmission Repair', 'Brake Service', 'Air Conditioning', 'Roadworthy'].map((service, index) => (
//                 <motion.li key={index}>
//                   <a href="#" className='group flex items-center text-gray-400 hover:text-white transition-colors duration-300'>
//                     <ArrowUpRight className='w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300' />
//                     <span className='group-hover:translate-x-1 transition-transform duration-300'>{service}</span>
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
          
//           {/* Contact Info */}
//           <motion.div variants={itemVariants}>
//             <h3 className='text-xl font-bold text-white mb-6 relative'>
//               Contact Info
//               <div className='absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full' />
//             </h3>
//             <div className='space-y-4'>
//               <div className='flex items-start space-x-3'>
//                 <div className='bg-blue-500/20 p-2 rounded-lg mt-1'>
//                   <Phone className='w-4 h-4 text-blue-500' />
//                 </div>
//                 <div>
//                   <p className='text-white font-semibold'>(03) 9706 7227</p>
//                   <p className='text-gray-400 text-sm'>Mon-Fri 8AM-6PM</p>
//                 </div>
//               </div>
              
//               <div className='flex items-start space-x-3'>
//                 <div className='bg-blue-500/20 p-2 rounded-lg mt-1'>
//                   <Mail className='w-4 h-4 text-blue-500' />
//                 </div>
//                 <div>
//                   <p className='text-white font-semibold'>info@speedwayauto.com.au</p>
//                   <p className='text-gray-400 text-sm'>24/7 Support</p>
//                 </div>
//               </div>
              
//               <div className='flex items-start space-x-3'>
//                 <div className='bg-blue-500/20 p-2 rounded-lg mt-1'>
//                   <MapPin className='w-4 h-4 text-blue-500' />
//                 </div>
//                 <div>
//                   <p className='text-white font-semibold'>Factory 1/95 Cheltenham Road</p>
//                   <p className='text-gray-400 text-sm'>Dandenong, VIC</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
        
//         {/* Social Media & Copyright Section */}
//         <motion.div 
//           className='border-t border-white/10 pt-8'
//           variants={itemVariants}
//         >
//           <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
            
//             {/* Social Media Links */}
//             <div className='flex items-center space-x-6'>
//               <span className='text-gray-400 text-sm font-medium'>Follow Us:</span>
//               <div className='flex items-center space-x-4'>
//                 {SOCIAL_MEDIA_LINKS.map((link, index) => (
//                   <motion.a 
//                     key={index}
//                     href={link.href}
//                     target="_blank"
//                     rel='noopener noreferrer'
//                     className='group relative p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300'
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: 0.1 * index }}
//                     whileHover={{ y: -2, scale: 1.05 }}
//                   >
//                     <div className='text-gray-400 group-hover:text-white transition-colors duration-300'>
//                       {link.icon}
//                     </div>
                    
//                     {/* Hover Glow Effect */}
//                     <div className='absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm' />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
            
//             {/* Copyright & Additional Links */}
//             <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-400'>
//               <p>&copy; 2024 Speedway Auto. All rights reserved.</p>
//               <div className='flex items-center space-x-6'>
//                 <a href="#" className='hover:text-white transition-colors duration-300'>Privacy Policy</a>
//                 <a href="#" className='hover:text-white transition-colors duration-300'>Terms of Service</a>
//               </div>
//             </div>
//           </div>
//         </motion.div>
        
//         {/* Premium Bottom Accent */}
//         <motion.div 
//           className='mt-8 flex justify-center'
//           initial={{ opacity: 0, width: 0 }}
//           whileInView={{ opacity: 1, width: 200 }}
//           transition={{ duration: 1.2, delay: 0.5 }}
//         >
//           <div className='h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-48' />
//         </motion.div>
//       </motion.div>
      
//       {/* Floating Elements */}
//       <div className='absolute top-20 right-20 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse' />
//       <div className='absolute bottom-20 left-20 w-1 h-1 bg-purple-500/40 rounded-full animate-ping' />
//     </footer>
//   )
// }

// export default Footer


import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

// Sample logo - replace with your actual logo
const logo = "https://via.placeholder.com/200x80/ffffff/000000?text=LOGO"

// Sample social media links - replace with your actual SOCIAL_MEDIA_LINKS
const SOCIAL_MEDIA_LINKS = [
  { href: "#", icon: <div className="w-5 h-5 bg-white rounded"></div> },
  { href: "#", icon: <div className="w-5 h-5 bg-white rounded"></div> },
  { href: "#", icon: <div className="w-5 h-5 bg-white rounded"></div> },
  { href: "#", icon: <div className="w-5 h-5 bg-white rounded"></div> }
]

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const Footer = () => {
  return (
    <footer className='relative bg-black overflow-hidden mt-32'>
      <div className='absolute inset-0 bg-gradient-to-br from-blue-600/5 via-black to-purple-600/5' />
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent' />

      <div className='absolute inset-0 opacity-5'>
        <div className='h-full w-full' style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <motion.div 
        className='relative z-10 mx-8 lg:mx-16 xl:mx-24 pt-20 pb-8'
        initial='hidden'
        whileInView='visible'
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16'>
          <motion.div variants={itemVariants} className='lg:col-span-2'>
            <motion.figure
              className='mb-8'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className='text-4xl font-bold text-white mb-4'>
                <span className='text-blue-500'>SPEEDWAY</span>AUTO
              </h1>
              <motion.div 
                className='h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full'
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.figure>

            <p className='text-gray-400 text-lg leading-relaxed mb-6 max-w-md'>
              Professional automotive service with cutting-edge technology and premium care for your vehicle.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className='text-xl font-bold text-white mb-6 relative'>
              Services
              <div className='absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full' />
            </h3>
            <ul className='space-y-3'>
              {['Logbook Servicing', 'European Cars', 'Transmission Repair', 'Brake Service', 'Air Conditioning', 'Roadworthy'].map((service, index) => (
                <motion.li key={index}>
                  <a href="#" className='group flex items-center text-gray-400 hover:text-white transition-colors duration-300'>
                    <ArrowUpRight className='w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300' />
                    <span className='group-hover:translate-x-1 transition-transform duration-300'>{service}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className='text-xl font-bold text-white mb-6 relative'>
              Contact Info
              <div className='absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500 rounded-full' />
            </h3>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <div className='bg-blue-500/20 p-2 rounded-lg mt-1'>
                  <Phone className='w-4 h-4 text-blue-500' />
                </div>
                <div>
                  <p className='text-white font-semibold'>(03) 9123 4567</p>
                  <p className='text-gray-400 text-sm'>Mon-Fri 8AM-6PM</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='bg-blue-500/20 p-2 rounded-lg mt-1'>
                  <Mail className='w-4 h-4 text-blue-500' />
                </div>
                <div>
                  <p className='text-white font-semibold'>info@example.com</p>
                  <p className='text-gray-400 text-sm'>24/7 Support</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <div className='bg-blue-500/20 p-2 rounded-lg mt-1'>
                  <MapPin className='w-4 h-4 text-blue-500' />
                </div>
                <div>
                  <p className='text-white font-semibold'>123 Sample Street</p>
                  <p className='text-gray-400 text-sm'>Melbourne, VIC</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className='border-t border-white/10 pt-8'
          variants={itemVariants}
        >
          <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
            <div className='flex items-center space-x-6'>
              <span className='text-gray-400 text-sm font-medium'>Follow Us:</span>
              <div className='flex items-center space-x-4'>
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel='noopener noreferrer'
                    className='group relative p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ y: -2, scale: 1.05 }}
                  >
                    <div className='text-gray-400 group-hover:text-white transition-colors duration-300'>
                      {link.icon}
                    </div>
                    <div className='absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm' />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-400'>
              <p>&copy; 2024 Speedway Auto. All rights reserved.</p>
              <div className='flex items-center space-x-6'>
                <a href="#" className='hover:text-white transition-colors duration-300'>Privacy Policy</a>
                <a href="#" className='hover:text-white transition-colors duration-300'>Terms of Service</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className='mt-8 flex justify-center'
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 200 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className='h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-48' />
        </motion.div>
      </motion.div>

      <div className='absolute top-20 right-20 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse' />
      <div className='absolute bottom-20 left-20 w-1 h-1 bg-purple-500/40 rounded-full animate-ping' />
    </footer>
  )
}

export default Footer
