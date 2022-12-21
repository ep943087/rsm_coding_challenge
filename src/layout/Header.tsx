import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/"><img height="50px" src="/open-brewery-logo.png" alt="logo" /></Link>
    </div>
  );
};

export default Header;