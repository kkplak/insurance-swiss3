import React, { useEffect, useState } from "react";
import "./ScrollArrow.css";

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the arrow has already been seen in this session.
    const hasSeenArrow = sessionStorage.getItem("hasSeenArrow");
    if (hasSeenArrow) return;

    // Start a timer that will show the arrow after 5 seconds.
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Scroll handler: if the user scrolls, cancel the timer, hide the arrow,
    // and mark it as seen so it doesn't appear again.
    const handleScroll = () => {
      if (window.scrollY > 0) {
        clearTimeout(timer);
        setIsVisible(false);
        sessionStorage.setItem("hasSeenArrow", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount: clear the timer and remove the event listener.
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className='scroll-arrow'>
      <img src='/media/DownArrow.svg' alt='Scroll down arrow' />
    </div>
  );
};

export default ScrollArrow;
