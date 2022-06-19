import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-col justify-between ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
