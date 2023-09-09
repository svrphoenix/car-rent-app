// import { useState } from 'react';

const HeartIcon = ({ color, size, handleClick, activeColor, isActive }) => {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      fill={isActive ? activeColor : 'transparent'}
      stroke={isActive ? activeColor : color}
      width={size}
      height={size}
      onClick={handleClick}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'pointer',
        position: 'absolute',
        right: 14,
        top: 14,
        transition: 'fill 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <use href={'/sprite.svg#heart'} />
    </svg>
  );
};

export default HeartIcon;
