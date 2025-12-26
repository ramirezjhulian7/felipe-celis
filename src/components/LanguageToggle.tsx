import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            onClick={toggleLanguage}
            className="z-50 glass-strong rounded-full p-3 border-2 border-accent/30 hover:border-accent transition-all duration-300 hover:scale-110 group"
            style={{ position: 'fixed', top: '1.5rem', right: '1.5rem' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="flex items-center gap-2">
                <Globe className="text-accent group-hover:rotate-12 transition-transform" size={20} />
                <span className="text-accent font-bold text-sm uppercase">
                    {language}
                </span>
            </div>
        </motion.button>
    );
};

export default LanguageToggle;
