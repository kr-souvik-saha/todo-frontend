import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./views/Login";
import { UserContextProvider } from "./contexts/userContext";
import PasswordReset from "./views/PasswordReset";
import Home from "./views/Home";
import Protected from "./views/Protected";
import AdminProtected from "./views/AdminProtected";
import AdminHome from "./views/AdminHome";
import UserHome from "./views/UserHome";
import UserOperations from "./views/UserOperations";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/resetPassword", element: <PasswordReset /> },
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/adminHome",
    element: (
      <AdminProtected>
        <AdminHome />
      </AdminProtected>
    ),
  },
  {
    path: "/userHome",
    element: (
      <Protected>
        <UserHome />
      </Protected>
    ),
  },
  {
    path: "/userOperations",
    element: (
      <AdminProtected>
        <UserOperations />
      </AdminProtected>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <div className="Route">
          <RouterProvider router={router} />
        </div>
      </UserContextProvider>
    </div>
  );
}

export default App;
