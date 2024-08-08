import Openai from "./Openai";
import userImg from "../assets/unnamed.png";
import Hamburger from "./Hamburger";
import DropDown from "./DropDown";
const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 max-h-20 h-[66px]">
      <ul className="w-full h-full flex gap-5 items-center  text-sm">
        <Openai />
        <DropDown />
      </ul>
      <div className="flex h-full items-center gap-4">
        <Hamburger />
        <img
          src={userImg}
          alt="Login user Profile picture"
          className="h-[25px] rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
