import React from "react";
import { useParams } from "react-router-dom";
import RoomCard from "../components/RoomCard";

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

const HotelDetails = () => {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id === parseInt(id));

  if (!hotel) return <p className="text-red-500 text-center">Hotel not found!</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center">{hotel.name}</h1>
      <img src={hotel.image} alt={hotel.name} className="w-full max-h-80 object-cover rounded-lg mt-4" />
      <p className="text-lg text-gray-600 text-center mt-2">{hotel.location}</p>
      <h2 className="text-2xl font-semibold mt-4">Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {hotel.rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
};

export default HotelDetails;
