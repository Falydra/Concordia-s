import { useMemo } from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type TwinklingStar = {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};


const generateStars = (count: number, max: number = 10000): string => {
  let shadows = '';
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * max) + 1;
    const y = Math.floor(Math.random() * max) + 1;
    shadows += `${x}px ${y}px #FFF`;
    if (i < count - 1) shadows += ', ';
  }
  return shadows;
};

const generateTwinklingStars = (count: number, max: number = 10000): TwinklingStar[] =>
  Array.from({ length: count }, () => ({
    x: Math.floor(Math.random() * max) + 1,
    y: Math.floor(Math.random() * max) + 1,
    size: Math.random() > 0.75 ? 3 : 2,
    delay: Math.random() * 6,
    duration: 2.5 + Math.random() * 3.5,
  }));

export const Stars = () => {
  const starsSmall = useMemo(() => generateStars(1800), []);
  const starsMedium = useMemo(() => generateStars(420), []);
  const starsBig = useMemo(() => generateStars(90), []);
  const twinklingStars = useMemo(() => generateTwinklingStars(18), []);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const deepNebulaX = useTransform(scrollYProgress, [0, 1], ['0%', '-4%']);
  const midNebulaX = useTransform(scrollYProgress, [0, 1], ['0%', '7%']);
  const rimNebulaX = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <div className='pointer-events-none absolute inset-0 z-0 w-full overflow-hidden' ref={ref}>
      <motion.div
        aria-hidden="true"
        className="cosmic-nebula cosmic-nebula-deep absolute inset-[-18%]"
        style={{ x: deepNebulaX, y: backgroundY }}
      />
      <motion.div
        aria-hidden="true"
        className="cosmic-nebula cosmic-nebula-mid absolute inset-[-12%]"
        style={{ x: midNebulaX, y: textY }}
      />
      <motion.div
        aria-hidden="true"
        className="cosmic-nebula cosmic-nebula-rim absolute inset-[-8%]"
        style={{ x: rimNebulaX, y: backgroundY }}
      />

      {/* Small stars */}
      <motion.div
        className="absolute top-0 left-0 w-[1px] h-[1px] bg-transparent animate-animStar50"
        style={{ boxShadow: starsSmall, y: backgroundY }}

      />
      <motion.div
        className="absolute top-[2000px] left-0 w-[1px] h-[1px] bg-transparent animate-animStar50"
        style={{ boxShadow: starsSmall, y: textY }}
      />

      {/* Medium stars */}
      <motion.div
        className="absolute top-0 left-0 w-[2px] h-[2px] bg-transparent animate-animStar100"
        style={{ boxShadow: starsMedium, y: textY }}
      />
      <motion.div
        className="absolute top-[2000px] left-0 w-[2px] h-[2px] bg-transparent animate-animStar100"
        style={{ boxShadow: starsMedium, y: backgroundY }}
      />

      {/* Big stars */}
      <motion.div
        className="absolute top-0 left-0 w-[3px] h-[3px] bg-transparent animate-animStar150"
        style={{ boxShadow: starsBig, y: backgroundY }}
      />
      <motion.div
        className="absolute top-[2000px] left-0 w-[3px] h-[3px] bg-transparent animate-animStar150"
        style={{ boxShadow: starsBig, y: textY }}
      />

      <div className="absolute inset-0">
        {twinklingStars.map((star, index) => (
          <span
            key={index}
            className="star-twinkle absolute rounded-full bg-white"
            style={{
              left: `${star.x / 100}%`,
              top: `${star.y / 100}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};