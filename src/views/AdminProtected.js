import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { Navigate } from "react-router-dom";

export default function AdminProtected({ children }) {
  const user = useContext(UserContext);

  if (!user.userId) {
    return <Navigate to="/login" replace={true} />;
  }
  if (!user.isActive) {
    return <Navigate to="/resetPassword" replace={true} />;
  }
  if (user.role != "Admin") {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}
