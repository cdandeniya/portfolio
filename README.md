# Chanul Dandeniya - Portfolio Website

A modern, minimalist portfolio website showcasing Chanul Dandeniya's skills, experience, and projects. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth animations and enhanced user experience.

## 🚀 Features

- **Modern Design**: Clean, minimalist design inspired by OuterLabs Studio and We Are New Studio
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Custom cursor, hover effects, and smooth transitions
- **SEO Optimized**: Meta tags, Open Graph, and structured data for better search visibility
- **Performance**: Optimized for fast loading and smooth interactions

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with animated text and call-to-action buttons
2. **About**: Education details and personal information with key achievements
3. **Experience**: Timeline of work experience at OuterLabs Studio, Sai AI, and Amazon
4. **Projects**: Showcase of technical projects with detailed descriptions
5. **Skills**: Categorized skills with interactive progress bars
6. **Contact**: Contact form and social links

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Cursor.tsx           # Custom cursor component
│   ├── Navigation.tsx       # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Experience timeline
│   ├── Projects.tsx         # Projects showcase
│   ├── Skills.tsx           # Skills section
│   └── Contact.tsx          # Contact form
├── public/                  # Static assets
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: '#0a0a0a',
  secondary: '#f5f5f5',
  accent: '#3b82f6',
  // ... more colors
}
```

### Content
Update the content in each component file to reflect your personal information:
- `components/Hero.tsx` - Update name, title, and description
- `components/About.tsx` - Update education and personal info
- `components/Experience.tsx` - Update work experience
- `components/Projects.tsx` - Update project details
- `components/Skills.tsx` - Update skills and proficiency levels
- `components/Contact.tsx` - Update contact information

### Animations
Customize animations in the component files using Framer Motion:

```javascript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  // Content
</motion.div>
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: cdandeniya1@gmail.com
- **LinkedIn**: [Chanul Dandeniya](https://www.linkedin.com/in/cdandeniya/)
- **GitHub**: [cdandeniya](https://github.com/cdandeniya)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS 