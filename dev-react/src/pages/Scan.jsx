import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Webcam from "react-webcam";

const Scan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/gameList/168"); // Remplacez '/target-page' par la route vers laquelle vous voulez rediriger
    }, 10000); // Délai de 3000ms (3 secondes)

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "environment",
  };

  return (
    <div className="flex flex-col items-center mt-24 md:mt-0 md:justify-center mb-[70%] md:mb-10">
      <h1 className="mb-4">Scannez le code barre</h1>
      <div className="relative">
        <Webcam
          audio={false}
          width={1100}
          videoConstraints={videoConstraints}
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="border-4 border-green-500 rounded-lg w-40 h-32 md:w-96 md:h-72 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Scan;
