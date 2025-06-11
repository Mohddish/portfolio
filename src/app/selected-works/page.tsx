"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SelectedWorks() {
  const works = [
    {
      id: 1,
      title: "FIGHTERHERO",
      category: "FIGHTERHERO",
      description: "A compelling brand story that captured the essence of the brand and resonated with the target audience.",
      image: "brands/path-to-image-1.png",
      link: "#"
    },
    {
      id: 2,
      title: "Product Launch",
      category: "Social Media",
      description: "Strategic social media campaign that generated significant engagement and drove product awareness.",
      image: "brands/path-to-image-2.png",
      link: "#"
    },
    {                         
      id: 3,
      title: "Lead Editor and Cinematographer",
      category: "Branding",
      description: "Comprehensive brand identity development that established a strong market presence.",
      image: "brands/path-to-image-3.jpg",
      link: ""
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
        >
          Selected Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-all duration-300">
                <div className="aspect-video relative">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <span className="text-yellow-400 text-sm font-medium mb-2 block">{work.category}</span>
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-gray-300 mb-4">{work.description}</p>
                  <Link 
                    href={work.link}
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
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
  );
} 