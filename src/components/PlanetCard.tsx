import React from "react";

const PlanetCard = ({ planet, onClick }: any) => (
  <div
    className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
    onClick={() => onClick(planet)}
  >
    <div className="h-48 overflow-hidden">
      <img
        src={planet.image}
        alt={planet.name}
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{planet.name}</h3>
      <p className="text-gray-300 mb-4">{planet.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">
          Diameter: {planet.physicalData.diameter}
        </span>
        <button className="text-blue-300 hover:text-white">
          Detail <i className="fas fa-arrow-right ml-1"></i>
        </button>
      </div>
    </div>
  </div>
);

export default PlanetCard;
