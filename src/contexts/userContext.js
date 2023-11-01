import { createContext, useEffect, useState } from "react";
import { login } from "../Apis/usersApi";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userName, setUserName] = useState();
  const [userId, setUserId] = useState();
  const [isActive, setIsActive] = useState();
  const [name, setName] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    async function fetchAndPopulate() {
      const response = await login();

      if (response.message === "Ok") {
        setName(response.data.name);
        setRole(response.data.role);
        setUserId(response.data.id);
        setUserName(response.data.userName);
        setIsActive(response.data.isActive);
      }
    }
    fetchAndPopulate();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        userId,
        setUserId,
        isActive,
        setIsActive,
        role,
        setRole,
        name,
        setName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
