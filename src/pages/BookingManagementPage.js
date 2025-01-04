import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingCard from "../components/BookingCard";
import CreateBookingForm from "../components/CreateBookingForm";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import "./../styles/BookingManagementPage.css";

const BookingManagementPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [search, setSearch] = useState("");  // Add search state
  const [filterBy, setFilterBy] = useState("");  // Add filter state

  const fetchBookings = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`/bookings/?page=${page}`);
      setBookings(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Failed to fetch bookings", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBooking = (newBooking) => {
    setBookings([newBooking, ...bookings]);
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      await axios.delete(`/api/bookings/${bookingId}/`);
      setBookings(bookings.filter((booking) => booking.id !== bookingId));
    } catch (error) {
      console.error("Failed to cancel booking", error);
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`/bookings/?page=${page}&search=${search}&filter=${filterBy}`);
            setBookings(response.data.results);  // Access results from paginated response
            setTotalPages(response.data.total_pages);  // Access total_pages from paginated response
        } catch (error) {
            console.error("Error fetching bookings:", error);
            // Add error handling, e.g., show an error message to the user
        } finally {
            setLoading(false);
        }
    };

    fetchBookings();
}, [page, search, filterBy]);

const handleSearchChange = (event) => {
  setSearch(event.target.value);
  setPage(1);
};

const handleFilterChange = (event) => {
  setFilterBy(event.target.value);
  setPage(1);
};

return (
  <div>
      <h1>Booking Management</h1>
      <div className="mb-3">
          <input
              type="text"
              className="form-control"
              placeholder="Search bookings..."
              value={search}
              onChange={handleSearchChange}
          />
      </div>
      <div className="mb-3">
          <select className="form-select" value={filterBy} onChange={handleFilterChange}>
              <option value="">Filter by status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
          </select>
      </div>
      {/* ... (rest of the component code) ... */}
  </div>
);
};

export default BookingManagementPage;