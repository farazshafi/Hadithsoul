import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const ReadMore = ({ text, keyword }) => {
  const [showFullText, setShowFullText] = useState(false);
  const [maxCharacters, setMaxCharacters] = useState(500);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  useEffect(() => {
    // Update max characters based on screen size
    const updateMaxCharacters = () => {
      if (window.innerWidth < 768) {
        setMaxCharacters(200); // Small screens
      } else {
        setMaxCharacters(500); // Large screens
      }
    };

    // Set initial max characters
    updateMaxCharacters();

    // Listen for window resize and update max characters accordingly
    window.addEventListener("resize", updateMaxCharacters);

    return () => {
      window.removeEventListener("resize", updateMaxCharacters);
    };
  }, []);

  // Determine whether to show the full text or truncated text
  const textToShow = showFullText ? text : text.slice(0, maxCharacters);

  // Highlight the keyword in the text
  const highlightedText = keyword
    ? textToShow.replace(
        new RegExp(`(${keyword})`, 'gi'),
        (match, p1) =>
          `<span style="background-color: yellow;">${p1}</span>`
      )
    : textToShow;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
      {text.length > maxCharacters && (
        <Button
          color={"white"}
          bg={"#272F33"}
          mt={"5px"}
          size={{ base: "xs", md: "sm", lg: "md" }}
          onClick={toggleText}
          _hover={{ color: "white", bgColor: "black" }}
        >
          {showFullText ? "Show Less" : "Read More"}
        </Button>
      )}
    </div>
  );
};

export default ReadMore;
