// import React from 'react'
// import { motion } from 'framer-motion'
// import { Phone, Mail, MapPin, Calendar, FileText, ArrowRight, Clock, Shield } from 'lucide-react'
// import book1 from '../assets/book1.webp'
// import book2 from '../assets/book2.webp'

// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
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
//       duration: 0.5,
//     },
//   },
// }

// const ReadyToBook = () => {
//   return (
//     <div id='book' className='relative overflow-hidden bg-black mt-32 mb-20'>
//       {/* Enhanced Section Header - Consistent with other components */}
//       <motion.div 
//         className='ml-8 lg:ml-16 xl:ml-24 mb-20'
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className='text-blue-600 text-sm md:text-base lg:text-lg font-bold tracking-[0.25em] uppercase leading-relaxed text-center mb-6'>
//           Ready to Book
//         </h2>
        
//         {/* Enhanced Subheading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className='text-center max-w-4xl mx-auto'
//         >
//           <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 tracking-tight'>
//             Professional auto service at your fingertips
//           </h3>
//         </motion.div>
//       </motion.div>
     
//       {/* Premium Container - Match Services component styling */}
//       <motion.div 
//         className='mx-8 lg:mx-16 xl:mx-24'
//         initial='hidden'
//         whileInView='visible'
//         variants={containerVariants}
//         viewport={{ once: true }}
//       >
//         {/* Premium Container with Modern Border - Same as Services */}
//         <div className='relative p-1 rounded-3xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 shadow-2xl'>
//           {/* Inner Container */}
//           <div className='relative rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden shadow-inner p-8 lg:p-12'>
//             {/* Subtle Top Gradient */}
//             <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent' />
            
//             {/* Main Content Grid */}
//             <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
              
//               {/* Left Column - Enhanced Contact Info */}
//               <motion.div variants={itemVariants} className='space-y-8'>
//                 {/* Enhanced Quick Stats */}
//                 <div className='grid grid-cols-2 gap-6 mb-8'>
//                   <motion.div 
//                     className='group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-500/50 hover:bg-white/15 transition-all duration-300 shadow-lg'
//                     whileHover={{ y: -4, scale: 1.02 }}
//                   >
//                     <Clock className='w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300' />
//                     <p className='text-sm text-gray-400 mb-1'>Open Today</p>
//                     <p className='text-xl font-black text-white'>8AM - 6PM</p>
//                   </motion.div>
//                   <motion.div 
//                     className='group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-500/50 hover:bg-white/15 transition-all duration-300 shadow-lg'
//                     whileHover={{ y: -4, scale: 1.02 }}
//                   >
//                     <Shield className='w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300' />
//                     <p className='text-sm text-gray-400 mb-1'>Service Warranty</p>
//                     <p className='text-xl font-black text-white'>12 Months</p>
//                   </motion.div>
//                 </div>

//                 {/* Enhanced Contact Information */}
//                 <div className='space-y-6'>
//                   {/* Enhanced Phone */}
//                   <motion.a 
//                     href="tel:0397067227"
//                     className='group relative overflow-hidden flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl'
//                     whileHover={{ x: 8, scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {/* Shimmer Effect - Same as Hero buttons */}
//                     <motion.div
//                       className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0'
//                       initial={{ x: '-100%' }}
//                       whileHover={{ x: '100%' }}
//                       transition={{ duration: 0.6 }}
//                     />
                    
//                     <div className='bg-blue-500/20 p-4 rounded-xl group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110'>
//                       <Phone className='w-6 h-6 text-blue-500 group-hover:rotate-12 transition-transform duration-300' />
//                     </div>
//                     <div className='flex-1'>
//                       <p className='text-sm text-gray-400 mb-2 uppercase tracking-wide'>Call Us Now</p>
//                       <p className='text-2xl font-black text-white group-hover:text-blue-400 transition-colors duration-300'>
//                         (03) 9706 7227
//                       </p>
//                     </div>
//                     <ArrowRight className='w-6 h-6 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-2 mt-6 transition-all duration-300' />
//                   </motion.a>

//                   {/* Enhanced Email */}
//                   <motion.a 
//                     href="mailto:info@speedwayauto.com.au"
//                     className='group relative overflow-hidden flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl'
//                     whileHover={{ x: 8, scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {/* Shimmer Effect */}
//                     <motion.div
//                       className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0'
//                       initial={{ x: '-100%' }}
//                       whileHover={{ x: '100%' }}
//                       transition={{ duration: 0.6 }}
//                     />
                    
