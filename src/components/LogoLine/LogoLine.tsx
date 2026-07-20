import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "./LogoLine.css";

interface Logo {
  src: string;
  name: string;
}

interface LogoMarqueeProps {
  logos: Logo[];
  mobileBreakpoint?: number; // e.g. 768px
  marqueeSpeed?: number;     // speed in pixels per second
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  logos,
  mobileBreakpoint = 768,
  marqueeSpeed = 30,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    // Check on mount
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [mobileBreakpoint]);

  if (isMobile) {
    // Render a continuously moving marquee on mobile
    return (
      <Marquee
      className="logo-line"
        gradient={false}
        speed={marqueeSpeed}
        direction="right"
        pauseOnHover={false}
      >
        {logos.map((logo, index) => (
          <div key={index} className="marquee-item">
            <img src={logo.src} alt={logo.name} className="logo-image" />
          </div>
        ))}
      </Marquee>
    );
  } else {
    // Render a static row on desktop
    return (
      <div className="logo-line">
        {logos.map((logo, index) => (
          <div key={index} className="static-item">
            <img src={logo.src} alt={logo.name} className="logo-image" />
          </div>
        ))}
      </div>
    );
  }
};

export default LogoMarquee;
