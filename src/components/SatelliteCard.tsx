import React from "react";

const SatelliteCard = ({ satellite, onClick }: any) => (
  <div
    className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
    onClick={() => onClick(satellite)}
  >
    <div className="h-48 overflow-hidden">
      <img
        src={satellite.image}
        alt={satellite.name}
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{satellite.name}</h3>
      <p className="text-gray-300 mb-1">Planet: {satellite.planet}</p>
      <p className="text-gray-300 mb-4">{satellite.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">
          Diameter: {satellite.physicalData.diameter}
        </span>
        <button className="text-purple-300 hover:text-white">
          Detail <i className="fas fa-arrow-right ml-1"></i>
        </button>
      </div>
    </div>
  </div>
);

export default SatelliteCard;
