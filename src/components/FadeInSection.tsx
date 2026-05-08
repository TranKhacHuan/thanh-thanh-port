"use client";

import { useEffect, useRef, useState } from "react";

export function FadeInSection({ 
  children, 
  direction = "up" 
}: { 
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
}) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate-x-0 translate-y-0";
    switch (direction) {
      case "up": return "translate-y-20";
      case "down": return "-translate-y-20";
      case "left": return "-translate-x-20";
      case "right": return "translate-x-20";
      default: return "translate-y-20";
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[800ms] ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTransform()}`}
    >
      {children}
    </div>
  );
}
