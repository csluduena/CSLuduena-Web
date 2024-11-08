# CSLuduena Portfolio

## Description
```CSS
This project is a personal portfolio website for Carlos Sebastian Ludueña, showcasing skills, experience, and projects. It's built using vanilla JavaScript with a custom routing system and internationalization support.
```

## Features
- Responsive design
- Single Page Application (SPA) architecture
- Custom routing system
- Internationalization (i18n) support for English and Spanish
- Sections for Home, Experience, About, Portfolio, and Contact

## Technologies Used
- HTML5
- CSS3 (with Tailwind CSS)
- JavaScript (ES6+)
- Vite (for building and development)
- i18next (for internationalization)

## Project Structure
```javascript
CSLuduena/
├── public/
│   └── projects/
│       └── (project images)
├── src/
│   ├── assets/
│   ├── components/
│   ├── i18n/
│   │   └── locales/
│   ├── pages/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Experience/
│   │   ├── Home/
│   │   └── Portfolio/
│   ├── utils/
│   ├── index.css
│   ├── main.js
│   └── router.js
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Setup and Installation
1. Clone the repository
2. Install dependencies:
npm install
3. Run the development server:
npm run dev
4. For production build:
npm run build

## Deployment
To deploy this project:
1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server's public directory (e.g., `public_html` on Hostinger)
3. Ensure your server is configured to handle client-side routing (see .htaccess configuration in the deployment guide)

## Contributing
This is a personal project and is not open for contributions.

## License
All rights reserved. This code is private and confidential.

## Contact
Carlos Sebastian Ludueña
- Email: contact@csluduena.com
- LinkedIn: [csluduena](https://www.linkedin.com/in/csluduena)
- GitHub: [csluduena](https://github.com/csluduena)
- Website: [www.csluduena.com](https://www.csluduena.com)