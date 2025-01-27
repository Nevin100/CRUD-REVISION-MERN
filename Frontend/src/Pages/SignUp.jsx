import { useState } from "react";
import image1 from "../../public/image1.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = () => {};

  return (
    <div className="max-h-screen flex items-center justify-center mt-5">
      <div className="bg-transparent-200 shadow-white-2xl rounded-2xl overflow-hidden md:flex md:max-w-4xl border border-b-2 border-neutral-700">
        <div className="hidden md:block md:w-1/2 sm:grid col-span-1 ">
          <img
            src={image1}
            alt="login-illustration"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full p-8 md:w-1/2">
          <h2 className="text-3xl font-bold text-[#FF5C5C] text-center pb-3">
            SignUp
          </h2>

          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-[#FF5C5C]">Full Name :</label>
              <input
                type="text"
                value={fullName}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none text-neutral-200 bg-neutral-100/10 "
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#FF5C5C]">Email Address :</label>
              <input
                type="email"
                value={email}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none text-neutral-200 bg-neutral-100/10 "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#FF5C5C]">Password :</label>
              <input
                type="password"
                value={password}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none text-neutral-200 bg-neutral-100/10 "
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 py-2 bg-[#FF5C5C] text-white rounded-xl font-bold "
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Didnt register?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
