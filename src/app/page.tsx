'use client';

import Navbar from '@/components/Navbar';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  category: string;
  aspectRatio: string;
  externalLink?: string;
}

interface Brand {
  id: number;
  name: string;
  logo: string;
  category: string;
}

export default function Home() {
  const [showreelRef, isShowreelVisible] = useIntersectionObserver();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Bitter sweet",
      description: "Cinematic creation",
      videoUrl: "https://www.youtube.com/embed/5MEix08g15U",
      thumbnail: "/thumbnails/project1-thumb.png",
      category: "cinematography",
      aspectRatio: "16:9",
      externalLink: "https://youtu.be/5MEix08g15U"
    },
    {
      id: 2,
      title: "Why do we create?",
      description: "5 awards winning short film",
      videoUrl: "https://www.youtube.com/embed/4XjXxwjWQWA",
      thumbnail: "/thumbnails/project2-thumb.jpg",
      category: "directing",
      aspectRatio: "16:9",
      externalLink: "https://www.youtube.com/watch?v=4XjXxwjWQWA"
    },
    {
      id: 3,
      title: "What a difference a day makes",
      description: "Summer short film",
      videoUrl: "https://www.youtube.com/embed/CW7KJXNwI0Q",
      thumbnail: "/thumbnails/project3-thumb.png",
      category: "editing",
      aspectRatio: "16:9",
      externalLink: "https://youtu.be/CW7KJXNwI0Q"
    },
    {
      id: 4,
      title: "Don't just consume, create!",
      description: "A film about the power of creation",
      videoUrl: "https://www.youtube.com/embed/4I37llSf1HY",
      thumbnail: "/thumbnails/project4-thumb.png",
      category: "cinematography",
      aspectRatio: "16:9",
      externalLink: "https://youtu.be/4I37llSf1HY"
    },
    {
      id: 5,
      title: "Nothing",
      description: "First film I made with my camera",
      videoUrl: "https://www.youtube.com/embed/JNV7zMPrdLQ",
      thumbnail: "/thumbnails/project5-thumb.png",
      category: "directing",
      aspectRatio: "16:9",
      externalLink: "https://youtu.be/JNV7zMPrdLQ"
    },
    {
      id: 6,
      title: "Endless void of consumption",
      description: "3 awards winning short film",
      videoUrl: "https://www.youtube.com/embed/LG68gvAHPIU",
      thumbnail: "/thumbnails/project6-thumb.png",
      category: "editing",
      aspectRatio: "16:9",
      externalLink: "https://youtu.be/LG68gvAHPIU"
    },
    {
      id: 7,
      title: "Practise, Productive, Procastination",
      description: "",
      videoUrl: "/videos/social1.mp4",
      thumbnail: "/thumbnails/social1.1-thumb.png",
      category: "social",
      aspectRatio: "9:16",
      externalLink: "https://www.instagram.com/p/DFs1tpJyBoy/"
    },
    {
      id: 8,
      title: "Artistic Stagnation",
      description: "",
      videoUrl: "/videos/social2.mp4",
      thumbnail: "/thumbnails/social2-thumb1.png",
      category: "social",
      aspectRatio: "9:16",
      externalLink: "https://www.instagram.com/p/DEx7n0XzsRH/"
    },
    {
      id: 9,
      title: "Essentialist",
      description: "",
      videoUrl: "https://www.youtube.com/embed/yihzD2UKNnA",
      thumbnail: "/thumbnails/social3-thumb.png",
      category: "social",
      aspectRatio: "9:16",
      externalLink: "https://youtube.com/shorts/yihzD2UKNnA"
    },
    {
      id: 10,
      title: "Easy Wins",
      description: "",
      videoUrl: "/videos/social4.mp4",
      thumbnail: "/thumbnails/social4-thumb.png",
      category: "social",
      aspectRatio: "9:16",
      externalLink: "https://www.instagram.com/p/DJTeFusypYv/"
    }
  ];

  const brands: Brand[] = [
    {
      id: 1,
      name: "Brand Name 1",
      logo: "/brands/path-to-image-1.png",
      category: ""
    },
    {
      id: 2,
      name: "Brand Name 2",
      logo: "/brands/brand2.png",
      category: "fashion"
    },
    {
      id: 3,
      name: "Brand Name 3",
      logo: "/brands/brand3.png",
      category: "fashion"
    }
  ];

  interface Service {
    title: string;
    description: string;
  }

  const services: Service[] = [
    {
      title: "Content Creation",
      description: "Creating engaging video content that tells your brand's story and connects with your audience."
    },
    {
      title: "Social Media Strategy",
      description: "Developing effective social media strategies that drive engagement and growth for your brand."
    },
    {
      title: "Brand Development",
      description: "Helping you build a strong, recognizable brand identity through creative visual storytelling."
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'cinematography', name: 'Cinematography' },
    { id: 'directing', name: 'Directing' },
    { id: 'editing', name: 'Editing' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const scrollToWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const worksSection = document.querySelector('.cinematic-works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5DC] relative">
      {/* Background with grains.gif */}
      <div className="fixed inset-0 w-full h-full opacity-30 pointer-events-none bg-[url('/grains.gif')] bg-repeat" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Film Grain and Color Grading Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Film Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('/grain.png')] bg-repeat" />
          
          {/* Color Grading Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-transparent mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/10 via-transparent to-transparent mix-blend-overlay" />
          
          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-radial-gradient opacity-30" />
          
          {/* Film Scratches */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/scratches.png')] bg-repeat animate-scratch" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 md:mb-8 text-[#F5F5DC] drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]">
              {"Who the hell am I?".split('').map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-reveal-heading"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>
            <div className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed tracking-wide space-y-2 md:space-y-3">
              <span className="animate-reveal-text block">hey, I'm a no bullshit, <span className="text-yellow-400">HELLA CREATIVE</span> freelance cinematographer, timeline artist, film maker and creative director. I am not enslaved by my work</span>
              <span className="animate-reveal-text block">rather i create art that expresses the unexplainable and sparks movements, go that extra mile and treat every project like play.</span>
              <span className="animate-reveal-text block">down to get better, have fun, and create standout work in a <span className="text-yellow-400">noisy world</span>.</span>
              <span className="animate-reveal-text block">my projects are driven by an unapologetic <span className="text-yellow-400">need</span> to stand out and make people click and engage with your brand.</span>
              <span className="animate-reveal-text block">i do less, but better.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Showreel Section */}
      <section ref={showreelRef as React.RefObject<HTMLElement>} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] relative">
        {/* Background with grains.gif */}
        <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none bg-[url('/grains.gif')] bg-repeat" />
        
        <div className="max-w-7xl mx-auto relative">
          <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 ${isShowreelVisible ? 'animate-showreel' : 'showreel-hidden'}`}>Showreel</h2>
          <div className={`aspect-video bg-zinc-800 rounded-lg overflow-hidden relative ${isShowreelVisible ? 'animate-showreel' : 'showreel-hidden'}`}>
            {/* Showreel Icon Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              {/* Solid Circle Background - Clickable */}
              <a 
                href="https://youtu.be/4XjXxwjWQWA?si=SbYkQu5W-yyfD12-"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full bg-yellow-400/50 hover:bg-yellow-400/70 transition-colors duration-300 cursor-pointer"
              />
              
              <img 
                src="https://cdn.prod.website-files.com/673c98116312141d14ca1c64/673c98116312141d14ca1ca6_showreel-icon.svg" 
                alt="Showreel Icon"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 opacity-80 animate-rotate relative z-10 pointer-events-none"
              />
              <img 
                src="https://cdn.prod.website-files.com/673c98116312141d14ca1c64/673c98116312141d14ca1cba_play.svg" 
                alt="Play Icon"
                className="absolute w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 opacity-90 z-20 pointer-events-none"
              />
            </div>
            
            <video
              className="w-full h-full object-cover relative z-10"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/showreel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 md:py-12 flex flex-col items-center space-y-4 md:space-y-6">
        <div className="flex items-center space-x-3">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-mono text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">Bangalore, India</span>
        </div>
        <div className="flex items-center space-x-3">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="font-mono text-[10px] sm:text-xs md:text-sm text-gray-400 tracking-wider">mohddishk@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="font-mono text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">Panasonic Lumix GX8/G vario 14-42mm F3.5-5.6</span>
        </div>
      </section>

      {/* Work Section */}
      <section id="selected-works" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
          >
            Selected Works
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
            {/* Description Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">A few of many</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                  Started off my journey as a kid obessessed with documenting everything and that kid has achieved the few of his many dreams. <span className="text-yellow-400">Directed and made award winning short films, collaborated with brands, worked with creative agencies and startups, helped brands and entrepreneurs' personal brands grow, directed creative ads for startups, scaling my personal brand and worked as a creative lead and UGC manager in different agencies and startups,</span>  culminating my total work experience to 6 years.
                </p>
              </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="lg:col-span-2">
              {/* 16:9 Videos Section */}
              <div className="mb-16 cinematic-works">
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">16:9s</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {projects.filter(project => project.aspectRatio === '16:9').map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="group relative aspect-video overflow-hidden rounded-lg bg-black/50"
                      onMouseEnter={() => {
                        setHoveredProject(project.id);
                      }}
                      onMouseLeave={() => {
                        setHoveredProject(null);
                      }}
                      onClick={() => {
                        if (project.externalLink) {
                          window.open(project.externalLink, '_blank');
                        }
                      }}
                      style={{ cursor: project.externalLink ? 'pointer' : 'default' }}
                    >
                      {/* Thumbnail Image */}
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-opacity duration-300"
                        style={{ opacity: hoveredProject === project.id ? 0 : 1 }}
                      />
                      
                      {/* Video - Only plays on hover */}
                      {project.videoUrl.startsWith('https://www.youtube.com/embed/') ? (
                        <iframe
                          id={`video-${project.id}`}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                          style={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                          src={`${project.videoUrl}?autoplay=${hoveredProject === project.id ? 1 : 0}&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          id={`video-${project.id}`}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                          style={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                          muted
                          loop
                          playsInline
                        >
                          <source src={project.videoUrl} type="video/mp4" />
                        </video>
                      )}

                      {/* Overlay with project info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                          <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{project.title}</h3>
                          <p className="text-xs md:text-sm text-gray-300">{project.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 9:16 Videos Section with Description */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                {/* 9:16 Videos Grid */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">9:16s</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.filter(project => project.aspectRatio === '9:16').map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-black/50"
                        onMouseEnter={() => {
                          setHoveredProject(project.id);
                        }}
                        onMouseLeave={() => {
                          setHoveredProject(null);
                        }}
                        onClick={() => {
                          if (project.externalLink) {
                            window.open(project.externalLink, '_blank');
                          }
                        }}
                        style={{ cursor: project.externalLink ? 'pointer' : 'default' }}
                      >
                        {/* Thumbnail Image */}
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover transition-opacity duration-300"
                          style={{ opacity: hoveredProject === project.id ? 0 : 1 }}
                        />
                        
                        {/* Video - Only plays on hover */}
                        {project.videoUrl.startsWith('https://www.youtube.com/embed/') ? (
                          <iframe
                            id={`video-${project.id}`}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                            style={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                            src={`${project.videoUrl}?autoplay=${hoveredProject === project.id ? 1 : 0}&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <video
                            id={`video-${project.id}`}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                            style={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                            muted
                            loop
                            playsInline
                          >
                            <source src={project.videoUrl} type="video/mp4" />
                          </video>
                        )}

                        {/* Overlay with project info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{project.title}</h3>
                            <p className="text-xs md:text-sm text-gray-300">{project.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Description Section for 9:16 */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-1"
                >
                  <div className="sticky top-32">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How I can help you scale</h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                      My creations make people stop and look.<span className="text-yellow-400"> I create things that make people convert and engage.</span> Bringing brands hundereds of sales and millions of views with my projects.
                    </p>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="w-full px-4 py-2 bg-yellow-400 text-black font-normal text-xs rounded-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl tracking-wide"
                      onClick={() => window.location.href = '/work-with-me'}
                    >
                     See it yourself
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <div className="min-h-screen bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
          >
            Brands
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                id: 1,
                title: "Creative Lead",
                category: "FIGHTERHERO",
                description: "Working with FH as a UGC manager and Creative Lead brought 200+ sales, 3M+ views and 3K+ following.",
                image: "/brands/path-to-image-1.png",
                video: "/videos/brand-fh-campaign-1.mp4",
                link: "https://fighterhero.com/"
              },
              {
                id: 2,
                title: "Cinematographer",
                category: "Creative Blend Media",
                description: "Working as freelance cinematographer with CBM to execute quality shoots and cinematic visuals.",
                image: "/brands/path-to-image-2.png",
                video: "/videos/brand-fh-campaign-2.mp4",
                link: "#"
              },
              {
                id: 3,
                title: "Lead Creator/Editor",
                category: "Dhun Jam",
                description: "Dhun Jam was one of the first startup I worked with. We rolled in around 500K views in 2 months.",
                image: "/brands/path-to-image-3.png",
                video: "/videos/brand-fh-campaign-3.mp4",
                link: "https://dhunjam.in/jamming"
              }
            ].map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group max-w-sm mx-auto"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="aspect-[9/16] relative">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className={`object-cover ${index === 1 ? 'object-contain' : ''}`}
                    />
                    <video
                      src={work.video}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <span className="text-yellow-400 text-sm font-medium mb-2 block">{work.category}</span>
                    <h3 className="text-lg font-bold mb-2">{work.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{work.description}</p>
                    {work.link && (
                      <Link 
                        href={work.link}
                        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 text-sm"
                      >
                        View Project
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-colors duration-300"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-gray-400">Bangalore, India</p>
                <p className="text-gray-400">mohddishk@gmail.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/cinematic" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 block">Cinematic Works</Link>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 block">Contact</Link>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-6">
                <a 
                  href="https://www.instagram.com/mohddish_m/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@mohddishm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.behance.net/mohddismahetan?isa0=1#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Mohddish Mahetani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
