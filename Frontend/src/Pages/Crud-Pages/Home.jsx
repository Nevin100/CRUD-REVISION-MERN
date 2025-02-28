/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        Swal.fire({
          icon: "error",
          title: "No Token Found",
          text: "Rediecting to Login Page",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1 className="text-white text-center text-3xl font-bold">
        Hello to the Friends Page
      </h1>
    </div>
  );
};

export default Home;
