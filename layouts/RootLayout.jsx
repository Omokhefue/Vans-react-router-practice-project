import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default RootLayout;
