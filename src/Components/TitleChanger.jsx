import { useState, useEffect } from "react";

export default function TitleChanger(){
    const titles = ["ReactJS Frontend Web Developer", "Full-Stack Web Developer", "Frontend Web Developer"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [currentTitle, setCurrentTitle] = useState('');
    const [direction, setDirection] = useState(1); // 1 for adding letters, -1 for removing letters
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // If adding letters
        if (direction === 1) {
          // If reached end of current title, start removing letters
          if (currentIndex >= titles[currentTitleIndex].length) {
            setDirection(-1);
          } else {
            setCurrentTitle(prevTitle => prevTitle + titles[currentTitleIndex][currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }
        }
        // If removing letters
        else {
          // If removed all letters, move to the next title
          if (currentIndex <= 0) {
            setCurrentIndex(0);
            setCurrentTitle('');
            setCurrentTitleIndex(prevIndex =>
              (prevIndex + 1) % titles.length
            );
            setDirection(1);
          } else {
            setCurrentTitle(prevTitle => prevTitle.slice(0, -1));
            setCurrentIndex(prevIndex => prevIndex - 1);
          }
        }
      }, 200); // Adjust the interval for the speed of letter addition/removal
  
      return () => clearInterval(interval);
    }, [currentIndex, currentTitleIndex, direction, titles]);
  
    return currentTitle;
  }