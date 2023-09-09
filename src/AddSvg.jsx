import PropTypes from 'prop-types';

const AddSvg = ({ component: Component, sprite, spriteId }) => {
  return (
    <Component>
      <use href={`${sprite}#${spriteId}`} />
    </Component>
  );
};

AddSvg.propTypes = {
  component: PropTypes.elementType.isRequired,
  sprite: PropTypes.string.isRequired,
  spriteId: PropTypes.string.isRequired,
};

export default AddSvg;

// const getSvg = () => {
//   return process.env.PUBLIC_URL + '/sprite.svg';
// };

// export default getSvg;