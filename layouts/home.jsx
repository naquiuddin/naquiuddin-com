import Nav from "../components/nav";

const HomeLayout = ({ children }) => {
  return (
    <div className="container">
      <Nav />
      {children}
    </div>
  );
};

export default HomeLayout;
