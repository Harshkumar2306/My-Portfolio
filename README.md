# 🚀 Harsh Kumar | Engineering Folio

An ultra-premium, brutalist-inspired interactive developer portfolio built with Next.js and Framer Motion. Designed to break away from standard scrolling websites, this portfolio utilizes a horizontal full-screen slider architecture, providing a highly engaging, presentation-like experience across all devices.

Built using **Next.js 14, React, Framer Motion, Vanilla CSS, and TypeScript**.

## 🌟 Live Demo
🌐 **Live Portfolio:** ([harsh-kumar-blush.vercel.app](https://harsh-kumar-blush.vercel.app/))

## 🌟 Features & Architecture

### 1. Horizontal Slider Architecture
- **Presentation-Style Navigation:** Replaces vertical scrolling with a fixed-height, horizontal sliding interface powered by Framer Motion.
- **Keyboard & Click Support:** Navigate seamlessly using `ArrowLeft` / `ArrowRight` keys, or the floating chevron buttons.
- **Deep Linking:** Supports query parameters (e.g., `?section=2`) to link directly to specific slides.

### 2. Editorial & Brutalist UI/UX
- **Custom Design System:** Built without Tailwind; uses a highly optimized vanilla CSS variables architecture (`globals.css`) for maximum control.
- **Glassmorphism & Micro-animations:** Fluid hover states on all interactive elements, dynamic map rendering, and smooth page transitions.
- **Strict Grid Alignments:** Perfect, mathematical grid alignments and sharp `0px` border-radius components for a premium, technical aesthetic.

### 3. Advanced Responsive Engine
- **Context-Aware Scaling:** Dynamically switches from a strict "Full-Screen Lock" on desktop to an "Internal Scroll" model on mobile phones.
- **Fluid Typography:** Uses CSS `clamp()` to perfectly scale massive headers without breaking mobile viewports.
- **4-Tier Breakpoints:** Custom layouts for Desktop, Tablet, standard Mobile, and compact phones (e.g., iPhone SE).

## 🛠️ Local Setup & Testing

### Prerequisites
- Node.js 18+

### 1. Clone & Install
```bash
git clone https://github.com/Harshkumar2306/My-Portfolio.git
cd My-Portfolio
npm install
```
*(Note: If you run into peer dependency issues with `react-simple-maps`, the repo includes an `.npmrc` file configured to `legacy-peer-deps=true`)*

### 2. Run Development Server
```bash
npm run dev
```
The portfolio will be available at [http://localhost:3000](http://localhost:3000).

### 3. Build for Production
```bash
npm run build
npm start
```

## ☁️ Cloud Deployment (Vercel)

This project is highly optimized for deployment on Vercel.

1. Push this repository to GitHub.
2. Go to **Vercel** → **Add New Project** → Select your repo.
3. Set the Framework Preset to **Next.js**.
4. Click **Deploy**. Vercel will automatically detect the settings and deploy your portfolio globally in seconds.

## 📁 Project Structure

```text
My-Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout and metadata configuration
│   │   ├── page.tsx           # Main slider logic, state, and UI components
│   │   └── globals.css        # Responsive design system & variables
│   ├── components/
│   │   ├── IndiaMap.tsx       # Custom SVG map configuration
│   │   └── IndiaMapComponent.tsx # Map wrapper and interactivity
├── public/                    # Static assets (me.JPEG, icon.png)
├── tsconfig.json              # Strict TypeScript configuration
└── next.config.mjs            # Next.js bundler settings
```

## 🤝 Contributing
Feel free to fork this repository if you want to use the slider architecture for your own portfolio! If you find bugs or want to add features, open an issue or submit a pull request.

## 📝 License
This project is licensed under the MIT License.
