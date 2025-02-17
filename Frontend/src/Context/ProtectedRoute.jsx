const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  return token ? children : (window.location.href = "/login");
};

export default ProtectedRoute;
