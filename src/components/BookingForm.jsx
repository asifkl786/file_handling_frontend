import React, { useState } from "react";

const BookingForm = ({ room }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleBooking = () => {
    alert(`Room booked by ${name} on ${date}!`);
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-lg font-semibold">Book {room.type}</h2>
      <input
        type="text"
        placeholder="Your Name"
        className="border p-2 w-full mt-2"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        className="border p-2 w-full mt-2"
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleBooking} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingForm;
