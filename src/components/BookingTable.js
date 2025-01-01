import React from "react";
import "./../styles/BookingTable.css";

const BookingTable = ({ bookings }) => {
  return (
    <table className="booking-table">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Service</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td>{booking.customer_name}</td>
            <td>{booking.service_name}</td>
            <td>{booking.date}</td>
            <td>{booking.status}</td>
            <td>
              <button>Update Status</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookingTable;
