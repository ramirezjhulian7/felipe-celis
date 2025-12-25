import { motion } from 'framer-motion';
import { personalInfo, skills } from '../data/content';
import { ParallaxLayer } from '../components/ParallaxLayer';
import { Sparkles, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-secondary via-primary to-secondary text-white relative overflow-hidden">
      {/* Parallax background elements */}
      <ParallaxLayer speed={0.2} className="absolute top-20 right-10 opacity-5">
        <Sparkles size={200} className="text-accent" />
      </ParallaxLayer>
      
      <ParallaxLayer speed={0.15} className="absolute bottom-20 left-10 opacity-5">
        <Globe size={180} className="text-accent-light" />
      </ParallaxLayer>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-32 bg-gradient-gold mx-auto mb-16 rounded-full" />
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-accent group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-2xl font-bold text-white">Background</h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-300">
              {personalInfo.bio}
            </p>
          </motion.div>
          
          {/* Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group border-2 border-accent/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-accent group-hover:rotate-12 transition-transform" size={32} />
              <h3 className="text-2xl font-bold text-accent">Teaching Philosophy</h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-300">
              {personalInfo.philosophy}
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Core Skills */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[...skills.pedagogical, ...skills.technical].map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 glass-strong rounded-full text-sm text-gray-300 border border-accent/30 hover:border-accent hover:text-accent transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Languages */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <Globe className="text-accent" size={24} />
                Languages
              </h3>
              <div className="space-y-4">
                {skills.languages.map((lang, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center border-b border-accent/20 pb-3 hover:border-accent/50 transition-colors group"
                  >
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{lang.language}</span>
                    <span className="px-3 py-1 bg-gradient-gold text-black text-sm font-semibold rounded-full">
                      {lang.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
