import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ServiceListingPage from "./pages/ServiceListingPage";
import BookingManagementPage from "./pages/BookingManagementPage";
import ProviderDashboard from "./pages/ProviderDashboard";
import UserActivityDashboard from "./pages/UserActivityDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Our Application</h1>
        </header>
        <main>
        <Router>
      <Routes>
        <Route path="/" element={<ServiceListingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/bookings" element={<BookingManagementPage />} />
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />
        <Route path="/user-dashboard" element={<UserActivityDashboard />} />
      </Routes>
    </Router>
        </main>
        <footer className="App-footer">
          <p>© 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