//                     <div className='bg-blue-500/20 p-4 rounded-xl group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110'>
//                       <Mail className='w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform duration-300' />
//                     </div>
//                     <div className='flex-1'>
//                       <p className='text-sm text-gray-400 mb-2 uppercase tracking-wide'>Email Us</p>
//                       <p className='text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 break-all'>
//                         info@speedwayauto.com.au
//                       </p>
//                     </div>
//                     <ArrowRight className='w-6 h-6 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-2 mt-6 transition-all duration-300' />
//                   </motion.a>

//                   {/* Enhanced Address */}
//                   <motion.a 
//                     href="https://maps.google.com/?q=Factory+1/95+Cheltenham+Road,+Dandenong"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className='group relative overflow-hidden flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl'
//                     whileHover={{ x: 8, scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {/* Shimmer Effect */}
//                     <motion.div
//                       className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0'
//                       initial={{ x: '-100%' }}
//                       whileHover={{ x: '100%' }}
//                       transition={{ duration: 0.6 }}
//                     />
                    
//                     <div className='bg-blue-500/20 p-4 rounded-xl group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110'>
//                       <MapPin className='w-6 h-6 text-blue-500 group-hover:bounce transition-transform duration-300' />
//                     </div>
//                     <div className='flex-1'>
//                       <p className='text-sm text-gray-400 mb-2 uppercase tracking-wide'>Visit Us</p>
//                       <p className='text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300'>
//                         Factory 1/95 Cheltenham Road, Dandenong
//                       </p>
//                     </div>
//                     <ArrowRight className='w-6 h-6 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-2 mt-6 transition-all duration-300' />
//                   </motion.a>
//                 </div>
//               </motion.div>

//               {/* Right Column - Enhanced CTA Buttons */}
//               <motion.div variants={itemVariants} className='space-y-8'>
//                 {/* Enhanced Book Online Button */}
//                 <motion.button
//                   className='group relative w-full overflow-hidden rounded-2xl text-left shadow-2xl hover:shadow-blue-500/25 transition-all duration-500'
//                   whileHover={{ scale: 1.03, y: -8 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   {/* Background Image */}
//                   <div className='absolute inset-0 overflow-hidden rounded-2xl'>
//                     <motion.img
//                       src={book1}
//                       alt="Book Online"
//                       className='w-full h-full object-cover'
//                       animate={{
//                         scale: 1.1,
//                         filter: 'brightness(0.6) contrast(1.3) saturate(1.2)'
//                       }}
//                       whileHover={{
//                         scale: 1.15,
//                         filter: 'brightness(0.5) contrast(1.4) saturate(1.3)'
//                       }}
//                       transition={{ duration: 0.8, ease: "easeInOut" }}
//                     />
//                   </div>

//                   {/* Enhanced Multi-layer Overlays - Same as Services */}
//                   <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90' />
//                   <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50' />
//                   <div className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent' />
                  
//                   {/* Premium Glassmorphism Effect */}
//                   <div className='absolute inset-0 backdrop-blur-[1px] bg-black/10' />
                  
//                   {/* Enhanced Content */}
//                   <div className='relative z-10 p-8'>
//                     <div className='mb-6 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-6'>
//                       <Calendar className='w-16 h-16 text-white drop-shadow-2xl' />
//                     </div>
//                     <h3 className='text-4xl font-black text-white mb-3 drop-shadow-lg group-hover:text-white transition-colors duration-300'>
//                       Book Online
//                     </h3>
//                     <p className='text-white/90 text-lg mb-6 drop-shadow-md group-hover:text-white transition-colors duration-300'>
//                       Schedule your service in under 60 seconds
//                     </p>
//                     <div className='flex items-center text-white font-bold text-lg drop-shadow-md'>
//                       <span className='group-hover:text-blue-400 transition-colors duration-300'>Book Now</span>
//                       <ArrowRight className='w-6 h-6 ml-3 group-hover:translate-x-3 group-hover:scale-125 transition-all duration-300' />
//                     </div>
//                   </div>
                  
