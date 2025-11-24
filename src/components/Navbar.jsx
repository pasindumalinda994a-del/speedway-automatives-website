import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import {NAVIGATION_LINKS} from "../constants"
import { FaBars, FaTimes } from 'react-icons/fa';

// Sample navigation links - replace with your actual NAVIGATION_LINKS
// const NAVIGATION_LINKS = [
//   { href: "#home", label: "Home" },
//   { href: "#about", label: "About" },
//   { href: "#services", label: "Services" },
//   { href: "#contact", label: "Contact" }
// ]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if(targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })

            setIsMobileMenuOpen(false);
        }
    }

    const handleGetStarted = () => {
        // Add your get started logic here
        console.log("Get Started clicked");
    }

    return (
        <div>
            <nav className='fixed left-0 right-0 top-0 z-50 w-full bg-gradient-to-b from-black/80 via-black/60 to-transparent'>
                {/* Desktop Menu */}
                <div className='flex items-center justify-between w-full px-20 py-6 lg:px-24 xl:px-30'>
                    {/* Logo - Left Side */}
                    <div className='flex items-center'>
                        <a href='#'>
                           <h1 className='text-2xl font-bold text-white'>
                             <span className='text-blue-500'>SPEEDWAY</span>AUTO
                           </h1>
                        </a> 
                    </div>
                    
                    {/* Navigation Links and Get Started Button - Right Side */}
                    <div className='hidden lg:flex items-center gap-8'>
                        {/* Navigation Links */}
                        <ul className='flex items-center gap-8'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a className='text-white text-sm font-medium hover:text-blue-400 transition-colors duration-300 uppercase tracking-wider'
                                    href={item.href}
                                    onClick={(e) => handleLinkClick(e, item.href)}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Premium Get Started Button - Desktop */}
                        <motion.button 
                            onClick={handleGetStarted}
                            className='group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 text-sm rounded-lg border border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent'
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
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
                                Get Started
                                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                            </span>
                            
                            {/* Inner Highlight */}
                            <div className='absolute inset-0 rounded-lg border border-white/20 pointer-events-none' />
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='flex items-center lg:hidden'>
                        <button 
                            className='focus:outline-none text-white'
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className='h-6 w-6' />
                            ) : (
                                <FaBars className='h-6 w-6'/>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className='lg:hidden bg-black/90 backdrop-blur-md border-t border-gray-700'>
                        <div className='px-6 py-4'>
                            <ul className='flex flex-col gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a className='block text-white text-lg font-medium hover:text-blue-400 transition-colors duration-300 py-2'
                                        href={item.href}
                                        onClick={(e) => handleLinkClick(e, item.href)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            
                            {/* Premium Get Started Button - Mobile */}
                            <div className='mt-6 pt-4 border-t border-gray-700'>
                                <motion.button 
                                    onClick={handleGetStarted}
                                    className='group relative overflow-hidden w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 text-lg rounded-lg border border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent'
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Shimmer Animation */}
                                    <motion.div
                                        className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0'
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    
                                    {/* Button Content */}
                                    <span className='relative flex items-center justify-center'>
                                        Get Started
                                        <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                                    </span>
                                    
                                    {/* Inner Highlight */}
                                    <div className='absolute inset-0 rounded-lg border border-white/20 pointer-events-none' />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar