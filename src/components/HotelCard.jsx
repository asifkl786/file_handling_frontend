import React from "react";

const HotelCard = ({ hotel, onClick }) => {
  if (!hotel) return <div className="text-red-500">Error: Hotel data not found!</div>;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 cursor-pointer" onClick={onClick}>
      <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{hotel.name}</h2>
      <p className="text-gray-600">{hotel.location}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-yellow-500 font-bold">{hotel.rating} ⭐</span>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">View Rooms</button>
      </div>
    </div>
  );
};

export default HotelCard;

