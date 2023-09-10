import PropTypes from 'prop-types';

import { useState } from 'react';

const CloseIcon = ({ color, size, onClick, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
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
        transition: 'stroke 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <use href={'./assets/sprite.svg#close'} />
    </svg>
  );
};

CloseIcon.propTypes = {
  color: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CloseIcon;
