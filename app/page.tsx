'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);

  const transitions = [
    {
      title: "Morphing Blob Transition",
      description: "A high-end liquid blob that morphs organically between states. Uses advanced cubic-bezier timing and filter effects for premium fluidity.",
      demo: "blob",
      css: `.blob-transition {
  position: relative;
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: morph 8s ease-in-out infinite;
  filter: blur(2px);
}

@keyframes morph {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: rotate(0deg) scale(1);
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: rotate(90deg) scale(1.1);
  }
  50% {
    border-radius: 50% 50% 40% 60% / 30% 50% 60% 70%;
    transform: rotate(180deg) scale(0.95);
  }
  75% {
    border-radius: 40% 70% 60% 30% / 70% 40% 50% 60%;
    transform: rotate(270deg) scale(1.05);
  }
}`,
    },
    {
      title: "Liquid Wave Navigation",
      description: "Mesmerizing wave effect perfect for menu transitions. Features smooth sine wave motion with gradient trails for depth.",
      demo: "wave",
      css: `.wave-container {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(180deg,
    transparent 0%,
    rgba(255,255,255,0.1) 50%,
    rgba(255,255,255,0.3) 100%);
  animation: wave-flow 3s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
}

@keyframes wave-flow {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 0.8;
  }
  50% {
    transform: translateX(-25%) translateY(-20px);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(0);
    opacity: 0.8;
  }
}`,
    },
    {
      title: "Elastic Splash Effect",
      description: "Dynamic splash transition with elastic physics. Creates organic droplet-like animations with realistic bounce and stretch.",
      demo: "splash",
      css: `.splash-circle {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, #f093fb 0%, #f5576c 100%);
  border-radius: 50%;
  animation: splash 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
  transform-origin: center;
  filter: drop-shadow(0 10px 30px rgba(245, 87, 108, 0.5));
}

@keyframes splash {
  0% {
    transform: scale(0.8);
    border-radius: 50%;
  }
  25% {
    transform: scale(1.2) scaleY(0.8);
    border-radius: 50% 50% 40% 40%;
  }
  50% {
    transform: scale(1.1) scaleY(1.2);
    border-radius: 40% 40% 50% 50%;
  }
  75% {
    transform: scale(0.95) scaleY(1.05);
    border-radius: 45% 45% 50% 50%;
  }
  100% {
    transform: scale(0.8);
    border-radius: 50%;
  }
}`,
    },
    {
      title: "Gradient Flow Transition",
      description: "Silky smooth gradient animation that flows like liquid mercury. Multiple color stops create depth and dimensionality.",
      demo: "gradient",
      css: `.gradient-flow {
  width: 400px;
  height: 250px;
  background: linear-gradient(
    -45deg,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #23d5ab
  );
  background-size: 400% 400%;
  animation: gradient-shift 8s ease infinite;
  border-radius: 20px;
  filter: brightness(1.1);
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`,
    },
    {
      title: "Ripple Pulse Effect",
      description: "Hypnotic concentric ripples emanating from center. Perfect for button hovers and attention-grabbing CTAs with depth layers.",
      demo: "ripple",
      css: `.ripple-container {
  position: relative;
  width: 200px;
  height: 200px;
}

.ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle,
    rgba(102, 126, 234, 0.8) 0%,
    rgba(118, 75, 162, 0) 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple-pulse 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.ripple:nth-child(2) {
  animation-delay: 0.5s;
}

.ripple:nth-child(3) {
  animation-delay: 1s;
}

@keyframes ripple-pulse {
  0% {
    width: 20px;
    height: 20px;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}`,
    },
    {
      title: "Gooey Menu Transition",
      description: "Advanced SVG filter-based gooey effect. Elements merge and separate with organic viscosity, perfect for creative navigation.",
      demo: "gooey",
      css: `.gooey-container {
  filter: url('#gooey-filter');
}

.gooey-item {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: inline-block;
  margin: 0 -20px;
  animation: gooey-move 3s ease-in-out infinite;
}

.gooey-item:nth-child(2) {
  animation-delay: 0.3s;
}

.gooey-item:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes gooey-move {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-30px); }
}

/* SVG Filter */
<svg style="position: absolute;">
  <defs>
    <filter id="gooey-filter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
      <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"/>
    </filter>
  </defs>
</svg>`,
    },
    {
      title: "Liquid Loading Animation",
      description: "Premium loading indicator with liquid rise effect. Simulates liquid filling a container with realistic physics and shimmer.",
      demo: "loading",
      css: `.liquid-loader {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.2);
}

.liquid {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  animation: liquid-fill 3s ease-in-out infinite;
}

.liquid::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -100%;
  left: -50%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 40%;
  animation: liquid-wave 3s linear infinite;
}

@keyframes liquid-fill {
  0% { height: 0%; }
  50% { height: 80%; }
  100% { height: 0%; }
}

@keyframes liquid-wave {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
    },
    {
      title: "Magnetic Liquid Distortion",
      description: "Interactive distortion effect simulating magnetic liquid metal. Features smooth warping with realistic elastic recovery.",
      demo: "magnetic",
      css: `.magnetic-liquid {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #fa709a 0%, #fee140 100%);
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  filter: blur(1px);
}

.magnetic-liquid:hover {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 20px 60px rgba(250, 112, 154, 0.6);
}

.magnetic-liquid:active {
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  transform: scale(0.95) rotate(-5deg);
  transition: all 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`,
    },
    {
      title: "Particle Melt Transition",
      description: "Sophisticated particle-based melt effect. Elements dissolve and reform with fluid dynamics, creating mesmerizing transitions.",
      demo: "melt",
      css: `.melt-container {
  position: relative;
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  overflow: hidden;
}

.melt-particle {
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: melt-drop 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.melt-particle:nth-child(2) { left: 30%; animation-delay: 0.3s; }
.melt-particle:nth-child(3) { left: 50%; animation-delay: 0.6s; }
.melt-particle:nth-child(4) { left: 70%; animation-delay: 0.9s; }

@keyframes melt-drop {
  0% {
    top: 0%;
    opacity: 0;
    transform: scale(0);
  }
  20% {
    opacity: 1;
    transform: scale(1);
  }
  80% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
    transform: scale(0.5);
  }
}`,
    },
    {
      title: "Shimmer Flow Effect",
      description: "Luxurious shimmer passing through liquid surface. Creates premium metallic sheen with multiple reflection layers.",
      demo: "shimmer",
      css: `.shimmer-liquid {
  width: 350px;
  height: 200px;
  background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
}

.shimmer-liquid::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.1) 75%,
    transparent 100%
  );
  animation: shimmer-flow 3s ease-in-out infinite;
  transform: rotate(30deg);
}

