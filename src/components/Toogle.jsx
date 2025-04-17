import React from 'react';
import { useState, useEffect } from "react";

const Toogle = () => {
  const [isClicked, setIsClicked] = useState(() => {
    const stored = localStorage.getItem(" isCliked");
    return stored ? JSON.parse(stored) : false;
  });

  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("isDark");
    return stored ? JSON.parse(stored) : true;
  });

  const [imageSrc, setImageSrc] = useState(<i className={'bx bxs-toggle-left'} style={{
    color: isDark
      ? isClicked
        ? 'grey'
        : 'hsl(3, 86%, 64%)'
      :
        isClicked
        ? 'grey'
        : 'hsl(3, 71%, 56%)',
    transition: 'color 0.3s ease',
  }}></i>);


  useEffect(() => {
    setImageSrc(
      <i
        className={isClicked ? 'bx bxs-toggle-right' : 'bx bxs-toggle-left'}
        style={{
          color: isDark
            ? isClicked
              ? 'hsl(3, 86%, 64%)'
              : 'grey'
            : isClicked
              ? 'hsl(3, 71%, 56%)'
              : 'grey',
          transition: 'color 0.3s ease',
        }}
      ></i>
    );

    // Sauvegarde dans le localStorage
    localStorage.setItem("isClicked", JSON.stringify(isClicked));
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isClicked, isDark]);

  const changeImage = () => {
    setIsDark(!isDark);
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={changeImage}>
      {imageSrc}
    </div>
  );
};

export default Toogle;
