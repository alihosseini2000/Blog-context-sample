import { Sidebar } from "../Components";
import { Footer, NavBar } from "../layout";
import { BlogPage } from "../pages";

export default function Blog() {
  return (
    <>
      <div className="position-fixed top-0 w-100">
      <NavBar />
    </div>
      <Sidebar />
      <BlogPage />
      <Footer />
    </>
  );
}
