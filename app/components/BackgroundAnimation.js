'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundAnimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        const dotCount = 1300; // Increased density
        const dotSize = 1.5; // Larger dots
        const rotationSpeed = 0.0005;
        const warpStrength = 100;

        // State
        let width = window.innerWidth;
        let height = window.innerHeight;
        let sphereRadius = Math.min(width, height) * 0.4; // Bigger sphere
        let mouseX = -1000;
        let mouseY = -1000;
        let rotationY = 0;
        let time = 0;

        // Generate points on a sphere (Fibonacci Sphere)
        const points = [];
        const phi = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < dotCount; i++) {
            const y = 1 - (i / (dotCount - 1)) * 2;
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;

            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;

            points.push({
                x: x,
                y: y,
                z: z,
                originalX: x,
                originalY: y,
                originalZ: z
            });
        }

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            sphereRadius = Math.min(width, height) * 0.4;
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left - width / 2;
            mouseY = e.clientY - rect.top - height / 2;
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            const cx = width / 2;
            const cy = height / 2;

            time += 0.002; // Faster wave speed
            rotationY += rotationSpeed * 2; // Much faster rotation

            points.forEach(point => {
                let x = point.originalX * sphereRadius;
                let y = point.originalY * sphereRadius;
                let z = point.originalZ * sphereRadius;

                let rx = x * Math.cos(rotationY) - z * Math.sin(rotationY);
                let rz = x * Math.sin(rotationY) + z * Math.cos(rotationY);
                let ry = y;

                const scale = 800 / (800 + rz);
                let px = rx * scale;
                let py = ry * scale;

                const dx = mouseX - px;
                const dy = mouseY - py;
                const dist = Math.sqrt(dx * dx + dy * dy);

                const wave = Math.sin(dist * 0.005 - time);

                const range = 600;
                if (dist < range) {
                    const falloff = Math.pow(1 - dist / range, 2);
                    const waveForce = 1 + wave * 0.5;

                    // Orbit force (tangential)
                    const orbitX = -dy;
                    const orbitY = dx;

                    const strength = falloff * warpStrength * waveForce * 0.003; // Very strong orbit

                    px += orbitX * strength;
                    py += orbitY * strength;
                }

                const alpha = (rz + sphereRadius) / (2 * sphereRadius);
                ctx.fillStyle = `rgba(0, 0, 0, ${0.3 + alpha * 0.7})`;

                ctx.beginPath();
                ctx.arc(cx + px, cy + py, dotSize * scale, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.6
            }}
        />
    );
}
