**Scroll-Driven Hero Section Animation**

A modern frontend animation project that demonstrates a premium hero section with smooth scroll-based motion and interactive effects. The project focuses on motion quality, performance, and clean UI behavior using scroll-linked animations and subtle user interactions.

This project was built as part of a frontend assignment to showcase understanding of animations, scroll interactions, and polished UI design.

🚀Live Demo

🔗 https://car-scroll-animation-xi.vercel.app/ 
🔗 https://github.com/pooja-tour/car-scroll-animation

🎯Project Objective

The goal of this project is to recreate a high-quality hero section animation inspired by a reference demo, with emphasis on:

- Smooth intro animations
- Scroll-driven motion (scroll-linked, not autoplay)
- Interactive user experience
- Clean, premium UI design
- Performance-friendly animations

✨Features

- Smooth headline and stats animation on initial page load  
- Scroll-driven hero image movement using GSAP ScrollTrigger  
- Interactive mouse tilt effect on the hero visual  
- Dynamic light sweep effect that follows cursor movement  
- Subtle idle floating animation for a cinematic feel  
- Clean light-theme background with modern UI styling  
- Reflection effect for added depth and realism  
- Transform-based animations for better performance  

 🛠 Tech Stack

- Next.js (App Router)
- React.js
- GSAP (ScrollTrigger)
- Tailwind CSS
- JavaScript
- HTML & CSS

📁 Project Structure

car-scroll-animation/
├── app/
│ ├── globals.css
│ ├── layout.js
│ └── page.tsx
├── components/
│ ├── Hero.jsx
│ └── Stats.jsx
├── public/
│ └── images/
│ └── hero.png
├── package.json
└── README.md

🧩 How It Works

 Initial Load Animation
- Headline and statistics animate smoothly when the page loads.
- Animations use easing and staggered timing for a premium feel.
Scroll-Based Animation
- The hero visual responds directly to the user’s scroll position.
- Motion is scrubbed to scroll progress using GSAP ScrollTrigger.
- Only transform properties (translate, scale, rotate) are used for performance.
User Interaction
- Mouse movement applies a subtle tilt to the hero visual.
- A light sweep follows the cursor to add depth and interactivity.
- Animations are responsive and feel fluid without being distracting.

