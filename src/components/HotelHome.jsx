import React from "react";
import { useNavigate } from "react-router-dom";
import HotelCard from "../components/HotelCard";

const hotels = [
  {
    id: 1,
    name: "Luxury Palace",
    image: "https://source.unsplash.com/400x300/?hotel",
    location: "New York, USA",
    rating: 4.8,
    rooms: [
      { type: "Deluxe Room", ac: true, price: 120, image: "https://source.unsplash.com/400x300/?room" },
      { type: "Standard Room", ac: false, price: 80, image: "https://source.unsplash.com/400x300/?bedroom" },
    ],
  },
];

const HotelHome = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center">🏨 Hotel Booking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} onClick={() => navigate(`/hotel-home/${hotel.id}`)} />
          ))
        ) : (
          <p className="text-red-500">No hotels available.</p>
        )}
      </div>
    </div>
  );
};

export default HotelHome;
