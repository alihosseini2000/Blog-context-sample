import PropTypes from "prop-types";
import "./pagination.css";

const Pagination = ({ noOfBlogs, paginateHandler }) => {
  let noOfPaginateItems = Math.ceil(noOfBlogs / 6);

  return (
    <div className="paginate-items d-flex align-items-center justify-content-center">
      {[...Array(noOfPaginateItems)].map((item, idx) => {
        return (
          <button
            type="button"
            className="paginate-item font-rubik fs-3 d-flex align-items-center justify-content-center text-white"
            onClick={() => paginateHandler(idx + 1)}
            key={idx}>
            {idx + 1}
          </button>
        );
      })}
    </div>
  );
};

Pagination.propTypes = {
  noOfBlogs: PropTypes.any,
  paginateHandler: PropTypes.any,
};

export default Pagination;
