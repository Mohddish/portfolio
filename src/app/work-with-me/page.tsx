'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function WorkWithMe() {
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
          >
            Let's Create Something Amazing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16"
          >
            I help brands tell their story through compelling visual content that drives engagement and growth.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-6xl font-light text-yellow-400 mb-4">10+</h3>
              <p className="text-gray-300">Brands Collaborated With</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-6xl font-light text-yellow-400 mb-4">10M+</h3>
              <p className="text-gray-300">Total Views Generated</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-6xl font-light text-yellow-400 mb-4">100K+</h3>
              <p className="text-gray-300">Engagement Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
          >
            WorkFlow
          </motion.h2>

          <div className="relative">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 mb-24 relative"
            >
              <div className="relative pb-24">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Discovery & Planning</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    I'll start by understanding your business goals, brand niche, target audience, and unique requirements. This phase includes:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>In-depth consultation to understand your vision.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Creating content funnel.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Identifying the TAM for the brand.</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute -bottom-96 left-1/2 transform -translate-x-1/2 md:block hidden">
                  <svg className="w-96 h-[32rem] text-yellow-400" viewBox="0 0 4800 4800" fill="none" stroke="currentColor" strokeWidth="16">
                    <path d="M2400 8C2400 8 2401 32 2400 48C2399 64 2400 88 2400 88" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2400 88L2400 4000" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2400 4000L4400 4000" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4400 4000L4200 3800" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4400 4000L4200 4200" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2400 88L2400 4000" strokeLinecap="round" strokeLinejoin="round" className="opacity-70" strokeWidth="24" strokeDasharray="20 10"/>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 ml-auto mb-24 relative"
            >
              <div className="relative pb-24">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Scripting and Direction</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Curating scripts with engaging hooks and directing the ads by wrapping my creativity with brand's niche and needs.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Engaging hooks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Creative Direction for unskippable ads/videos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Converting CTAs.</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute -bottom-96 left-1/2 transform -translate-x-1/2 md:block hidden">
                  <svg className="w-96 h-[32rem] text-yellow-400" viewBox="0 0 4800 4800" fill="none" stroke="currentColor" strokeWidth="16">
                    <path d="M2400 8C2400 8 2399 32 2400 48C2401 64 2400 88 2400 88" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2400 88L2400 4000" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2400 4000L400 4000" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M400 4000L600 3800" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M400 4000L600 4200" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2400 88L2400 4000" strokeLinecap="round" strokeLinejoin="round" className="opacity-70" strokeWidth="24" strokeDasharray="20 10"/>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full md:w-1/2 mb-24 relative"
            >
              <div className="relative pb-24">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Post Production</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    This is where the magic happens, the phase includes every thing required to produce an engaging Video/Ad.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Creating the timeline artistically and HELLA impressively.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Eargasmic sound design.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Motion graphics, Cinematic color grading, Smooth transitions.</span>
                    </li>
                  </ul>
                </div>
                <div className="absolute -bottom-96 left-1/2 transform -translate-x-1/2 md:block hidden">
                  <svg className="w-96 h-[32rem] text-yellow-400" viewBox="0 0 4800 4800" fill="none" stroke="currentColor" strokeWidth="16">
                    <path d="M2400 8C2400 8 2401 32 2400 48C2399 64 2400 88 2400 88" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2400 88L2400 4000" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2400 4000L4400 4000" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4400 4000L4200 3800" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4400 4000L4200 4200" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2400 88L2400 4000" strokeLinecap="round" strokeLinejoin="round" className="opacity-70" strokeWidth="24" strokeDasharray="20 10"/>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full md:w-1/2 ml-auto mb-24 relative"
            >
              <div className="relative pb-24">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Feedback Loop</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Feedback is what makes me better every day, having that constant communication and feedback loop is important for improving.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Feedback sessions after every drafts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Insights after every ad campaign.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Progress after each project.</span>
                    </li>
                  </ul>
                </div>
              
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-[0_0_25px_rgba(245,245,220,0.5)] blur-[0.2px]"
          >
            Ready to Scale Your Brand?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Let's create content that makes people stop scrolling and start engaging with your brand.
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block px-8 py-4 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Talk
          </motion.a>
        </div>
      </section>
    </main>
  );
} 