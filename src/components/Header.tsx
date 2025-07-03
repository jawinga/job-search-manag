import { Layers } from "lucide-react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">
        The Ultimate{" "}
        <span className="header__title--highlight">Job Search</span>{" "}
        <Layers></Layers>
      </h1>
      <h3 className="header__subtitle">Keep track of your applications</h3>
    </div>
  );
};

export default Header;
