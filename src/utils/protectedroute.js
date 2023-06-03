import { Navigate } from "react-router-dom";
import useAuth from "../utils/useAuth"

const ProtectedRoute = ({ element }) => {
    console.log(element);
    const { user } = useAuth();
    if (!user) {
      return <Navigate to="/" />;
    }
    return element;
  };
  
export default ProtectedRoute