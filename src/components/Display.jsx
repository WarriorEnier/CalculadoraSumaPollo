import PropTypes from 'prop-types';
export const Display = ({ num, total, error }) => {
  return (
    <div className="w-full h-[15%] bg-white mx-auto rounded-lg font-orbi text-5xl text-end pt-2 px-2 overflow-hidden">
      {error.estado ? (
        error.msm
      ) : total !== "" ? (
        <span className="text-cyan-700">{total}</span>
      ) : (
        num
      )}
    </div>
  );
};

Display.propTypes = {
    num: PropTypes.string.isRequired,
    total:PropTypes.number.isRequired,
    error:PropTypes.object.isRequired
}
