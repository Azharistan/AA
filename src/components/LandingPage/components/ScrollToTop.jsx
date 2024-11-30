import { useState, useEffect } from "react";
import "./Button.css"; // You can style your button in Button.css file
import { ArrowUpward } from "@mui/icons-material";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scrolling and showing the button
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        // Change 300 to any value you prefer
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="scrollToTopButton" onClick={scrollToTop}>
          <ArrowUpward />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
