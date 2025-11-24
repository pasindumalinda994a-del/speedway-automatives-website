// import React from 'react'
// import { motion } from 'framer-motion'
// import { Phone, Calendar, ArrowRight } from 'lucide-react'
// import profilePic from "../assets/hero3.webp" // You might want to replace with auto repair shop image

// const HeroSection = () => {
//   const handleBookService = () => {
//     // Add your booking logic here
//     console.log("Book Service clicked");
//   };

//   const handleGetQuote = () => {
//     // Add your quote logic here
//     console.log("Get Quote clicked");
//   };

//   const handleCall = () => {
//     window.location.href = "tel:+61397067227";
//   };

//   return (
//     <>
//       <div className='relative flex min-h-screen items-center justify-start' id='hero'>
//         <motion.img
//           src={profilePic}
//           alt="Auto Repair Shop"
//           className='absolute inset-0 z-10 h-full w-full object-cover'
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         />
//         <motion.div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         ></motion.div>
        
//         <motion.div className='z-20 ml-8 lg:ml-16 xl:ml-24 max-w-6xl text-left'
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}>
          
//           <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[0.9] tracking-[-0.02em] font-sans'>
//             Melbourne's Most Trusted Auto <br />
//             <span className='text-white font-black'>Repair Experts</span>
//           </h1>
          
//           <p className='text-xl md:text-2xl lg:text-2xl text-white/90 mb-12 max-w-4xl leading-[1.4] font-normal'>
//             Professional car services and repairs in Melbourne's southeast. From logbook servicing to European specialists, we keep your vehicle running safely and efficiently.
//           </p>
          
//           <div className='flex flex-wrap gap-6'>
//             {/* Premium Call Button */}
//             <motion.button 
//               onClick={handleCall}
//               className='group relative overflow-hidden bg-black/20 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 text-lg md:text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent'
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.3 }}
//             >
//               {/* Shimmer Animation */}
//               <motion.div
//                 className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0'
//                 initial={{ x: '-100%' }}
//                 whileHover={{ x: '100%' }}
//                 transition={{ duration: 0.6 }}
//               />
              
//               {/* Button Content */}
//               <span className='relative flex items-center'>
//                 <Phone className='w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300' />
//                 Call (03) 9706 7227
//               </span>
              
//               {/* Inner Highlight */}
//               <div className='absolute inset-0 rounded-lg border border-white/10 pointer-events-none' />
              
//               {/* Hover Glow Effect */}
//               <motion.div 
//                 className='absolute inset-0 rounded-2xl'
//                 animate={{
//                   boxShadow: '0 0 20px rgba(255,255,255,0.1)'
//                 }}
//                 whileHover={{
//                   boxShadow: '0 0 30px rgba(255,255,255,0.2)'
//                 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.button>

//             {/* Premium Schedule Appointment Button */}
//             <motion.button 
//               onClick={handleBookService}
//               className='group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 text-lg md:text-xl rounded-lg border border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent'
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.4 }}
//             >
//               {/* Shimmer Animation */}
//               <motion.div
//                 className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0'
//                 initial={{ x: '-100%' }}
//                 whileHover={{ x: '100%' }}
//                 transition={{ duration: 0.6 }}
//               />
              
//               {/* Button Content */}
//               <span className='relative flex items-center'>
//                 <Calendar className='w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300' />
//                 Schedule an Appointment
//                 <ArrowRight className='w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300' />
//               </span>
              
//               {/* Inner Highlight */}
//               <div className='absolute inset-0 rounded-lg border border-white/20 pointer-events-none' />
              
//               {/* Enhanced Glow Effect */}
//               <motion.div 
//                 className='absolute inset-0 rounded-2xl'
//                 whileHover={{
//                   boxShadow: [
//                     '0 0 20px rgba(37, 99, 235, 0.3)',
//                     '0 0 40px rgba(37, 99, 235, 0.2)',
//                     '0 0 20px rgba(37, 99, 235, 0.3)'
//                   ]
//                 }}
//                 transition={{ 
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatType: "reverse"
//                 }}
//               />
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </>
//   )
// }

// export default HeroSection



import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Calendar, ArrowRight } from 'lucide-react'
import profilePic from "../assets/hero3.webp" // You might want to replace with auto repair shop image

const HeroSection = () => {
  const handleBookService = () => {
    // Add your booking logic here
    console.log("Book Service clicked");
  };

  const handleGetQuote = () => {
    // Add your quote logic here
    console.log("Get Quote clicked");
  };

  const handleCall = () => {
    window.location.href = "tel:+61123456789"; // Sample number
  };

  return (
    <>
      <div className='relative flex min-h-screen items-center justify-start' id='hero'>
        <motion.img
          src={profilePic}
          alt="Auto Repair Shop"
          className='absolute inset-0 z-10 h-full w-full object-cover'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        
        <motion.div className='z-20 ml-8 lg:ml-16 xl:ml-24 max-w-6xl text-left'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}>
          
          <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[0.9] tracking-[-0.02em] font-sans'>
            Melbourne's Most Trusted Auto <br />
            <span className='text-white font-black'>Repair Experts</span>
          </h1>
          
          <p className='text-xl md:text-2xl lg:text-2xl text-white/90 mb-12 max-w-4xl leading-[1.4] font-normal'>
            Professional car services and repairs in Melbourne's southeast. From logbook servicing to European specialists, we keep your vehicle running safely and efficiently.
          </p>
          
          <div className='flex flex-wrap gap-6'>
            {/* Premium Call Button */}
            <motion.button 
              onClick={handleCall}
              className='group relative overflow-hidden bg-black/20 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 text-lg md:text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {/* Shimmer Animation */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0'
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Button Content */}
              <span className='relative flex items-center'>
                <Phone className='w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300' />
                Call (01) 1234 5678
              </span>
              
              {/* Inner Highlight */}
              <div className='absolute inset-0 rounded-lg border border-white/10 pointer-events-none' />
              
              {/* Hover Glow Effect */}
              <motion.div 
                className='absolute inset-0 rounded-2xl'
                animate={{
                  boxShadow: '0 0 20px rgba(255,255,255,0.1)'
                }}
                whileHover={{
                  boxShadow: '0 0 30px rgba(255,255,255,0.2)'
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Premium Schedule Appointment Button */}
            <motion.button 
              onClick={handleBookService}
              className='group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 text-lg md:text-xl rounded-lg border border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {/* Shimmer Animation */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0'
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Button Content */}
              <span className='relative flex items-center'>
                <Calendar className='w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300' />
                Schedule an Appointment
                <ArrowRight className='w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300' />
              </span>
              
              {/* Inner Highlight */}
              <div className='absolute inset-0 rounded-lg border border-white/20 pointer-events-none' />
              
              {/* Enhanced Glow Effect */}
              <motion.div 
                className='absolute inset-0 rounded-2xl'
                whileHover={{
                  boxShadow: [
                    '0 0 20px rgba(37, 99, 235, 0.3)',
                    '0 0 40px rgba(37, 99, 235, 0.2)',
                    '0 0 20px rgba(37, 99, 235, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default HeroSection