//                   {/* Premium Border & Glow Effects */}
//                   <div className='absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-blue-500/50 transition-colors duration-400' />
//                   <motion.div 
//                     className='absolute inset-0 rounded-2xl'
//                     whileHover={{
//                       boxShadow: [
//                         '0 0 30px rgba(59, 130, 246, 0.3)',
//                         '0 0 60px rgba(59, 130, 246, 0.2)',
//                         '0 0 30px rgba(59, 130, 246, 0.3)'
//                       ]
//                     }}
//                     transition={{ 
//                       duration: 2,
//                       repeat: Infinity,
//                       repeatType: "reverse"
//                     }}
//                   />
//                 </motion.button>

//                 {/* Enhanced Get Free Quote Button */}
//                 <motion.button
//                   className='group relative w-full overflow-hidden rounded-2xl text-left shadow-2xl hover:shadow-gray-500/25 transition-all duration-500'
//                   whileHover={{ scale: 1.03, y: -8 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   {/* Background Image */}
//                   <div className='absolute inset-0 overflow-hidden rounded-2xl'>
//                     <motion.img
//                       src={book2}
//                       alt="Get Free Quote"
//                       className='w-full h-full object-cover'
//                       animate={{
//                         scale: 1.1,
//                         filter: 'brightness(0.6) contrast(1.3) saturate(1.2)'
//                       }}
//                       whileHover={{
//                         scale: 1.15,
//                         filter: 'brightness(0.5) contrast(1.4) saturate(1.3)'
//                       }}
//                       transition={{ duration: 0.8, ease: "easeInOut" }}
//                     />
//                   </div>

//                   {/* Enhanced Multi-layer Overlays - Same as Services */}
//                   <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90' />
//                   <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50' />
//                   <div className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent' />
                  
//                   {/* Premium Glassmorphism Effect */}
//                   <div className='absolute inset-0 backdrop-blur-[1px] bg-black/10' />
                  
//                   {/* Enhanced Content */}
//                   <div className='relative z-10 p-8'>
//                     <div className='mb-6 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-6'>
//                       <FileText className='w-16 h-16 text-white drop-shadow-2xl' />
//                     </div>
//                     <h3 className='text-4xl font-black text-white mb-3 drop-shadow-lg group-hover:text-white transition-colors duration-300'>
//                       Get Free Quote
//                     </h3>
//                     <p className='text-white/90 text-lg mb-6 drop-shadow-md group-hover:text-white transition-colors duration-300'>
//                       No obligation, instant pricing
//                     </p>
//                     <div className='flex items-center text-white font-bold text-lg drop-shadow-md'>
//                       <span className='group-hover:text-blue-400 transition-colors duration-300'>Get Quote</span>
//                       <ArrowRight className='w-6 h-6 ml-3 group-hover:translate-x-3 group-hover:scale-125 transition-all duration-300' />
//                     </div>
//                   </div>
                  
//                   {/* Premium Border & Glow Effects */}
//                   <div className='absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-colors duration-400' />
//                   <motion.div 
//                     className='absolute inset-0 rounded-2xl'
//                     whileHover={{
//                       boxShadow: [
//                         '0 0 30px rgba(255, 255, 255, 0.2)',
//                         '0 0 60px rgba(255, 255, 255, 0.1)',
//                         '0 0 30px rgba(255, 255, 255, 0.2)'
//                       ]
//                     }}
//                     transition={{ 
//                       duration: 2,
//                       repeat: Infinity,
//                       repeatType: "reverse"
//                     }}
//                   />
//                 </motion.button>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default ReadyToBook

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Calendar, FileText, ArrowRight, Clock, Shield } from 'lucide-react'
import book1 from '../assets/book1.webp'
import book2 from '../assets/book2.webp'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
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
      duration: 0.5,
    },
  },
}

