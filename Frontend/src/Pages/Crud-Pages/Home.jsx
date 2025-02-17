import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No Token found, Redirecting to Home");
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h1>Hello to the Friends Page</h1>
    </>
  );
};

export default Home;
