import React from "react";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <img src={room.image} alt={room.type} className="w-full h-32 object-cover rounded-md" />
      <h3 className="text-md font-semibold mt-2">{room.type}</h3>
      <p className="text-gray-500">{room.ac ? "AC Room" : "Non-AC Room"}</p>
      <p className="font-bold text-blue-600 mt-1">${room.price} / night</p>
      <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">Book Now</button>
    </div>
  );
};

export default RoomCard;
