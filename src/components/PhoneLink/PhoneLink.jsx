import PropTypes from 'prop-types';
import { StyledLink } from './PhoneLink.styled';

const PhoneLink = ({ number, children }) => {
  return <StyledLink href={`tel:${number}`}>{children}</StyledLink>;
};

PhoneLink.propTypes = {
  number: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default PhoneLink;
