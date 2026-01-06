import { Download } from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const PDFExport = () => {
  const { language } = useLanguage();
  const t = translations[language].research;

  const generatePDF = async () => {
    try {
      // Create a temporary container for PDF content
      const pdfContent = document.getElementById('pdf-content');
      
      if (!pdfContent) {
        console.error('PDF content element not found');
        return;
      }

      // Show loading state
      const button = document.getElementById('pdf-download-button');
      if (button) {
        button.textContent = 'Generating...';
        button.setAttribute('disabled', 'true');
      }

      // Use html2canvas to capture the content
      const canvas = await html2canvas(pdfContent, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#0f0f0f'
      });

      const imgData = canvas.toDataURL('image/png');
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      
      // Add image to PDF
      pdf.addImage(imgData, 'PNG', imgX, 0, imgWidth * ratio, imgHeight * ratio);
      
      // Save PDF
      pdf.save('Felipe_Celis_Gil_CV.pdf');

      // Reset button state
      if (button) {
        button.textContent = t.downloadCV;
        button.removeAttribute('disabled');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  };

  return (
    <button
      id="pdf-download-button"
      onClick={generatePDF}
      className="inline-flex items-center gap-3 px-6 py-3 glass-strong border-2 border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-105 text-sm md:text-base"
      aria-label={t.downloadCV}
    >
      <Download size={20} />
      {t.downloadCV}
    </button>
  );
};

export default PDFExport;
