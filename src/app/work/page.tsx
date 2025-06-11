'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  category: string;
}

interface Brand {
  id: number;
  name: string;
  logo: string;
  category: string;
}

const WorkPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Project One",
      description: "A cinematic journey through urban landscapes",
      videoUrl: "/project1.mp4",
      thumbnail: "/project1-thumb.jpg",
      category: "cinematography"
    },
    // Add more projects here
  ];

  const brands: Brand[] = [
    {
      id: 1,
      name: "Brand One",
      logo: "/brand1-logo.png",
      category: "fashion"
    },
    // Add more brands here
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

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5DC]">
      {/* Background with grains.gif */}
      <div className="fixed inset-0 w-full h-full opacity-30 pointer-events-none bg-[url('/grains.gif')] bg-repeat" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
          >
            Brands
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl"
          >
            A collection of my finest work in cinematography, directing, and creative storytelling.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-yellow-400 text-black'
                    : 'bg-black/50 text-[#F5F5DC] hover:bg-black/70'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group relative aspect-video overflow-hidden rounded-lg bg-black/50"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <video
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
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
      </section>

      {/* Brands Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
          >
            Brands I've Worked With
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {brands.map((brand) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="aspect-square bg-black/50 rounded-lg p-6 flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkPage; 