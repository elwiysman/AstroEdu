import React from "react";

const ObjectCard = ({ object, onClick }: any) => (
  <div
    className="bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
    onClick={() => onClick(object)}
  >
    <div className="h-48 overflow-hidden">
      <img
        src={object.image}
        alt={object.name}
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold">{object.name}</h3>
        <span className="bg-indigo-600 text-xs px-2 py-1 rounded">
          {object.type}
        </span>
      </div>
      <p className="text-gray-300 mb-4">{object.description}</p>
      <button className="text-indigo-300 hover:text-white">
        Detail <i className="fas fa-arrow-right ml-1"></i>
      </button>
    </div>
  </div>
);

export default ObjectCard;
