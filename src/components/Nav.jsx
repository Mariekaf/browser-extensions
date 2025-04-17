import React from 'react';

import { useState } from "react";
import styles from "../style/main.module.scss";


const Nav = ({ onClick }) => {
    const [imageSrc, setImageSrc] = useState("/src/assets/images/icon-sun.svg");
    const [imageSvg, setImageSvg] = useState("/src/assets/images/logo.svg");
    
    const [isDark, setIsDark] = useState(true);




    const changeImage = () => {
        setIsDark(!isDark);
        setImageSrc(isDark ? "/src/assets/images/icon-moon.svg" : "/src/assets/images/icon-sun.svg");
        setImageSvg(isDark ?
            "/src/assets/images/logo.svg"
            : "/src/assets/images/logo (2).png")
    };

    return (
        <div
            className={`${styles.mode} ${isDark ? styles["Navbar_dark"] : styles["Navbar_light"]}`}   >
            <img src={imageSvg} alt="" className='logo' />
            <div
                onClick={() => { changeImage(); onClick(); }}

                className={`${styles.mode} ${isDark ? styles["btn-dark"] : styles["btn-light"]}`}
            >
                <img src={imageSrc} alt="" />

            </div>
          
        </div>
        
    );
};

export default Nav;
