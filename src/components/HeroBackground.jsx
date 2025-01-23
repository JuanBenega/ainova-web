// HeroBackground.js
import React, { useRef, useEffect } from 'react';

const HeroBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size to match the window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    const colors = ["#0048FF", "#00DDFF", "#8800FF", "#FF8400"];
    const bubbles = colors.map((color, index) => ({
      x: 0,
      y: 0,
      radius: 300, // Increased radius for larger size
      color,
    }));
    let angle = 0;
    let offsetX = canvas.width / 2;
    let offsetY = canvas.height / 2;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      angle += 0.01; // Rotation speed

      // Constrain movement within the canvas bounds
      offsetX = Math.max(300, Math.min(canvas.width - 300, offsetX + Math.sin(angle / 10) * 2));
      offsetY = Math.max(300, Math.min(canvas.height - 300, offsetY + Math.cos(angle / 10) * 2));

      bubbles.forEach((bubble, index) => {
        const bubbleAngle = angle + (Math.PI / 2) * index; // Divide circle into quadrants
        const x = offsetX + Math.cos(bubbleAngle) * 150; // Circular placement
        const y = offsetY + Math.sin(bubbleAngle) * 150;

        // Draw bubble
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, bubble.radius * 1.8); // Expand radius further for smoother fade-out
        gradient.addColorStop(0, bubble.color); // Full color at center
        gradient.addColorStop(0.4, `${bubble.color}66`); // Softer transparency near the middle
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Fully transparent at edges

        ctx.beginPath();
        ctx.arc(x, y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.closePath();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup event listeners
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default HeroBackground;

