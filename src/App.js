import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/BasicRoutes/BasicRoutes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
