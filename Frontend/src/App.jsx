import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth-Pages/Login.jsx";
import SignUp from "./Pages/Auth-Pages/SignUp.jsx";
import Home from "./Pages/Crud-Pages/Home.jsx";
import Delete from "./Pages/Auth-Pages/SignUp.jsx";
import Edit from "./Pages/Auth-Pages/SignUp.jsx";
import Post from "./Pages/Auth-Pages/SignUp.jsx";

const App = () => {
  return (
    <Router>
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden min-h-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#FF5C5C_100%)]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
