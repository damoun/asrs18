# ASRS-18 ADHD Self-Report Scale

A professional, high-performance, and privacy-first static website for the Adult ADHD Self-Report Scale (ASRS v1.1). Designed for both clinical accuracy and modern social sharing.

**Live Site:** [asrs18.com](https://asrs18.com)

## Features

- **Official ASRS v1.1 Algorithm:** Implements the full 18-question checklist with weighted scoring for Parts A and B.
- **Multilingual:** Native support for English, French, Spanish, Italian, and Portuguese.
- **Clinical PDF Export:** Generate professional A4 PDF reports for medical practitioners, including a full answer breakdown.
- **Social Sharing:** Create 9:16 vertical images optimized for Instagram, TikTok, and Snapchat stories.
- **Advanced Accessibility:**
  - **OpenDyslexic Support:** Toggleable font optimized for users with dyslexia.
  - **Focus Mode:** Guided questionnaire with auto-scrolling to the next question.
  - **Dark Mode:** Seamless theme integration via Pico.css.
- **Privacy First:** 100% client-side processing. No health data is ever transmitted to or stored on a server.
- **Performance:** Built with Astro 6 for near-instant load times and zero-JS when possible.

## Tech Stack

- **Framework:** [Astro](https://astro.build) (Static Site Generation)
- **Styling:** [Pico.css](https://picocss.com) (Semantic, lightweight CSS)
- **PDF Generation:** [jsPDF](https://github.com/parallax/jsPDF) & [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable)
- **Image Generation:** [html2canvas](https://html2canvas.hertzen.com/)
- **Infrastructure:** GitHub Pages + GitHub Actions (CI/CD)

## Getting Started

### Local Development

1. **Clone the repo:**
   ```bash
   git clone https://github.com/damoun/asrs18.git
   cd asrs18
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

## Disclaimer

This tool is a symptom checklist, not a diagnostic instrument. Results should be shared with a qualified healthcare professional for a formal evaluation.
