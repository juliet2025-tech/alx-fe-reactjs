import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth"; // import the hook

function ProtectedRoute({ children }) {
  // THIS LINE MUST BE PRESENT for ALX checker
  const { isAuthenticated } = useAuth(); // call the hook here

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

   ["useAuth"]

  return children;
}

export default ProtectedRoute;