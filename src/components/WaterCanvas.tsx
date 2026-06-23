"use client";

import { useEffect, useRef } from "react";

type Ripple = {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
};

export default function WaterCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const addRipple = (x: number, y: number) => {
      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: 80 + Math.random() * 120,
        opacity: 0.35 + Math.random() * 0.25,
      });
      if (ripplesRef.current.length > 12) ripplesRef.current.shift();
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (Math.random() > 0.6) {
        addRipple(e.clientX - rect.left, e.clientY - rect.top);
      }
    };

    const onTouch = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) addRipple(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    const draw = () => {
      time += 0.012;
      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, "rgba(8, 47, 73, 0.92)");
      grad.addColorStop(0.5, "rgba(14, 116, 144, 0.88)");
      grad.addColorStop(1, "rgba(6, 78, 59, 0.9)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < 6; i++) {
        const yBase = h * 0.55 + i * 18;
        ctx.beginPath();
        ctx.moveTo(0, yBase);
        for (let x = 0; x <= w; x += 8) {
          const y =
            yBase +
            Math.sin(x * 0.008 + time * (1 + i * 0.15)) * (12 - i) +
            Math.sin(x * 0.02 + time * 2) * 3;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 255, 255, ${0.02 + i * 0.012})`;
        ctx.fill();
      }

      ripplesRef.current = ripplesRef.current.filter((r) => {
        r.radius += 1.8;
        r.opacity *= 0.975;
        if (r.opacity < 0.01) return false;

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(186, 230, 253, ${r.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${r.opacity * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        return r.radius < r.maxRadius;
      });

      if (Math.random() > 0.97) {
        addRipple(Math.random() * w, Math.random() * h * 0.7);
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("touchstart", onTouch, { passive: true });

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("touchstart", onTouch);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
