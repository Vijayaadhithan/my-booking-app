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

  const fetchBookings = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/bookings/?page=${page}`);
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
    fetchBookings(currentPage);
  }, [currentPage]);

  return (
    <div className="booking-management-container">
      <h2>Your Bookings</h2>
      <button
        className="create-booking-button"
        onClick={() => setShowCreateForm(!showCreateForm)}
      >
        {showCreateForm ? "Close Form" : "Create Booking"}
      </button>
      {showCreateForm && (
        <CreateBookingForm
          onCreateBooking={handleCreateBooking}
          onClose={() => setShowCreateForm(false)}
        />
      )}
      {loading && <Loader />}
      <div className="booking-grid">
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            booking={booking}
            onCancel={handleCancelBooking}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default BookingManagementPage;
