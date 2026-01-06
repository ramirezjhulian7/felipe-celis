import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { usePDFExport } from '../hooks/usePDFExport';

const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].nav;
  const tPdf = translations[language].pdf;
  const { exportToPDF } = usePDFExport();

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero section (approx 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.about, href: '#about' },
    { label: t.research, href: '#research' },
    { label: t.teaching, href: '#teaching' },
    { label: t.contact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePDFExport = async () => {
    setIsExporting(true);
    try {
      await exportToPDF();
    } catch (error) {
      console.error('PDF export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ position: 'fixed' }}
          className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-accent/20"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Name */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-lg font-bold bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
                aria-label="Scroll to top"
              >
                Felipe Celis Gil
              </motion.button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-200 hover:text-accent transition-colors text-sm font-medium relative group"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                  </button>
                ))}
                
                {/* PDF Export Button */}
                <button
                  onClick={handlePDFExport}
                  disabled={isExporting}
                  className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 rounded-full transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  title={tPdf.export}
                  aria-label={tPdf.export}
                >
                  <Download size={16} className={isExporting ? 'animate-bounce' : ''} />
                  <span>{isExporting ? tPdf.downloading : tPdf.export}</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-accent hover:scale-110 transition-transform"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden glass-dark border-t border-accent/10"
              >
                <div className="container mx-auto px-4 py-4 space-y-3">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left px-4 py-3 text-gray-200 hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                      aria-label={`Navigate to ${item.label}`}
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  {/* PDF Export Button for Mobile */}
                  <button
                    onClick={handlePDFExport}
                    disabled={isExporting}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 rounded-lg transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label={tPdf.export}
                  >
                    <Download size={18} className={isExporting ? 'animate-bounce' : ''} />
                    <span>{isExporting ? tPdf.downloading : tPdf.export}</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default StickyNav;