const ReadyToBook = () => {
  return (
    <div id='book' className='relative overflow-hidden bg-black mt-32 mb-20'>
      {/* Enhanced Section Header - Consistent with other components */}
      <motion.div 
        className='ml-8 lg:ml-16 xl:ml-24 mb-20'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-blue-600 text-sm md:text-base lg:text-lg font-bold tracking-[0.25em] uppercase leading-relaxed text-center mb-6'>
          Ready to Book
        </h2>
        
        {/* Enhanced Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-center max-w-4xl mx-auto'
        >
          <h3 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 tracking-tight'>
            Professional auto service at your fingertips
          </h3>
        </motion.div>
      </motion.div>
     
      {/* Premium Container - Match Services component styling */}
      <motion.div 
        className='mx-8 lg:mx-16 xl:mx-24'
        initial='hidden'
        whileInView='visible'
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {/* Premium Container with Modern Border - Same as Services */}
        <div className='relative p-1 rounded-3xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 shadow-2xl'>
          {/* Inner Container */}
          <div className='relative rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden shadow-inner p-8 lg:p-12'>
            {/* Subtle Top Gradient */}
            <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent' />
            
            {/* Main Content Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
              
              {/* Left Column - Enhanced Contact Info */}
              <motion.div variants={itemVariants} className='space-y-8'>
                {/* Enhanced Quick Stats */}
                <div className='grid grid-cols-2 gap-6 mb-8'>
                  <motion.div 
                    className='group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-500/50 hover:bg-white/15 transition-all duration-300 shadow-lg'
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <Clock className='w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300' />
                    <p className='text-sm text-gray-400 mb-1'>Open Today</p>
                    <p className='text-xl font-black text-white'>9AM - 5PM</p> {/* Sample hours */}
                  </motion.div>
                  <motion.div 
                    className='group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-500/50 hover:bg-white/15 transition-all duration-300 shadow-lg'
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <Shield className='w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300' />
                    <p className='text-sm text-gray-400 mb-1'>Service Warranty</p>
                    <p className='text-xl font-black text-white'>6 Months</p> {/* Sample warranty */}
                  </motion.div>
                </div>

                {/* Enhanced Contact Information */}
                <div className='space-y-6'>
                  {/* Enhanced Phone */}
                  <motion.a 
                    href="tel:+610123456789"
                    className='group relative overflow-hidden flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl'
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Shimmer Effect - Same as Hero buttons */}
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0'
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <div className='bg-blue-500/20 p-4 rounded-xl group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110'>
                      <Phone className='w-6 h-6 text-blue-500 group-hover:rotate-12 transition-transform duration-300' />
                    </div>
                    <div className='flex-1'>
                      <p className='text-sm text-gray-400 mb-2 uppercase tracking-wide'>Call Us Now</p>
                      <p className='text-2xl font-black text-white group-hover:text-blue-400 transition-colors duration-300'>
                        (01) 2345 6789
                      </p>
                    </div>
                    <ArrowRight className='w-6 h-6 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-2 mt-6 transition-all duration-300' />
                  </motion.a>

                  {/* Enhanced Email */}
                  <motion.a 
                    href="mailto:contact@example.com"
                    className='group relative overflow-hidden flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl'
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0'
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <div className='bg-blue-500/20 p-4 rounded-xl group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110'>
                      <Mail className='w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform duration-300' />
                    </div>
                    <div className='flex-1'>
                      <p className='text-sm text-gray-400 mb-2 uppercase tracking-wide'>Email Us</p>
                      <p className='text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 break-all'>
                        contact@example.com
                      </p>
                    </div>
                    <ArrowRight className='w-6 h-6 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-2 mt-6 transition-all duration-300' />
                  </motion.a>

                  {/* Enhanced Address */}
                  <motion.a 
                    href="https://maps.google.com/?q=123+Sample+Street,+Sample+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group relative overflow-hidden flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl'
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0'
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <div className='bg-blue-500/20 p-4 rounded-xl group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110'>
                      <MapPin className='w-6 h-6 text-blue-500 group-hover:bounce transition-transform duration-300' />
                    </div>
                    <div className='flex-1'>
                      <p className='text-sm text-gray-400 mb-2 uppercase tracking-wide'>Visit Us</p>
                      <p className='text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300'>
                        123 Sample Street, Sample City
                      </p>
                    </div>
                    <ArrowRight className='w-6 h-6 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-2 mt-6 transition-all duration-300' />
                  </motion.a>
                </div>
              </motion.div>

              {/* Right Column - Enhanced CTA Buttons */}
              <motion.div variants={itemVariants} className='space-y-8'>
                {/* Enhanced Book Online Button */}
                <motion.button
                  className='group relative w-full overflow-hidden rounded-2xl text-left shadow-2xl hover:shadow-blue-500/25 transition-all duration-500'
                  whileHover={{ scale: 1.03, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Image */}
                  <div className='absolute inset-0 overflow-hidden rounded-2xl'>
                    <motion.img
                      src={book1}
                      alt="Book Online"
                      className='w-full h-full object-cover'
                      animate={{
                        scale: 1.1,
                        filter: 'brightness(0.6) contrast(1.3) saturate(1.2)'
                      }}
                      whileHover={{
                        scale: 1.15,
                        filter: 'brightness(0.5) contrast(1.4) saturate(1.3)'
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Enhanced Multi-layer Overlays - Same as Services */}
                  <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90' />
                  <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent' />
                  
                  {/* Premium Glassmorphism Effect */}
                  <div className='absolute inset-0 backdrop-blur-[1px] bg-black/10' />
                  
                  {/* Enhanced Content */}
                  <div className='relative z-10 p-8'>
                    <div className='mb-6 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-6'>
                      <Calendar className='w-16 h-16 text-white drop-shadow-2xl' />
                    </div>
                    <h3 className='text-4xl font-black text-white mb-3 drop-shadow-lg group-hover:text-white transition-colors duration-300'>
                      Book Online
                    </h3>
                    <p className='text-white/90 text-lg mb-6 drop-shadow-md group-hover:text-white transition-colors duration-300'>
                      Schedule your service in under 60 seconds
                    </p>
                    <div className='flex items-center text-white font-bold text-lg drop-shadow-md'>
                      <span className='group-hover:text-blue-400 transition-colors duration-300'>Book Now</span>
                      <ArrowRight className='w-6 h-6 ml-3 group-hover:translate-x-3 group-hover:scale-125 transition-all duration-300' />
                    </div>
                  </div>
                  
                  {/* Premium Border & Glow Effects */}
                  <div className='absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-blue-500/50 transition-colors duration-400' />
                  <motion.div 
                    className='absolute inset-0 rounded-2xl'
                    whileHover={{
                      boxShadow: [
                        '0 0 30px rgba(59, 130, 246, 0.3)',
                        '0 0 60px rgba(59, 130, 246, 0.2)',
                        '0 0 30px rgba(59, 130, 246, 0.3)'
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.button>

                {/* Enhanced Get Free Quote Button */}
                <motion.button
                  className='group relative w-full overflow-hidden rounded-2xl text-left shadow-2xl hover:shadow-gray-500/25 transition-all duration-500'
                  whileHover={{ scale: 1.03, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Image */}
                  <div className='absolute inset-0 overflow-hidden rounded-2xl'>
                    <motion.img
                      src={book2}
                      alt="Get Free Quote"
                      className='w-full h-full object-cover'
                      animate={{
                        scale: 1.1,
                        filter: 'brightness(0.6) contrast(1.3) saturate(1.2)'
                      }}
                      whileHover={{
                        scale: 1.15,
                        filter: 'brightness(0.5) contrast(1.4) saturate(1.3)'
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Enhanced Multi-layer Overlays - Same as Services */}
                  <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90' />
                  <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent' />
                  
                  {/* Premium Glassmorphism Effect */}
                  <div className='absolute inset-0 backdrop-blur-[1px] bg-black/10' />
                  
                  {/* Enhanced Content */}
                  <div className='relative z-10 p-8'>
                    <div className='mb-6 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-6'>
                      <FileText className='w-16 h-16 text-white drop-shadow-2xl' />
                    </div>
                    <h3 className='text-4xl font-black text-white mb-3 drop-shadow-lg group-hover:text-white transition-colors duration-300'>
                      Get Free Quote
                    </h3>
                    <p className='text-white/90 text-lg mb-6 drop-shadow-md group-hover:text-white transition-colors duration-300'>
                      No obligation, instant pricing
                    </p>
                    <div className='flex items-center text-white font-bold text-lg drop-shadow-md'>
                      <span className='group-hover:text-blue-400 transition-colors duration-300'>Get Quote</span>
                      <ArrowRight className='w-6 h-6 ml-3 group-hover:translate-x-3 group-hover:scale-125 transition-all duration-300' />
                    </div>
                  </div>
                  
                  {/* Premium Border & Glow Effects */}
                  <div className='absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-colors duration-400' />
                  <motion.div 
                    className='absolute inset-0 rounded-2xl'
                    whileHover={{
                      boxShadow: [
                        '0 0 30px rgba(255, 255, 255, 0.2)',
                        '0 0 60px rgba(255, 255, 255, 0.1)',
                        '0 0 30px rgba(255, 255, 255, 0.2)'
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ReadyToBook
