# AVELORA — Luxury African Travel Agency

**Discover Africa. Experience Extraordinary.**

AVELORA is a responsive, interactive luxury African travel agency web application built with **React** and **Vite**. Designed with an editorial aesthetic inspired by refined international hospitality brands, the platform showcases curated African safari wilderness journeys, Indian Ocean island escapes, bespoke travel services, and personalised holiday planning.

## Brand Palette & Design System

| Colour Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Midnight Navy** | `#142B49` | Primary brand authority, headings, header/footer, and primary buttons |
| **Pure White** | `#FFFFFF` | Clean editorial backgrounds, cards, and generous breathing space |
| **Champagne Gold** | `#C6A66B` | Subtle luxury accents, borders, dividers, and highlight buttons |
| **Warm Ivory** | `#F5F3EE` | Alternating section backgrounds and soft visual contrast |

## Pages & Features

1. **Home (`src/pages/Home.jsx`)**: Full-bleed hero banner, brand introduction, featured African destinations, five signature travel experience categories, core AVELORA advantages, editorial travel inspiration, and call-to-action sections.
2. **About Us (`src/pages/About.jsx`)**: Our Story, Vision, Mission, Travel Philosophy, and Six Core Values presented in an editorial split layout.
3. **Services (`src/pages/Services.jsx`)**: Five distinct luxury travel service categories with indicative guide pricing, an interactive **Accessible-Luxury vs. Ultra-Luxury** tier comparison (`useState`), and a four-step journey planning overview.
4. **Gallery & Destination Explorer (`src/pages/Gallery.jsx`)**: Twelve curated African destinations with interactive category filtering (`useState`) across seven categories and an interactive detail modal (`DestinationModal.jsx`).
5. **Registration (`src/pages/Registration.jsx`)**: Interactive Traveller Preference Profile form collecting personal details, preferred travel categories, favourite destinations, accommodation style, companion count, and interests with client-side validation and confirmation summary.
6. **Contact Us & Quotation Enquiry (`src/pages/Contact.jsx`)**: Two-stage bespoke quotation enquiry workflow (`Stage 1: Short Enquiry Overview` and `Stage 2: Detailed Travel Preferences`), private concierge contact details, interactive social media channels, and a direct message contact form with validation.

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Button.jsx            # Reusable button supporting primary, gold, outline, and outline-light variants
│   ├── DestinationCard.jsx   # Reusable card displaying destination image, country, category, and actions
│   ├── DestinationModal.jsx  # Interactive modal displaying extended destination highlights
│   ├── Footer.jsx            # Global luxury footer with quick navigation and concierge details
│   ├── Header.jsx            # Sticky responsive header with mobile navigation drawer
│   ├── SectionTitle.jsx      # Reusable editorial section header with subtitle, title, and gold divider
│   └── ServiceCard.jsx       # Reusable service card with experience list and quote trigger
├── data/
│   ├── destinations.js       # 12 curated African destinations and category constants
│   └── services.js           # 5 signature travel service categories
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Gallery.jsx
│   ├── Home.jsx
│   ├── Registration.jsx
│   └── Services.jsx
├── App.jsx                   # Root state, hash-based SPA navigation, and pre-filled quote routing
├── index.css                 # Complete responsive CSS design system and media queries
└── main.jsx                  # Application entry point