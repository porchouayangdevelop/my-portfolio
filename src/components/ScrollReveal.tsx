import { useScrollAnimation, type AnimationVariant } from "@/hooks/useScrollAnimation";
import type { CSSProperties, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;       // ms
  duration?: number;    // ms
  className?: string;
  threshold?: number;
}

const variants: Record<AnimationVariant, { hidden: CSSProperties; visible: CSSProperties }> = {
  "fade-up": {
    hidden: { opacity: 0, transform: "translateY(40px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-down": {
    hidden: { opacity: 0, transform: "translateY(-40px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "fade-left": {
    hidden: { opacity: 0, transform: "translateX(50px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "fade-right": {
    hidden: { opacity: 0, transform: "translateX(-50px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "zoom-in": {
    hidden: { opacity: 0, transform: "scale(0.85)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
  "flip-up": {
    hidden: { opacity: 0, transform: "perspective(600px) rotateX(20deg) translateY(30px)" },
    visible: { opacity: 1, transform: "perspective(600px) rotateX(0deg) translateY(0)" },
  },
};

const ScrollReveal = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation(threshold);
  const { hidden, visible } = variants[variant];

  const style: CSSProperties = {
    ...(isVisible ? visible : hidden),
    transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
