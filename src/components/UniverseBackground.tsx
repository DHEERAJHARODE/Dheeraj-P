"use client";
import { useEffect, useRef } from "react";

export default function UniverseBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let stars: { x: number; y: number; r: number; dx: number }[] = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5,
        dx: (Math.random() - 0.5) * 0.4,
      }));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        200,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      gradient.addColorStop(0, "#0a0025");
      gradient.addColorStop(1, "#000000");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        s.x += s.dx;
        if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
      });

      requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
  );
}
