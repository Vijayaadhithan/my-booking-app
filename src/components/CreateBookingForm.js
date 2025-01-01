import React, { useState } from "react";
import axios from "axios";
import "./../styles/CreateBookingForm.css";

const CreateBookingForm = ({ onCreateBooking, onClose }) => {
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/bookings/", {
        service: serviceId,
        date,
      });
      onCreateBooking(response.data);
      onClose();
    } catch (error) {
      console.error("Failed to create booking", error);
    }
  };

  return (
    <form className="create-booking-form" onSubmit={handleSubmit}>
      <h2>Create Booking</h2>
      <input
        type="text"
        placeholder="Service ID"
        value={serviceId}
        onChange={(e) => setServiceId(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Create</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default CreateBookingForm;
