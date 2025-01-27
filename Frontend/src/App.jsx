import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Home from "./Pages/Home.jsx";
import Delete from "./Pages/SignUp.jsx";
import Edit from "./Pages/SignUp.jsx";
import Post from "./Pages/SignUp.jsx";

const routes = (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/delete/:id" element={<Delete />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden min-h-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#FF5C5C_100%)]">
        {routes}
      </div>
    </div>
  );
};

export default App;
