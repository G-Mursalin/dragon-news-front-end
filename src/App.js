import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/BasicRoutes/BasicRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}

export default App;
