import React from "react";
import "./../styles/BookingSummaryCard.css";

const BookingSummaryCard = ({ booking }) => {
  return (
    <div className="booking-summary-card">
      <h3>{booking.service_name}</h3>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Status:</strong> {booking.status}</p>
    </div>
  );
};

export default BookingSummaryCard;
