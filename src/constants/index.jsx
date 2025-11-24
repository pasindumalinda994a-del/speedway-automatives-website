// Import necessary React icons
import {
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGit,
  FaLinux,
  FaAws,
  FaDocker,
  FaJenkins,
  FaCircle,
  FaFilm,
  FaPlusCircle,
  FaRProject,
  FaMedium,
} from "react-icons/fa";

import {
  SiMongodb,
  SiSpringboot,
  SiTailwindcss,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";

// Import assets


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import { FaC } from "react-icons/fa6";


// Navigation Links
export const NAVIGATION_LINKS = [
  { label: "Home", href: "#about" },
  { label: "About Us", href: "#projects" },
  { label: "Our Services", href: "#skills" },
  { label: "MR Muffler", href: "#award" },
  { label: "Contact", href: "#contact" },
];

// Profile Information
export const PROFILE = {
  name: "Pasindu Malinda",
  info: "Full-Stack Developer | DevOps Enthusiast | Video Editing Aficionado | AWS Cloud Enthusiast",
};

// About Section
export const ABOUT = {
  text1:
    "I craft dynamic, responsive applications that seamlessly blend innovation with efficiency.",
  text2:
    "Hello! I'm Pasindu Malinda Ghanarathna, a full-stack developer with a passion for AWS Cloud, DevOps, and video editing. I specialize in building scalable, robust applications that not only perform well but also deliver a polished user experience. My dedication to continuous learning keeps me at the forefront of emerging technologies, enabling me to create practical and cutting-edge solutions. Outside of development, I channel my creativity into video editing, where I combine technical precision with artistic vision. Whether I'm coding a complex application or refining a video project, my commitment to excellence drives every endeavor.",
};



// Skills Section
export const SKILLS = [
  {
    icon: <FaReact className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React.js",
    experience: "2+ years",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "2+ years",
  },
  {
    icon: <FaCircle className="text-4xl lg:text-6xl text-green-500" />,
    name: "Express.js",
    experience: "2+ yearsr",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <FaJsSquare className="text-4xl lg:text-6xl text-yellow-500" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <SiSpringboot className="text-4xl lg:text-6xl text-green-500" />,
    name: "Spring Boot",
    experience: "1+ year",
  },
  {
    icon: <FaJava className="text-4xl lg:text-6xl text-red-600" />,
    name: "Java",
    experience: "2+ years",
  },
  {
    icon: <FaHtml5 className="text-4xl lg:text-6xl text-orange-600" />,
    name: "HTML",
    experience: "3+ year",
  },
  {
    icon: <FaCss3Alt className="text-4xl lg:text-6xl text-blue-600" />,
    name: "CSS",
    experience: "3+ year",
  },
  {
    icon: <FaPython className="text-4xl lg:text-6xl text-yellow-500" />,
    name: "Python",
    experience: "1+ year",
  },
  {
    icon: <FaRProject className="text-4xl lg:text-6xl text-blue-500" />,
    name: "R",
    experience: "1+ year",
  },
  {
    icon: <FaC className="text-4xl lg:text-6xl text-blue-500" />,
    name: "C",
    experience: "2+ year",
  },
  {
    icon: <FaC className="text-4xl lg:text-6xl text-blue-500" />,
    name: "C++",
    experience: "2+ year",
  },
  {
    icon: <FaGit className="text-4xl lg:text-6xl text-orange-600" />,
    name: "Git",
    experience: "2+ year",
  },
  {
    icon: <FaGithub className="text-4xl lg:text-6xl text-black" />,
    name: "GitHub",
    experience: "2+ year",
  },
  {
    icon: <FaLinux className="text-4xl lg:text-6xl text-black" />,
    name: "Linux",
    experience: "1+ year",
  },
  {
    icon: <FaAws className="text-4xl lg:text-6xl text-yellow-600" />,
    name: "AWS",
    experience: "1+ year",
  },
  {
    icon: <FaDocker className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Docker",
    experience: "1+ year",
  },
  {
    icon: <FaJenkins className="text-4xl lg:text-6xl text-red-600" />,
    name: "Jenkins",
    experience: "1+ year",
  },
  {
    icon: (
      <SiAdobeaftereffects className="text-4xl lg:text-6xl text-purple-600" />
    ),
    name: "Adobe After Effects",
    experience: "2+ years",
  },
  {
    icon: (
      <SiAdobepremierepro className="text-4xl lg:text-6xl text-blue-600" />
    ),
    name: "Adobe Premiere Pro",
    experience: "2+ years",
  },
];

// Award Section
export const ACHIEVEMENT = {
  title: "Kickstart Your Cloud Journey with Free AWS Resources",
  award: "Read my blog",
  description:
    "In today's digital era, cloud computing is a vital skill powering everything from simple apps to complex enterprise solutions. Amazon Web Services (AWS) stands out as a leading cloud platform, offering a wide range of tools for both beginners and experts. Whether you're new to cloud computing or eager to learn more, AWS provides excellent free resources to kickstart your journey. In this blog post, we'll explore these resources and how you can maximize their benefits.",
};

// Testimonial Section
export const TESTIMONIALS = [
    {
      name: "Emily Johnson",
      title: "CEO, Tech Innovators",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: user1,
    },
    {
      name: "Michael Lee",
      title: "CTO, Creative Minds",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: user2,
    },
];
export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://web.facebook.com/profile.php?id=61557403311638",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/pasindu-malinda-7087942a2/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/PasinduM0056",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  
  {
    href: "https://medium.com/@malindafiv56",
    icon: <FaMedium fontSize={25} className="hover:opacity-80" />,
  },
];
