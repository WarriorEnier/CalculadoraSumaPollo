import PropTypes from "prop-types";
export const Button = ({ className, onClick, value }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
