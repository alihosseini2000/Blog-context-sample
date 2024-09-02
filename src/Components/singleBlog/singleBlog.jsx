import "./singleBlog.css";
import { BiUser, BiCommentDots } from "react-icons/bi";
import { MdOutlineAddReaction } from "react-icons/md";
import author from "../../assets/author.png";
import { Comment, Loader } from "../index";
import { useBlogsContext } from "../../Context/index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SingleBlog = ({ blog, user, comments }) => {
  const { tempBlogs, singleBlogLoading, singleBlogError } = useBlogsContext();

  if (singleBlogLoading) {
    return <Loader />;
  }

  return (
    <div className="blog-single d-grid">
      <div className="blog-single-l">
        <div className="blog-details">
          <div className="blog-info d-flex align-items-center">
            <div className="blog-info-item d-flex align-items-center fs-5">
              <BiUser className="text-mid-blue" />
              <span className="blog-info-item-text font-rubik fw-light">
                {user?.firstName} {user?.lastName}
              </span>
            </div>
            <div className="blog-info-item d-flex align-items-center fs-5">
              <BiCommentDots className="text-mid-blue" />
              <span className="blog-info-item-text font-rubik fw-light">
                {comments?.length} comment(s)
              </span>
            </div>
            <div className="blog-info-item d-flex align-items-center fs-5">
              <MdOutlineAddReaction className="text-mid-blue" />
              <span className="blog-info-item-text font-rubik fw-light">
              {blog?.reactions?.likes}
              </span>
            </div>
          </div>

          <h2 className="blog-title text-dark-blue">{blog?.title}</h2>
          <p className="blog-text fs-4 fw-light">{blog?.body}</p>
          <div className="blog-tags d-flex align-items-item my-4">
            <span className="blog-tags-title fs-4 fw-light">Popular Tags:</span>
            <div className="blog-tags-list d-flex align-items-center">
              {blog?.tags?.map((tag, idx) => (
                <span
                  className="blog-tags-item fs-5 font-rubik text-uppercase text-white ls-1"
                  key={idx}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="blog-author my-5">
          <div className="blog-author-l">
            <img src={author} alt="" />
          </div>
          <div className="blog-author-r">
            <div className="fs-4 fw-medium author-name">
              {user.firstName} {user?.lastName}
            </div>
            <div className="fs-4 fw-medium author-email">
              Email: {user?.email}
            </div>
            <div className="fs-4 fw-medium author-username">
              Username: {user?.username}
            </div>
            <div className="fs-4 fw-medium author-address">
              Address: {user?.address?.address}, {user?.address?.city}
            </div>
          </div>
        </div>
        <div className="blog-comments">
          <h2 className="font-rubik my-3 fw-light">Comments</h2>
          <div className="blog-comments-list d-grid">
            {comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="blog-single-r">
        <div className="recent-blogs">
          <h2 className="font-rubik my-3 fw-medium">Recent News</h2>
          <div className="recent-blogs-list d-grid">
            {tempBlogs.slice(0, 5).map((blog) => {
              return (
                <div className="recent-blogs-item" key={blog.id}>
                  <Link to={`/blog/${blog.id}`} className="a">
                    <h3>{blog?.title}</h3>
                  </Link>
                  <div className="d-flex align-items-center fs-4">
                    <MdOutlineAddReaction /> &nbsp;
                    <span>{blog?.reactions.likes}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

SingleBlog.propTypes = {
  blog: PropTypes.any,
  user: PropTypes.any,
  comments: PropTypes.any,
};

export default SingleBlog;
