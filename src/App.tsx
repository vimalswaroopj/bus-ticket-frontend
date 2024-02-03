import React from "react";
import { Dashboard } from "./ui/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavigationBar } from "./ui/NavigationBar/NavigationBar";
import { Seatbooking } from "./ui/SeatBooking/SeatBooking";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Seatbooking />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);
function App() {
  return (
    <>
      <NavigationBar />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;
