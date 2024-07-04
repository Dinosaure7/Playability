import { Link } from "react-router-dom";

function Return({link}) {
  return (
    <Link to={link}>
      <img className="w-6" src="/src/assets/return.svg" alt="" />
    </Link>
  );
}

export default Return;
