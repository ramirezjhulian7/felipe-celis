import { motion } from 'framer-motion';
import { ParallaxLayer } from '../components/ParallaxLayer';
import { BookOpen, FileText, Lightbulb, Target, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, contentTranslations } from '../data/translations';

const Research = () => {
  const { language } = useLanguage();
  const t = translations[language].research;
  const research = contentTranslations[language].research;

  return (
    <section id="research" className="py-32 bg-gradient-to-b from-primary via-secondary to-primary text-white relative overflow-hidden">
      {/* Parallax background elements */}
      <ParallaxLayer speed={0.2} className="absolute top-20 left-10 opacity-5">
        <BookOpen size={180} className="text-accent" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.15} className="absolute bottom-40 right-10 opacity-5">
        <FileText size={160} className="text-accent-light" />
      </ParallaxLayer>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="h-1 w-32 bg-gradient-gold mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Master's Thesis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 border-2 border-accent/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-accent" size={36} />
              <h3 className="text-3xl font-bold">{t.thesis}</h3>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-accent">{research.thesis.title}</h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  {research.thesis.type}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-light rounded-full" />
                  {research.thesis.institution}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  {research.thesis.year}
                </span>
              </div>
              <p className="text-lg leading-relaxed text-gray-300 mt-4">
                {research.thesis.abstract}
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Research Areas */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-accent" size={32} />
                <h3 className="text-2xl font-bold">{t.researchAreas}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {research.researchAreas.map((area, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 glass rounded-full text-sm text-gray-200 border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 cursor-default"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Works in Progress */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="text-accent" size={32} />
                <h3 className="text-2xl font-bold">{t.worksInProgress}</h3>
              </div>
              
              <ul className="space-y-3">
                {research.worksInProgress.map((work, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-gray-200"
                  >
                    <span className="text-accent mt-1">•</span>
                    <span className="text-lg">{work}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Conference Presentations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-accent" size={32} />
              <h3 className="text-2xl font-bold">{t.conferencePresentations}</h3>
            </div>
            
            <div className="space-y-6">
              {research.conferencePresentations.map((presentation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-accent pl-6 hover:border-accent-light transition-colors"
                >
                  <h4 className="text-xl font-semibold text-white mb-2">{presentation.title}</h4>
                  <div className="text-sm text-gray-300 mb-3">
                    <p className="italic">{presentation.conference}</p>
                    <p>{presentation.location} | {presentation.year}</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{presentation.abstract}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
