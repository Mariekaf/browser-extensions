import React, { useState, useEffect } from 'react';
import './style/main.scss';
import Nav from './components/Nav';
import Card from './components/Cards';
import Filter from './components/Filter';
import devlens from './assets/images/logo-devlens.svg'

const App = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [isDark, setIsDark] = useState(true);


  const handleClickvisible = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isVisible: !card.isVisible } : card
      )
    );
  };
  const toggleCardActive = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, active: !card.active } : card
      )
    );
  };
  const handleToggleAllCards = (filterType) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (filterType === "All") return { ...card, isVisible: true };
        if (filterType === "Active") return { ...card, isVisible: card.active };
        if (filterType === "Inactive") return { ...card, isVisible: !card.active };
        return card;
      })
    );
  };

  const changeImage = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const [cards, setCards] = useState([
    { id: 1, imageSrc: {devlens}, title: "DevLens", paragraph: "Quickly inspect page layouts and visualize element boundaries.", isVisible: true, active: false },
    { id: 2, imageSrc: "./src/assets/images/logo-style-spy.svg", title: "StyleSpy", paragraph: "Instantly analyze and copy CSS from any webpage element.", isVisible: true, active: false },
    { id: 3, imageSrc: "./src/assets/images/logo-speed-boost.svg", title: "SpeedBoost", paragraph: "Optimizes browser resource usage to accelerate page loading.", isVisible: true, active: false },
    { id: 4, imageSrc: "./src/assets/images/logo-json-wizard.svg", title: "JsonWizard", paragraph: "Formats, validates, and prettifies JSON responses in-browser.", isVisible: true, active: false },
    { id: 5, imageSrc: "./src/assets/images/logo-tab-master-pro.svg", title: "TabMaster Pro", paragraph: "Organizes browser tabs into groups and sessions.", isVisible: true, active: false },
    { id: 6, imageSrc: "./src/assets/images/logo-viewport-buddy.svg", title: "ViewPortBuddy", paragraph: "Simulates various screen resolutions directly within the browser.", isVisible: true, active: false },
    { id: 7, imageSrc: "./src/assets/images/logo-markup-notes.svg", title: "Markup Notes", paragraph: "Enables annotation and notes directly onto webpages for collaborative debugging.", isVisible: true, active: false },
    { id: 8, imageSrc: "./src/assets/images/logo-grid-guides.svg", title: "GridGuides", paragraph: "Overlay customizable grids and alignment guides on any webpage.", isVisible: true, active: false },
    { id: 9, imageSrc: "./src/assets/images/logo-palette-picker.svg", title: "Palette Picker", paragraph: "Instantly extracts color palettes from any webpage.", isVisible: true, active: false },
    { id: 10, imageSrc: "./src/assets/images/logo-link-checker.svg", title: "LinkChecker", paragraph: "Scans and highlights broken links on any page.", isVisible: true, active: false },
    { id: 11, imageSrc: "./src/assets/images/logo-dom-snapshot.svg", title: "DOM Snapshot", paragraph: "Capture and export DOM structures quickly.", isVisible: true, active: false },
    { id: 12, imageSrc: "./src/assets/images/logo-console-plus.svg", title: "ConsolePlus", paragraph: "Enhanced developer console with advanced filtering and logging.", isVisible: true, active: false },
  ]);

  return (
    <div className='test'>
      <Nav onClick={() => { setDarkMode(prev => !prev); changeImage(); }} />


      <Filter isDark={isDark} handleToggleAllCards={handleToggleAllCards} />

      <div className='display'>
        {cards.map((card) =>
          card.isVisible ? (
            <Card
              key={card.id}
              id={card.id}
              imageSrc={card.imageSrc}
              title={card.title}
              paragraph={card.paragraph}
              isVisible={card.isVisible}
              active={card.active}
              isDark={isDark}
              handleClickvisible={() => handleClickvisible(card.id)}
              onToggleActive={toggleCardActive}
            />
          ) : null
        )}

      </div>
    </div>
  );
};

export default App;
