import { useLanguage } from '../contexts/LanguageContext';
import { translations, contentTranslations } from '../data/translations';
import html2pdf from 'html2pdf.js';

export const usePDFExport = () => {
  const { language } = useLanguage();

  const exportToPDF = async () => {
    const t = translations[language];
    const content = contentTranslations[language];

    // Create a temporary container for the PDF content
    const element = document.createElement('div');
    element.style.width = '210mm'; // A4 width
    element.style.padding = '20mm';
    element.style.backgroundColor = '#ffffff';
    element.style.color = '#1a1a2e';
    element.style.fontFamily = 'Inter, sans-serif';

    // Get research data
    const researchSection = document.querySelector('[data-research-section]');
    
    let publicationsHTML = '';
    let conferencesHTML = '';
    let booksHTML = '';

    if (researchSection) {
      const publications = researchSection.querySelectorAll('[data-publication]');
      publications.forEach((pub) => {
        const title = pub.querySelector('[data-pub-title]')?.textContent || '';
        const journal = pub.querySelector('[data-pub-journal]')?.textContent || '';
        const description = pub.querySelector('[data-pub-description]')?.textContent || '';
        
        publicationsHTML += `
          <div style="margin-bottom: 15px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #e94560;">
            <h4 style="font-size: 16px; margin: 0 0 5px 0; color: #0f3460;">${title}</h4>
            <p style="font-size: 12px; margin: 0 0 5px 0; color: #666; font-style: italic;">
              ${journal}
            </p>
            <p style="font-size: 13px; margin: 0; line-height: 1.6;">
              ${description}
            </p>
          </div>
        `;
      });

      const conferences = researchSection.querySelectorAll('[data-conference]');
      conferences.forEach((conf) => {
        const title = conf.querySelector('[data-conf-title]')?.textContent || '';
        const event = conf.querySelector('[data-conf-event]')?.textContent || '';
        const description = conf.querySelector('[data-conf-description]')?.textContent || '';
        
        conferencesHTML += `
          <div style="margin-bottom: 15px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #0f3460;">
            <h4 style="font-size: 16px; margin: 0 0 5px 0; color: #0f3460;">${title}</h4>
            <p style="font-size: 12px; margin: 0 0 5px 0; color: #666; font-style: italic;">
              ${event}
            </p>
            <p style="font-size: 13px; margin: 0; line-height: 1.6;">
              ${description}
            </p>
          </div>
        `;
      });

      const books = researchSection.querySelectorAll('[data-book]');
      books.forEach((book) => {
        const title = book.querySelector('[data-book-title]')?.textContent || '';
        const bookName = book.querySelector('[data-book-name]')?.textContent || '';
        const description = book.querySelector('[data-book-description]')?.textContent || '';
        
        booksHTML += `
          <div style="margin-bottom: 15px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #16213e;">
            <h4 style="font-size: 16px; margin: 0 0 5px 0; color: #0f3460;">${title}</h4>
            <p style="font-size: 12px; margin: 0 0 5px 0; color: #666; font-style: italic;">
              ${bookName}
            </p>
            <p style="font-size: 13px; margin: 0; line-height: 1.6;">
              ${description}
            </p>
          </div>
        `;
      });
    }

    // Build PDF content
    element.innerHTML = `
      <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #0f3460; padding-bottom: 20px;">
        <div style="margin-bottom: 15px;">
          <img 
            src="${window.location.origin}/felipe_celis.jpg" 
            alt="Felipe Celis Gil" 
            style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 4px solid #e94560; box-shadow: 0 4px 12px rgba(233, 69, 96, 0.3);"
            crossorigin="anonymous"
          />
        </div>
        <h1 style="font-size: 32px; margin: 0; color: #0f3460;">Felipe Celis Gil</h1>
        <p style="font-size: 18px; margin: 10px 0; color: #16213e;">${content.personalInfo.title}</p>
      </div>

      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 24px; color: #0f3460; border-bottom: 2px solid #e94560; padding-bottom: 10px; margin-bottom: 15px;">
          ${t.about.title}
        </h2>
        <h3 style="font-size: 18px; color: #16213e; margin-top: 20px; margin-bottom: 10px;">
          ${t.about.background}
        </h3>
        <p style="font-size: 14px; line-height: 1.8; margin-bottom: 15px;">
          ${content.personalInfo.bio}
        </p>
        
        <h3 style="font-size: 18px; color: #16213e; margin-top: 20px; margin-bottom: 10px;">
          ${t.about.philosophy}
        </h3>
        <p style="font-size: 14px; line-height: 1.6;">
          ${content.personalInfo.philosophy}
        </p>
      </div>

      <div style="margin-bottom: 30px; page-break-before: always;">
        <h2 style="font-size: 24px; color: #0f3460; border-bottom: 2px solid #e94560; padding-bottom: 10px; margin-bottom: 15px;">
          ${t.research.title}
        </h2>
        
        <h3 style="font-size: 18px; color: #16213e; margin-top: 20px; margin-bottom: 10px;">
          ${t.research.publications}
        </h3>
        ${publicationsHTML || '<p style="font-size: 13px; color: #666;">No publications available.</p>'}

        <h3 style="font-size: 18px; color: #16213e; margin-top: 25px; margin-bottom: 10px;">
          ${t.research.conferencePresentations}
        </h3>
        ${conferencesHTML || '<p style="font-size: 13px; color: #666;">No conference presentations available.</p>'}

        ${booksHTML ? `
        <h3 style="font-size: 18px; color: #16213e; margin-top: 25px; margin-bottom: 10px;">
          ${language === 'es' ? 'Capítulos de Libros' : 'Book Chapters'}
        </h3>
        ${booksHTML}
        ` : ''}
      </div>

      <div style="margin-bottom: 30px; page-break-before: always;">
        <h2 style="font-size: 24px; color: #0f3460; border-bottom: 2px solid #e94560; padding-bottom: 10px; margin-bottom: 15px;">
          ${t.teaching.title}
        </h2>
        <h3 style="font-size: 18px; color: #16213e; margin-bottom: 10px;">
          ${t.teaching.experience}
        </h3>
        ${content.experience.map((exp) => `
          <div style="margin-bottom: 15px; padding: 10px; background-color: #f8f9fa;">
            <h4 style="font-size: 16px; margin: 0 0 5px 0; color: #0f3460;">${exp.role}</h4>
            <p style="font-size: 13px; margin: 0 0 8px 0; color: #666;">
              ${exp.institution} | ${exp.location} | ${exp.period}
            </p>
            ${exp.details ? `
              <ul style="font-size: 13px; margin: 0; padding-left: 20px; line-height: 1.6;">
                ${exp.details.map((detail: string) => `<li>${detail}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `).join('')}

        <h3 style="font-size: 18px; color: #16213e; margin-top: 25px; margin-bottom: 10px;">
          ${t.teaching.education}
        </h3>
        ${content.education.map((edu) => `
          <div style="margin-bottom: 15px; padding: 10px; background-color: #f8f9fa;">
            <h4 style="font-size: 16px; margin: 0 0 5px 0; color: #0f3460;">${edu.degree}</h4>
            <p style="font-size: 13px; margin: 0; color: #666;">
              ${edu.institution} | ${edu.location} | ${edu.year}
            </p>
            ${edu.details ? `<p style="font-size: 13px; margin: 5px 0 0 0;">${edu.details}</p>` : ''}
          </div>
        `).join('')}
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #0f3460;">
        <h2 style="font-size: 24px; color: #0f3460; margin-bottom: 15px;">
          ${t.contact.title}
        </h2>
        <p style="font-size: 14px; margin: 5px 0;">
          <strong>${t.contact.email}:</strong> ${content.personalInfo.email}
        </p>
        <p style="font-size: 14px; margin: 5px 0;">
          <strong>${t.contact.phone}:</strong> ${content.personalInfo.phone}
        </p>
        <p style="font-size: 14px; margin: 5px 0;">
          <strong>${t.contact.location}:</strong> ${content.personalInfo.location}
        </p>
        <p style="font-size: 12px; margin-top: 20px; color: #666; text-align: center;">
          ${t.pdf.generated} felipe-celis.com
        </p>
      </div>
    `;

    // PDF configuration
    const opt = {
      margin: 0,
      filename: `Felipe_Celis_Portfolio_${language.toUpperCase()}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
    };

    // Generate PDF
    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw error;
    }
  };

  return { exportToPDF };
};
