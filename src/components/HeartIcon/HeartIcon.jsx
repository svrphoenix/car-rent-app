import PropTypes from 'prop-types';

const HeartIcon = ({ color, size, handleClick, activeColor, isActive }) => {
  return (
    <svg
      fill={isActive ? activeColor : 'transparent'}
      stroke={isActive ? activeColor : color}
      width={size}
      height={size}
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        position: 'absolute',
        right: 14,
        top: 14,
        transition: 'fill 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <use href={'./assets/sprite.svg#heart'} />
    </svg>
  );
};

HeartIcon.propTypes = {
  color: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  size: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default HeartIcon;
