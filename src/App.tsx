import { Dashboard } from "./ui/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./ui/NavigationBar/NavigationBar";
import { Seatbooking } from "./ui/SeatBooking/SeatBooking";
console.log("deploy");
function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter basename="/bus-ticket-frontend">
        <Routes>
          <Route path="/bus-ticket-frontend" element={<Seatbooking />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
