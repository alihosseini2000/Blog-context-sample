import { useState } from "react";
import "./blogList.css";
import { MdAddReaction } from "react-icons/md";
import { Link } from "react-router-dom";
import { Loader, Pagination } from "../index";
import { useBlogsContext } from "../../Context/index";
import PropTypes from "prop-types";

function BlogList({ blogs }) {
  const { blogsLoading, searchBlogsLoading } = useBlogsContext();
  const blogsLimit = 6;
  const [paginate, setPaginate] = useState(1 * blogsLimit);
  const paginateHandler = (value) => setPaginate(value * blogsLimit);
  if (blogsLoading || searchBlogsLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="blog-items d-grid my-5">
        {blogs.slice(paginate - 6, paginate).map((blog) => {
          return (
            <div className="block-item" key={blog.id}>
              <div className="blog-item-title fw-bold fs-2 font-rubik">
                {blog.title}
              </div>
              <div className="fs-5">
                {blog.body ? blog.body.substring(0, 100) : ""}...
              </div>
              <div className="blog-item-reaction d-flex align-items-center fs-5">
                <MdAddReaction />
                <span className="reaction-value font-rubik fs-15 fw-medium">
                  {blog.reactions.likes}
                </span>
              </div>
              <div className="blog-item-tags d-flex gap-3">
                {blog.tags.map((tag, idx) => (
                  <span
                    className="blog-item-tags-single fs-bold font-rubik text-uppercase"
                    key={idx}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="blog-item-btn">
                <Link
                  to={`/blog/${blog.id}`}
                  className="read-more-btn a font-rubik fw-4">
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination noOfBlogs={blogs.length} paginateHandler={paginateHandler} />
    </>
  );
}

BlogList.propTypes = {
  blogs: PropTypes.any.isRequired,
};

export default BlogList;
