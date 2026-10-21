'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
}

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains('light'));
    };
    checkTheme();

    // Observe theme toggle on <html> element
    const observer = new MutationObserver(() => {
      checkTheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let mouse = { x: -1000, y: -1000, active: false };

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const particles: Particle[] = [];
    const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 22 : 46;
    const maxDistance = 115;
    const mouseInfluenceDistance = 140;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Initialize particles within bounds
      if (particles.length === 0) {
        for (let i = 0; i < particleCount; i++) {
          const r = Math.random() * 1.5 + 1;
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: r,
            baseRadius: r,
            alpha: Math.random() * 0.35 + 0.25,
          });
        }
      }
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      mouse = { x: clientX, y: clientY, active: true };
    };

    const handlePointerLeave = () => {
      mouse = { x: -1000, y: -1000, active: false };
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave, { passive: true });

    let lastTime = performance.now();

    const render = (time: number) => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Check current theme state directly
      const light = document.documentElement.classList.contains('light');

      // Theme colors: subtle and elegant
      const particleColor = light ? '100, 116, 139' : '255, 255, 255';
      const lineColor = light ? '148, 163, 184' : '220, 230, 245';
      const lineAlphaBase = light ? 0.045 : 0.075;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx * 60 * dt;
          p.y += p.vy * 60 * dt;

          // Wrap edges smoothly
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;

          // Interactive mouse influence
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouseInfluenceDistance) {
              const force = (mouseInfluenceDistance - dist) / mouseInfluenceDistance;
              p.x -= (dx / dist) * force * 1.2;
              p.y -= (dy / dist) * force * 1.2;

              // Subtle connection filament to cursor
              ctx.beginPath();
              ctx.moveTo(mouse.x, mouse.y);
              ctx.lineTo(p.x, p.y);
              ctx.strokeStyle = `rgba(${lineColor}, ${force * 0.14})`;
              ctx.lineWidth = 0.9;
              ctx.stroke();
            }
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.alpha})`;
        ctx.fill();

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * lineAlphaBase;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden select-none transition-opacity duration-700">
      {/* Cyber Grid & Scanline */}
      <div className="cyber-grid" />
      <div className="cyber-scanline" />

      {/* Floating Ambient Aurora Orbs */}
      <div
        className={`absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full blur-[110px] transition-all duration-1000 ${
          isLight
            ? 'bg-gradient-to-br from-white via-amber-100/35 to-transparent'
            : 'bg-gradient-to-br from-white/10 via-white/5 to-transparent'
        }`}
      />
      <div
        className={`absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full blur-[130px] transition-all duration-1000 ${
          isLight
            ? 'bg-gradient-to-bl from-white via-sky-100/30 to-transparent'
            : 'bg-gradient-to-bl from-white/8 via-white/4 to-transparent'
        }`}
      />
      <div
        className={`absolute -bottom-32 left-1/4 h-[400px] w-[400px] rounded-full blur-[120px] transition-all duration-1000 ${
          isLight
            ? 'bg-gradient-to-tr from-white via-slate-100/30 to-transparent'
            : 'bg-gradient-to-tr from-white/6 via-white/3 to-transparent'
        }`}
      />

      {/* Interactive Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full block" />
    </div>
  );
}
