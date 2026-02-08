import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import DestinationDetail from "./components/DestinationDetail";
import Weather from "./components/Weather";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashboard from "./components/AdminDashboard";
import TripHistory from "./components/TripHistory";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="container my-5">
                <Destinations />
              </div>
            </>
          }
        />

        {/* DESTINATION DETAIL */}
        <Route
          path="/destinations/:id"
          element={<DestinationDetail />}
        />

        {/* WEATHER */}
        <Route
          path="/weather"
          element={
            <div className="container my-5">
              <Weather />
            </div>
          }
        />

        {/* CHAT */}
        <Route
          path="/chat"
          element={
            <div className="container my-5">
              <Chat />
            </div>
          }
        />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <div className="container my-5">
              <AdminDashboard />
            </div>
          }
        />

        {/* MY TRIPS */}
        <Route path="/my-trips" element={<TripHistory />} />
      </Routes>
    </>
  );
}

export default App;
