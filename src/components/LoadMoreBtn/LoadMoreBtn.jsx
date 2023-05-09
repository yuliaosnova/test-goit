import PropTypes from "prop-types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage, page }) => {
  return (
    <div className={css.Container}>
      <button className={css.Button} onClick={() => setPage(page + 1)}>
        LOAD MORE
      </button>
    </div>
  );
};

LoadMoreBtn.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
