# Japan Map Marker Tool

A modern, interactive web application for creating customizable Japan prefecture maps with data visualization capabilities. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring full multi-language support.

## ✨ Features

- **Interactive Prefecture Mapping**: Click and color Japanese prefectures with custom themes
- **Resizable Info Cards**: Drag-and-drop information cards with corner resize functionality
- **Multi-language Support**: Full internationalization support for Traditional Chinese (zh-TW), Japanese (ja), and English (en)
- **Export Functionality**: Export maps as PNG/JPG with various background options
- **Template System**: Pre-built card templates for travel levels, safety indices, population density, and custom data
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Google Ads Compliant**: Includes all required legal pages for advertising approval

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager
- Docker (optional, for containerized deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd svgmaker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🐳 Docker Setup

### Development with Docker

1. **Build and run the development container**
   ```bash
   docker-compose up svgmaker-dev
   ```

2. **Access the application**
   Visit `http://localhost:3000`

### Production with Docker

1. **Build the production image**
   ```bash
   docker-compose --profile production build svgmaker-prod
   ```

2. **Run the production container**
   ```bash
   docker-compose --profile production up svgmaker-prod
   ```

3. **Access the production app**
   Visit `http://localhost:3001`

### Full Production Stack with Nginx

```bash
# Run with nginx reverse proxy
docker-compose --profile nginx up
```

## 📁 Project Structure

```
svgmaker/
├── src/
│   ├── app/[locale]/           # Next.js app router with i18n
│   │   ├── page.tsx           # Main application page
│   │   ├── privacy/           # Privacy policy page
│   │   ├── terms/             # Terms of service page
│   │   ├── about/             # About page
│   │   └── contact/           # Contact page
│   ├── components/            # React components
│   │   ├── MapCanvas.tsx      # Main map display component
│   │   ├── ResizableInfoCard.tsx # Interactive info cards
│   │   ├── ControlPanel.tsx   # Export settings panel
│   │   └── ...               # Other UI components
│   ├── context/              # React context providers
│   │   ├── MapContext.tsx    # Map state management
│   │   └── CardContext.tsx   # Card template management
│   ├── data/                 # Static data files
│   │   ├── prefectures.ts    # Prefecture definitions
│   │   └── rankings.ts       # Ranking data
│   ├── types/                # TypeScript type definitions
│   ├── messages/             # i18n translation files
│   │   ├── zh-TW.json        # Traditional Chinese
│   │   ├── ja.json           # Japanese
│   │   └── en.json           # English
│   └── middleware.ts         # Next.js middleware for i18n
├── public/                   # Static assets
├── Dockerfile               # Production Docker configuration
├── Dockerfile.dev          # Development Docker configuration
├── docker-compose.yml      # Docker compose configuration
└── README.md               # This file
```

## 🛠 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 🌍 Internationalization

The application supports three languages:

- **Traditional Chinese (zh-TW)** - Default language
- **Japanese (ja)** - Full Japanese localization
- **English (en)** - Complete English translation

### Adding New Languages

1. Create a new message file in `src/messages/[locale].json`
2. Add the locale to `src/middleware.ts`
3. Update the language switcher component
4. Test all pages and components with the new locale

## 🎨 Customization

### Adding New Card Templates

1. Define the template in `src/context/CardContext.tsx`
2. Add translations in all language files
3. Update the data selector component

### Modifying Map Regions

1. Update prefecture data in `src/data/prefectures.ts`
2. Modify SVG files in the `public/` directory
3. Adjust the map canvas component as needed

## 📦 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Docker Production

1. Build the production image:
   ```bash
   docker build -t svgmaker .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 svgmaker
   ```

### Traditional VPS/Server

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_APP_URL` - Your application URL
- `NEXT_PUBLIC_DEFAULT_LOCALE` - Default language
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email address
- Analytics IDs (optional)
- Social media links (optional)

### Build Configuration

The application uses:
- **Next.js 15** with App Router
- **Turbopack** for fast development
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety
- **next-intl** for internationalization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain i18n support for all new features
- Write descriptive commit messages
- Test on multiple screen sizes and languages

## 📄 Legal Pages

The application includes complete legal pages for Google Ads compliance:

- **Privacy Policy** - Data collection and usage policies
- **Terms of Service** - Usage terms and conditions
- **About** - Application description and features
- **Contact** - Support and business contact information

All legal pages are fully internationalized and accessible via the footer.

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   ```

2. **Node modules issues**
   ```bash
   # Clean install
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Docker build fails**
   ```bash
   # Clean Docker cache
   docker system prune -a
   ```

4. **i18n routing issues**
   - Check middleware configuration
   - Verify locale files exist
   - Ensure proper Link usage

## 📊 Performance

The application is optimized for:
- Fast initial load times with Next.js optimization
- Efficient bundle splitting
- Optimized images and assets
- Client-side routing for smooth navigation

## 🔒 Security

- No sensitive data in client-side code
- Environment variables properly configured
- Secure headers via Next.js
- Input validation on all forms

## 📈 Analytics

Optional analytics integration:
- Google Analytics 4 support
- Google Tag Manager compatibility
- Custom event tracking for map interactions

## 📞 Support

For technical support or questions:
- Create an issue in the repository
- Contact: support@example.com
- Documentation: Check the wiki

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- The open-source community for various packages and tools
- Japan government for prefecture data and boundaries

---

Made with ❤️ for the Japan travel and data visualization community.