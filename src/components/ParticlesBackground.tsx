'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Загрузка slim engine (поддерживает базовые фичи и легче full)
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 z-0"
      init={particlesInit}
      options={{
        background: { color: { value: 'transparent' } },
        fullScreen: { enable: false },
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: '#ffffff' },
          links: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.8,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            outModes: { default: 'bounce' },
          },
          size: { value: { min: 2, max: 4 } },
          opacity: { value: 10 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
