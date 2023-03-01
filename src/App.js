import { Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import BookingList from "./components/bookingList";
import "./App.css";
import Homepage from "./screen/homepage";

function App() {
  return (
    <>
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Hotel Room Management</span>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="all_bookings" element={<BookingList />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
