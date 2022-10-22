import Navebar from "./navebar";

const Layout = ({ children }) => {
  return(
    <div>
      <Navebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;