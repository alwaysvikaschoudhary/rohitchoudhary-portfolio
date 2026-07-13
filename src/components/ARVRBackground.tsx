import { useEffect, useRef } from 'react';

interface ARVRBackgroundProps {
  isDarkMode: boolean;
}

export default function ARVRBackground({ isDarkMode }: ARVRBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.active = true;
    };
    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let animationFrameId: number;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D VR Grid & Particles State
    const fov = 350;
    const speed = 2.5;
    const maxZ = 1500;
    
    // VR Floor Lines
    const gridLines = Array.from({ length: 40 }, (_, i) => ({
      x: (i - 20) * 150,
      z: maxZ
    }));

    const crossLines = Array.from({ length: 40 }, (_, i) => ({
      z: (i * (maxZ / 40))
    }));

    // Floating VR Geometry Particles
    const particles = Array.from({ length: 80 }, () => ({
      x: (Math.random() - 0.5) * 3000,
      y: (Math.random() - 0.5) * 1500 - 400, // mostly above
      z: Math.random() * maxZ,
      radius: Math.random() * 2 + 1,
      type: Math.random() > 0.7 ? 'box' : 'dot'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.05;
      m.y += (m.targetY - m.y) * 0.05;

      const centerX = width / 2 + m.x * 200; // parallax max offset
      const centerY = height / 2 - m.y * 100 + 150; // shift horizon down

      // Color scheme based on dark/light mode
      const vrColor = isDarkMode ? '168, 85, 247' : '147, 51, 234'; 
      const secondaryColor = isDarkMode ? '236, 72, 153' : '219, 39, 119';

      // 1. Draw 3D floor grid
      ctx.lineWidth = 1;
      
      // Moving Z forward
      for (let i = 0; i < gridLines.length; i++) {
        const line = gridLines[i];
        
        ctx.beginPath();
        // Point far
        let scaleFar = fov / (maxZ);
        let xFar = line.x * scaleFar + centerX;
        let yFar = 300 * scaleFar + centerY; // Floor drop

        // Point near
        let scaleNear = fov / (10); // close to camera
        let xNear = line.x * scaleNear + centerX;
        let yNear = 300 * scaleNear + centerY;

        ctx.moveTo(xFar, yFar);
        ctx.lineTo(xNear, yNear);
        
        // Avoid gradient exception if coordinates match exactly
        if (Math.abs(yFar - yNear) > 0.5) {
          const gradient = ctx.createLinearGradient(0, yFar, 0, yNear);
          gradient.addColorStop(0, `rgba(${vrColor}, 0.0)`);
          gradient.addColorStop(0.2, `rgba(${vrColor}, ${isDarkMode ? 0.3 : 0.2})`);
          gradient.addColorStop(1, `rgba(${vrColor}, 0.02)`);
          ctx.strokeStyle = gradient;
        } else {
          ctx.strokeStyle = `rgba(${vrColor}, 0.1)`;
        }
        
        ctx.stroke();
      }

      // Horizontal moving lines
      for (let i = 0; i < crossLines.length; i++) {
        const cLine = crossLines[i];
        cLine.z -= speed;
        if (cLine.z < 10) cLine.z = maxZ;

        const scale = fov / cLine.z;
        const y = 300 * scale + centerY;
        const widthAtDepth = 3000 * scale;

        const opacity = Math.min(1, Math.max(0, (1 - cLine.z / maxZ) * 1.5)) * (isDarkMode ? 0.3 : 0.2);
        
        ctx.beginPath();
        ctx.moveTo(centerX - widthAtDepth, y);
        ctx.lineTo(centerX + widthAtDepth, y);
        ctx.strokeStyle = `rgba(${vrColor}, ${opacity})`;
        ctx.stroke();
      }

      // 2. Flying Spatial Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.z -= speed * 1.5; // moves faster than grid
        if (p.z < 1) {
          p.z = maxZ;
          p.x = (Math.random() - 0.5) * 3000;
          p.y = (Math.random() - 0.5) * 2000 - 200;
        }

        const scale = fov / p.z;
        const x2d = p.x * scale + centerX;
        const y2d = p.y * scale + centerY;

        // Opacity drops with distance
        const opacity = Math.min(1, Math.max(0, (1 - p.z / maxZ) * 1.2));
        const pSize = p.radius * scale;

        if (x2d < 0 || x2d > width || y2d < 0 || y2d > height) continue;

        if (p.type === 'box') {
          ctx.strokeStyle = `rgba(${secondaryColor}, ${opacity * 0.7})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(x2d - pSize/2, y2d - pSize/2, pSize, pSize);
        } else {
          ctx.fillStyle = `rgba(${vrColor}, ${opacity * 0.8})`;
          ctx.beginPath();
          ctx.arc(x2d, y2d, pSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Connect nearby particles for a mesh feeling
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2) + Math.pow(p.z - p2.z, 2));
          if (dist < 250) {
            const scale2 = fov / p2.z;
            const x2d2 = p2.x * scale2 + centerX;
            const y2d2 = p2.y * scale2 + centerY;
            
            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(x2d2, y2d2);
            ctx.strokeStyle = `rgba(${vrColor}, ${opacity * 0.15})`;
            ctx.stroke();
          }
        }
      }

      // 3. HUD Target Tracking Ring
      if (m.active) {
        ctx.strokeStyle = `rgba(${secondaryColor}, 0.6)`;
        ctx.lineWidth = 1.5;
        
        // Floating reticle
        const retX = width / 2 + m.x * 250;
        const retY = height / 2 - m.y * 150;
        
        ctx.beginPath();
        ctx.arc(retX, retY, 30, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(retX, retY, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${secondaryColor}, 0.8)`;
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(retX - 45, retY); ctx.lineTo(retX - 25, retY);
        ctx.moveTo(retX + 25, retY); ctx.lineTo(retX + 45, retY);
        ctx.moveTo(retX, retY - 45); ctx.lineTo(retX, retY - 25);
        ctx.moveTo(retX, retY + 25); ctx.lineTo(retX, retY + 45);
        ctx.stroke();

        ctx.fillStyle = `rgba(${vrColor}, 0.8)`;
        ctx.font = '10px var(--font-mono)';
        ctx.fillText(`TRG_LOCK: [${Math.round(m.x * 100)}, ${Math.round(m.y * 100)}]`, retX + 40, retY + 40);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 block pointer-events-none transition-all duration-300"
      style={{ mixBlendMode: 'normal' }}
    />
  );
}
