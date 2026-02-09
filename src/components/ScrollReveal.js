'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function ScrollReveal({
    children,
    delay = 0,
    direction = 'up',
    duration = 0.6,
    className = ''
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const controls = useAnimation();

    const getInitialPosition = () => {
        switch (direction) {
            case 'up': return { y: 50, opacity: 0 };
            case 'down': return { y: -50, opacity: 0 };
            case 'left': return { x: 50, opacity: 0 };
            case 'right': return { x: -50, opacity: 0 };
            case 'scale': return { scale: 0.8, opacity: 0 };
            default: return { y: 50, opacity: 0 };
        }
    };

    const getFinalPosition = () => {
        return { x: 0, y: 0, scale: 1, opacity: 1 };
    };

    useEffect(() => {
        if (isInView) {
            controls.start(getFinalPosition());
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={getInitialPosition()}
            animate={controls}
            transition={{
                duration: duration,
                delay: delay / 1000,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
