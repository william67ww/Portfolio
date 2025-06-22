import { useEffect, useRef } from "react";

export const Sparkle = ({ delay = 0 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        for (let i = 0; i < 10; i++) {
            const sparkle = document.createElement("span");
            sparkle.className = "sparkle";
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDelay = `${delay + Math.random() * 0.9}s`;
            el.appendChild(sparkle);
        }
        return () => { el.innerHTML = ""; };
    }, [delay]);

    return <span ref={ref} className="absolute inset-0 pointer-events-none"></span>;
};