import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = localStorage.getItem("token");
  return auth ? <Outlet /> : <Navigate to="/connexion" />;
};

export default PrivateRoutes;