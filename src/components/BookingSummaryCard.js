import React from "react";
import "./../styles/BookingSummaryCard.css";

const BookingSummaryCard = ({ booking }) => {
  return (
      <div className="card">
          <div className="card-body">
              <h5 className="card-title">{booking.service_name}</h5> {/* Use service_name */}
              <p className="card-text">
                  Customer: {booking.customer_name} {/* Use customer_name */}
              </p>
              <p className="card-text">
                  Appointment Time: {new Date(booking.appointment_time).toLocaleString()}
              </p>
              <p className="card-text">
                  Status: {booking.status}
              </p>
              <p className="card-text">
                  Payment Status: {booking.payment_status}
              </p>
              <p className="card-text">
                  Total Price: {booking.total_price} {/* Use total_price */}
              </p>
              {/* Add more details or actions as needed */}
          </div>
      </div>
  );
};

export default BookingSummaryCard;
