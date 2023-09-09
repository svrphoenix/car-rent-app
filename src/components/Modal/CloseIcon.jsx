import { useState } from 'react';

const CloseIcon = ({ color, size, onClick, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      // fill={isHovered ? hoverColor : color}
      stroke={isHovered ? hoverColor : color}
      width={size}
      height={size}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '16px',
        right: '16px',
        transition: 'stroke cubic-bezier(0.4, 0, 0.2, 1)', //fill чи stroke
      }}
    >
      <use href={'/sprite.svg#close'} />
    </svg>
  );
};

export default CloseIcon;
