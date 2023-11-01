import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { Navigate } from "react-router-dom";

export default function Home() {
  const user = useContext(UserContext);
  console.log(user);

  if (user.role === "Admin") {
    return <Navigate to="/adminHome" replace={true} />;
  }
  if (user.role === "User") {
    return <Navigate to="/userHome" replace={true} />;
  }
  return <Navigate to="/userHome" replace={true} />;
}