@keyframes shimmer-flow {
  0% { transform: translateX(-100%) rotate(30deg); }
  100% { transform: translateX(100%) rotate(30deg); }
}`,
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Premium Liquid Transitions</h1>
        <p className={styles.subtitle}>
          Top-class CSS animations that make websites extraordinary
        </p>
      </div>

      <div className={styles.grid}>
        {transitions.map((transition, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{transition.title}</h2>
              <p className={styles.cardDescription}>{transition.description}</p>
            </div>

            <div className={styles.demoContainer}>
              {transition.demo === 'blob' && (
                <div className={styles.demoBlob}></div>
              )}

              {transition.demo === 'wave' && (
                <div className={styles.demoWaveContainer}>
                  <div className={styles.demoWave}></div>
                  <div className={styles.demoWave} style={{ animationDelay: '1s', opacity: 0.6 }}></div>
                </div>
              )}

              {transition.demo === 'splash' && (
                <div className={styles.demoSplash}></div>
              )}

              {transition.demo === 'gradient' && (
                <div className={styles.demoGradient}></div>
              )}

              {transition.demo === 'ripple' && (
                <div className={styles.demoRippleContainer}>
                  <div className={styles.demoRipple}></div>
                  <div className={styles.demoRipple}></div>
                  <div className={styles.demoRipple}></div>
                </div>
              )}

              {transition.demo === 'gooey' && (
                <>
                  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                    <defs>
                      <filter id="gooey-filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                        <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"/>
                      </filter>
                    </defs>
                  </svg>
                  <div className={styles.demoGooeyContainer}>
                    <div className={styles.demoGooeyItem}></div>
                    <div className={styles.demoGooeyItem}></div>
                    <div className={styles.demoGooeyItem}></div>
                  </div>
                </>
              )}

              {transition.demo === 'loading' && (
                <div className={styles.demoLoader}>
                  <div className={styles.demoLiquid}></div>
                </div>
              )}

              {transition.demo === 'magnetic' && (
                <div className={styles.demoMagnetic}></div>
              )}

              {transition.demo === 'melt' && (
                <div className={styles.demoMeltContainer}>
                  <div className={styles.demoMeltParticle} style={{ left: '20%' }}></div>
                  <div className={styles.demoMeltParticle} style={{ left: '40%' }}></div>
                  <div className={styles.demoMeltParticle} style={{ left: '60%' }}></div>
                  <div className={styles.demoMeltParticle} style={{ left: '80%' }}></div>
                </div>
              )}

              {transition.demo === 'shimmer' && (
                <div className={styles.demoShimmer}></div>
              )}
            </div>

            <div className={styles.codeContainer}>
              <button
                className={styles.toggleButton}
                onClick={() => setActiveDemo(activeDemo === index ? null : index)}
              >
                {activeDemo === index ? '− Hide Code' : '+ Show Code'}
              </button>

              {activeDemo === index && (
                <pre className={styles.codeBlock}>
                  <code>{transition.css}</code>
                </pre>
              )}
            </div>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>All effects are pure CSS with no JavaScript dependencies • Production-ready • GPU-accelerated</p>
      </footer>
    </main>
  );
}
