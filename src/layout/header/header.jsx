import { useState } from "react";
import { banner_image, search_icon } from "../../utils/images";
import { Title, BlogList } from "../../Components/index";
import { useBlogsContext } from "../../Context/index";
import "./header.css";

export default function Header() {
  const { blogs, setSearchTerm, searchTerm, fetchBlogsFromSearch } =
    useBlogsContext();

  const [erroMsg, setErrorMsg] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  };

  const handleSearchResult = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    fetchBlogsFromSearch(searchTerm);
  };

  return (
    <div>
      <header
        className="header"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image}) center/cover no-repeat`,
        }}>
        <div className="container">
          <div className="header-content text-center d-flex align-items-center justify-content-center flex-column text-white">
            <h1 className="text-uppercase header-title ls-2">
              a beatuiful blog with no images required
            </h1>
            <form
              className="d-flex align-items-center justify-content-center"
              onSubmit={(e) => handleSearchResult(e)}>
              <div className="header-input-group d-flex align-items-stretch">
                <input
                  type="text"
                  className="form-control fs-2"
                  placeholder="Search here blog ..."
                  onChange={(e) => handleSearchTerm(e)}
                />
                <span className="form-text font-rubik fs-1 fw-lightmedium">
                  {erroMsg}
                </span>
                <button
                  type="submit"
                  className="form-btn bg-violet d-flex align-items-center justify-content-center">
                  <img src={search_icon} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="section-content">
            <Title title="Blogs" color={"#0D1741"} />
            {<BlogList blogs={blogs} />}
          </div>
        </div>
      </section>
    </div>
  );
}
