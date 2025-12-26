import { motion } from 'framer-motion';
import { ParallaxLayer } from '../components/ParallaxLayer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, contentTranslations } from '../data/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const personalInfo = contentTranslations[language].personalInfo;
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-secondary via-primary to-secondary text-white relative overflow-hidden">
      {/* Parallax background elements */}
      <ParallaxLayer speed={0.3} className="absolute top-20 left-1/4 opacity-10">
        <div className="w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.2} className="absolute bottom-20 right-1/4 opacity-10">
        <div className="w-80 h-80 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
      </ParallaxLayer>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="h-1 w-32 bg-gradient-gold mx-auto mb-8 rounded-full" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-12 leading-relaxed"
          >
            {t.description}
          </motion.p>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="glass-strong rounded-xl p-6 hover:border-accent border border-transparent transition-all duration-300 group">
              <Mail className="text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-sm text-gray-400 mb-1">{t.email}</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-white hover:text-accent transition-colors text-sm font-semibold"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="glass-strong rounded-xl p-6 hover:border-accent border border-transparent transition-all duration-300 group">
              <Phone className="text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-sm text-gray-400 mb-1">{t.phone}</p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-white hover:text-accent transition-colors text-sm font-semibold"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="glass-strong rounded-xl p-6 hover:border-accent border border-transparent transition-all duration-300 group">
              <MapPin className="text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-sm text-gray-400 mb-1">{t.location}</p>
              <p className="text-white text-sm font-semibold">{personalInfo.location}</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-gold text-primary font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
            >
              <Send className="group-hover:translate-x-1 transition-transform" size={24} />
              {t.sendMessage}
            </a>
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-sm text-gray-500"
          >
            © {new Date().getFullYear()} {personalInfo.name}. {t.copyright}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
