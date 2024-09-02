import "./blogPage.css";
import { useLayoutEffect } from "react";
import { Title, SingleBlog } from "../Components/index";
import {
  useBlogsContext,
  useCommentContext,
  useUserContext,
} from "../Context/index";
import { useParams } from "react-router-dom";
import { banner_image } from "../utils/images";

export default function BlogPage() {
  const { fetchSingleBlog, singleBlog } = useBlogsContext();
  const { fetchSingleUser, singleUser } = useUserContext();
  const { fetchCommentsByPost, commentsByPost } = useCommentContext();

  const { id } = useParams();

  useLayoutEffect(() => {
    fetchSingleBlog(id);
    if (singleBlog.userId) {
      fetchSingleUser(singleBlog.userId);
    }
    if (singleBlog.id) {
      fetchCommentsByPost(singleBlog.id);
    }
  }, [singleBlog.id , id]);

  return (
    <div className="main-holder bg-light-blue">
      <header
        className="header"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image}) center/cover no-repeat`,
        }}>
        <div className="container">
          <div className="header-content text-center d-flex align-items-center justify-content-center flex-column text-white">
            <Title title="Blog Details" color={`#fff`} />
          </div>
        </div>
      </header>
      <section className="section py-5">
        <div className="container">
          <div className="section-content bg-white">
            <SingleBlog
              blog={singleBlog}
              user={singleUser}
              comments={commentsByPost}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
