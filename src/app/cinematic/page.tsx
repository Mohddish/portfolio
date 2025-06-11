'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

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

export default function CinematicPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
    }
  ];

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5DC] relative">
      {/* Background with grains.gif */}
      <div className="fixed inset-0 w-full h-full opacity-30 pointer-events-none bg-[url('/grains.gif')] bg-repeat" />
      
      <Navbar />
      
      {/* Cinematic Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
          >
            Cinematic Works
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 16:9 Videos Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="group relative aspect-video overflow-hidden rounded-lg bg-black/50"
                    onMouseEnter={() => {
                      setHoveredProject(project.id);
                      const video = document.getElementById(`video-${project.id}`) as HTMLVideoElement;
                      if (video) {
                        video.play();
                      }
                    }}
                    onMouseLeave={() => {
                      setHoveredProject(null);
                      const video = document.getElementById(`video-${project.id}`) as HTMLVideoElement;
                      if (video) {
                        video.pause();
                        video.currentTime = 0;
                      }
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
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-300">{project.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Description Section */}
            <div className="lg:col-span-1">
              <div className="bg-black/20 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">A few of many</h3>
                <p className="text-gray-300 leading-relaxed">
                  Started off my journey as a kid obessessed with documenting everything and that kid has achieved the few of his many dreams. <span className="text-yellow-400">Directed and made award winning short films, Collaborated with brands, worked with creative agencies and startups, helped brands and entrepreneurs' personal brands grow, directed creative ads for startups, scaling my personal brand and worked as a creative lead and UGC manager in different agencies and startups,</span> culminating my total work experience to 6 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 