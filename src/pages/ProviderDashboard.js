import React, { useState, useEffect } from "react";
import axios from "axios";
import ServiceTable from "../components/ServiceTable";
import BookingTable from "../components/BookingTable";
import AddServiceForm from "../components/AddServiceForm";
import MetricsCard from "../components/MetricsCard";
import Loader from "../components/Loader";
import "./../styles/ProviderDashboard.css";

const ProviderDashboard = () => {
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [metrics, setMetrics] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAddServiceForm, setShowAddServiceForm] = useState(false);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const servicesResponse = await axios.get("/services/");
      const bookingsResponse = await axios.get("/bookings/");
      const metricsResponse = await axios.get("/metrics/");
      setServices(servicesResponse.data);
      setBookings(bookingsResponse.data);
      setMetrics(metricsResponse.data);
    } catch (error) {
      console.error("Failed to fetch dashboard data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleAddService = (newService) => {
    setServices([newService, ...services]);
  };

  return (
    <div className="provider-dashboard-container">
      <h1>Service Provider Dashboard</h1>
      {loading && <Loader />}
      <div className="metrics-container">
        <MetricsCard title="Total Revenue" value={`$${metrics.revenue}`} />
        <MetricsCard title="Total Bookings" value={metrics.totalBookings} />
        <MetricsCard title="Active Services" value={metrics.activeServices} />
      </div>
      <button
        className="add-service-button"
        onClick={() => setShowAddServiceForm(!showAddServiceForm)}
      >
        {showAddServiceForm ? "Close Form" : "Add Service"}
      </button>
      {showAddServiceForm && (
        <AddServiceForm onAddService={handleAddService} />
      )}
      <h2>Manage Services</h2>
      <ServiceTable services={services} />
      <h2>Bookings Overview</h2>
      <BookingTable bookings={bookings} />
    </div>
  );
};

export default ProviderDashboard;
