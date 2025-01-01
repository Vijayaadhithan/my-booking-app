import React from "react";
import "./../styles/BookingCard.css";

const BookingCard = ({ booking, onCancel }) => {
  return (
    <div className="booking-card">
      <h3>{booking.service_name}</h3>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Status:</strong> {booking.status}</p>
      <button onClick={() => onCancel(booking.id)}>Cancel Booking</button>
    </div>
  );
};

export default BookingCard;
