import React from 'react';
import Toogle from './Toogle';

const Card = ({ id, imageSrc, title, paragraph, isVisible, active, onToggleActive, handleClickvisible }) => {
  return (
    <div className='card' style={{ display: isVisible ? 'block' : 'none' }}>
      <img src={imageSrc} alt={title} />

      <div style={{ paddingLeft: '80px', marginTop: '-5px' }}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handleClickvisible}>Remove</button>
        <div onClick={() => onToggleActive(id)}><Toogle isActive={active} /></div>
      </div>
    </div>
  );
};

export default Card;
