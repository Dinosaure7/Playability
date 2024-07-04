import { useNavigate } from "react-router-dom";

function Return() {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleReturnClick}>
      <img className="w-6" src="/src/assets/return.svg" />
    </button>
  );
}

export default Return;
