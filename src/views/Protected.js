import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { Navigate } from "react-router-dom";

export default function Protected({ children }) {
  const user = useContext(UserContext);

  if (!user.userId) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  if (!user.isActive) {
    return <Navigate to="/resetPassword" replace={true}></Navigate>;
  }

  return children;
}
