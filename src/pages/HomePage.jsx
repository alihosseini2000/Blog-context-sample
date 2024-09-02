import { Header, NavBar , Footer } from "../layout/index";

function HomePage() {
  return (
    <>
      <div className="position-fixed top-0 w-100">
        <NavBar />
      </div>
      <Header />
      <Footer />
    </>
  );
}

export default HomePage;
