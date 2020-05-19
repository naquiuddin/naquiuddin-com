import Nav from "../components/nav";
import TelegramWidget from "../components/telegramWidget";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <TelegramWidget/>
    </div>
  );
};

export default HomeLayout;
