import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { ParallaxLayer } from '../components/ParallaxLayer';
import { Music } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent" />
        </div>
        
        {/* Parallax decorative elements */}
        <ParallaxLayer speed={0.3} className="absolute top-20 left-10 opacity-20">
          <Music size={80} className="text-accent" />
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.5} className="absolute bottom-32 right-20 opacity-10">
          <Music size={120} className="text-accent-light" />
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.4} className="absolute top-1/3 right-1/4 opacity-15">
          <div className="w-32 h-32 rounded-full bg-gradient-gold opacity-30 blur-3xl" />
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.2} className="absolute bottom-1/4 left-1/4 opacity-15">
          <div className="w-40 h-40 rounded-full bg-accent/20 blur-3xl" />
        </ParallaxLayer>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass-strong rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-accent/50 shadow-xl shadow-accent/20">
              <img 
                src="/felipe_celis.jpg" 
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-accent-light to-accent bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="h-1 w-24 bg-gradient-gold mx-auto mb-6 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {personalInfo.title}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a 
              href="#teaching"
              className="px-6 md:px-8 py-3 bg-gradient-to-r from-accent to-accent-light text-primary font-bold rounded-full hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 text-sm md:text-base"
            >
              View Teaching Portfolio
            </a>
            <a 
              href="#contact"
              className="px-6 md:px-8 py-3 glass-strong border-2 border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-105 text-sm md:text-base"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator - moved further down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-accent/60 animate-bounce">
            <span className="text-sm font-light">Scroll</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
