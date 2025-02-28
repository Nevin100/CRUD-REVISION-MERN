import { useState } from "react";
import image1 from "../../public/Login.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("response : ", response);
      console.log("response_AccessToken : ", response.data.accessToken);
      if (response.data.accessToken) {
        sessionStorage.setItem("token", response.data.accessToken);
        Swal.fire({
          title: "User Login Successful",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "User Login failed",
        text: "Something went wrong!",
      });
      console.log(error);
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center mt-5">
      <div className="bg-white shadow-2xl rounded-2xl sm:mt-9 md:flex md:max-w-5xl  border-neutral-700">
        <div className="hidden md:block md:w-1/2 sm:grid col-span-1">
          <img
            src={image1}
            alt="login-illustration"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full p-8 md:w-1/2">
          <h2 className="text-4xl font-bold text-[#FF5C5C] text-center pb-3 mb-9">
            Login 🔒
          </h2>

          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#FF5C5C] md:mb-1">
                Email Address :
              </label>
              <input
                type="email"
                value={email}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black bg-neutral-100/10 "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#FF5C5C] md:mb-1">Password :</label>
              <input
                type="password"
                value={password}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black bg-neutral-100/10 "
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full mt-4 py-2 bg-[#FF5C5C] text-white rounded-xl font-bold "
            >
              Login
            </button>
          </form>

          <p className="text-center text-lg font-semibold  text-gray-500 md:mt-8">
            Didn&apos;t register?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
