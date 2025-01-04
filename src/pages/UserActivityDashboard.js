import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingSummaryCard from "../components/BookingSummaryCard";
import FavoritesList from "../components/FavoritesList";
import ActivityGraph from "../components/ActivityGraph";
import MetricsCard from "../components/MetricsCard";
import Loader from "../components/Loader";
import "./../styles/UserActivityDashboard.css";

const UserActivityDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [metrics, setMetrics] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const bookingsResponse = await axios.get("/bookings/");
      const favoritesResponse = await axios.get("/favorites/");
      const metricsResponse = await axios.get("/metrics/");
      setBookings(bookingsResponse.data);
      setFavorites(favoritesResponse.data);
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

  return (
    <div className="user-activity-dashboard">
      <h1>Your Activity Dashboard</h1>
      {loading && <Loader />}
      <div className="metrics-container">
        <MetricsCard title="Total Spend" value={`$${metrics.totalSpend}`} />
        <MetricsCard title="Total Bookings" value={metrics.totalBookings} />
        <MetricsCard title="Membership Duration" value={metrics.duration} />
      </div>
      <h2>Recent Bookings</h2>
      <div className="bookings-container">
        {bookings.map((booking) => (
          <BookingSummaryCard key={booking.id} booking={booking} />
        ))}
      </div>
      <h2>Your Favorites</h2>
      <FavoritesList favorites={favorites} />
      <h2>Activity Insights</h2>
      <ActivityGraph data={metrics.activityGraph} />
    </div>
  );
};

export default UserActivityDashboard;
