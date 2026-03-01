import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { SlideData } from '../app/slides/types';

export async function exportToPDF(slides: SlideData[]): Promise<void> {
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 297;
  const pageHeight = 210;

  // Create a temporary container for rendering slides
  const tempContainer = document.createElement('div');
  tempContainer.style.position = 'absolute';
  tempContainer.style.left = '-9999px';
  tempContainer.style.width = `${pageWidth * 3.78}px`; // Convert mm to px (approx)
  tempContainer.style.height = `${pageHeight * 3.78}px`;
  document.body.appendChild(tempContainer);

  try {
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];

      // Create slide element
      const slideElement = document.createElement('div');
      slideElement.style.width = '100%';
      slideElement.style.height = '100%';
      slideElement.style.padding = '40px';
      slideElement.style.backgroundColor = 'white';
      slideElement.style.boxSizing = 'border-box';
      slideElement.style.fontFamily = 'system-ui, -apple-system, sans-serif';

      // Build slide content based on type
      slideElement.innerHTML = buildSlideHTML(slide);
      tempContainer.innerHTML = '';
      tempContainer.appendChild(slideElement);

      // Wait for fonts and rendering
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Capture as canvas
      const canvas = await html2canvas(slideElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: 'white',
        width: slideElement.scrollWidth,
        height: slideElement.scrollHeight,
      });

      // Add to PDF
      const imgData = canvas.toDataURL('image/png');
      
      if (i > 0) {
        pdf.addPage();
      }

      pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);

      // Add slide number footer
      pdf.setFontSize(10);
      pdf.setTextColor(150, 150, 150);
      pdf.text(`Slide ${i + 1} of ${slides.length}`, pageWidth - 30, pageHeight - 10);
    }

    // Save PDF
    pdf.save('Week1-Python-Foundations-for-BIM.pdf');
  } finally {
    // Cleanup
    document.body.removeChild(tempContainer);
  }
}

function buildSlideHTML(slide: SlideData): string {
  const { type, title, content } = slide;

  let contentHTML = '';

  switch (type) {
    case 'opening':
      contentHTML = `
        <div style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
          <div style="margin-bottom: 30px;">
            <span style="display: inline-block; padding: 8px 16px; background: #f1f5f9; color: #475569; border-radius: 20px; font-size: 14px; font-weight: 500;">
              Week 1 of 8
            </span>
          </div>
          <h1 style="font-size: 36px; font-weight: 700; color: #0f172a; margin-bottom: 20px; max-width: 700px; line-height: 1.2;">
            ${title}
          </h1>
          ${content.subtitle ? `<p style="font-size: 20px; color: #64748b; margin-bottom: 40px;">${content.subtitle}</p>` : ''}
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; text-align: left; max-width: 500px;">
            ${content.bullets?.map((b, i) => `
              <div style="display: flex; align-items: flex-start; gap: 10px; padding: 12px; background: #f8fafc; border-radius: 8px;">
                <span style="flex-shrink: 0; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; background: #e2e8f0; border-radius: 50%; font-size: 12px; font-weight: 600; color: #475569;">
                  ${i + 1}
                </span>
                <span style="font-size: 13px; color: #475569;">${b}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      break;

    case 'agenda':
      contentHTML = `
        <div style="height: 100%; display: flex; flex-direction: column;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 30px;">${title}</h2>
          <div style="flex: 1; display: flex; align-items: center;">
            <div style="width: 100%;">
              ${content.bullets?.map((bullet, i) => {
                const [topic, duration] = bullet.split('(');
                return `
                  <div style="display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid #e2e8f0;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <span style="width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; background: #f1f5f9; border-radius: 50%; font-size: 12px; font-weight: 600; color: #64748b;">
                        ${i + 1}
                      </span>
                      <span style="font-size: 16px; color: #1e293b;">${topic.trim()}</span>
                    </div>
                    <span style="font-size: 13px; color: #94a3b8; font-family: monospace;">${duration?.replace(')', '')}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
      break;

    case 'concept':
      contentHTML = `
        <div style="height: 100%; display: flex; flex-direction: column;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 30px;">${title}</h2>
          <div style="flex: 1; display: flex; align-items: center;">
            <ul style="list-style: none; padding: 0; margin: 0; max-width: 700px;">
              ${content.bullets?.map((bullet) => `
                <li style="display: flex; gap: 12px; margin-bottom: 18px; font-size: 17px; color: #334155; line-height: 1.5;">
                  <span style="flex-shrink: 0; width: 6px; height: 6px; margin-top: 10px; background: #94a3b8; border-radius: 50%;"></span>
                  ${bullet}
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;
      break;

    case 'demo':
      contentHTML = `
        <div style="height: 100%; display: flex; flex-direction: column;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 20px;">${title}</h2>
          <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
            ${content.code ? `
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">
                ${content.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
              </div>
            ` : ''}
          </div>
        </div>
      `;
      break;

    case 'exercise':
      const ex = content.exercise;
      contentHTML = `
        <div style="height: 100%; display: flex; flex-direction: column;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 20px;">${title}</h2>
          ${ex ? `
            <div style="flex: 1; display: flex; flex-direction: column; gap: 12px;">
              <div style="padding: 16px; background: #f8fafc; border-radius: 8px;">
                <h3 style="font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Problem</h3>
                <p style="font-size: 15px; color: #1e293b; margin: 0;">${ex.problem}</p>
              </div>
              ${ex.input ? `
                <div style="padding: 12px; background: #eff6ff; border: 1px solid #dbeafe; border-radius: 8px;">
                  <h3 style="font-size: 11px; font-weight: 600; color: #2563eb; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Sample Input</h3>
                  <code style="font-size: 13px; color: #1d4ed8; font-family: monospace;">${ex.input}</code>
                </div>
              ` : ''}
              ${ex.expectedOutput ? `
                <div style="padding: 12px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px;">
                  <h3 style="font-size: 11px; font-weight: 600; color: #16a34a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Expected Output</h3>
                  <pre style="font-size: 13px; color: #15803d; font-family: monospace; margin: 0; white-space: pre-wrap;">${ex.expectedOutput}</pre>
                </div>
              ` : ''}
              <div style="padding: 12px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px;">
                <h3 style="font-size: 11px; font-weight: 600; color: #d97706; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Hint</h3>
                <p style="font-size: 13px; color: #92400e; margin: 0;">${ex.hint}</p>
              </div>
            </div>
          ` : ''}
        </div>
      `;
      break;

    case 'recap':
      contentHTML = `
        <div style="height: 100%; display: flex; flex-direction: column;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 30px;">${title}</h2>
          <div style="flex: 1; display: flex; align-items: center;">
            <div style="width: 100%;">
              ${content.recapItems?.map((item, i) => `
                <div style="display: flex; align-items: flex-start; gap: 12px; padding: 14px; background: #f8fafc; border-radius: 8px; margin-bottom: 10px;">
                  <span style="flex-shrink: 0; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; background: #e2e8f0; border-radius: 50%; font-size: 12px; font-weight: 700; color: #475569;">
                    ${i + 1}
                  </span>
                  <span style="font-size: 15px; color: #475569; padding-top: 3px;">${item}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
      break;

    default:
      contentHTML = `
        <div style="height: 100%; display: flex; flex-direction: column;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 20px;">${title}</h2>
          <p style="font-size: 16px; color: #64748b;">Slide type: ${type}</p>
        </div>
      `;
  }

  return contentHTML;
}
