import { Dashboard } from "./ui/Dashboard/Dashboard";
import { HashRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./ui/NavigationBar/NavigationBar";
import { Seatbooking } from "./ui/SeatBooking/SeatBooking";

function App() {
  return (
    <>
      <NavigationBar />
      <HashRouter basename="/bus-ticket-frontend">
        <Routes>
          <Route path="/bus-ticket-frontend" element={<Seatbooking />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
