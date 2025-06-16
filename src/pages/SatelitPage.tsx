import React, { useState } from "react";
import { satellites } from "../data/satellites";

const SatelliteCard = ({ satellite, onClick }: any) => (
  <div
    className="group relative bg-gradient-to-br from-purple-900/80 via-pink-900/80 to-indigo-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 cursor-pointer border border-purple-500/20 hover:border-purple-400/40 h-full flex flex-col"
    onClick={() => onClick(satellite)}
  >
    {/* Cosmic glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-pink-400/5 to-indigo-400/0 group-hover:from-purple-400/10 group-hover:via-pink-400/20 group-hover:to-indigo-400/10 transition-all duration-500" />

    {/* Satellite image with floating animation */}
    <div className="relative h-56 overflow-hidden flex-shrink-0">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <img
        src={satellite.image}
        alt={satellite.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />

      {/* Orbital path animation */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-24 h-24 border-2 border-dashed border-purple-300/40 rounded-full animate-spin"
            style={{ animationDuration: "15s" }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
        </div>
      </div>
    </div>

    <div className="p-6 relative z-20 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
          {satellite.name}
        </h3>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          <div
            className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>

      <div className="mb-3">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
              clipRule="evenodd"
            />
          </svg>
          {satellite.planet}
        </span>
      </div>

      <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2 flex-1">
        {satellite.description}
      </p>

      <div className="flex justify-between items-center mt-auto">
        <div className="bg-black/30 px-3 py-2 rounded-lg border border-purple-500/30">
          <span className="text-xs text-purple-300 font-medium">Diameter</span>
          <p className="text-white font-bold text-sm">
            {satellite.physicalData.diameter}
          </p>
        </div>

        <div className="flex items-center space-x-2 text-purple-300 group-hover:text-white transition-colors duration-300">
          <span className="text-sm font-semibold">Discover</span>
          <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-all duration-300 group-hover:rotate-12">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SatelitPage = ({ openModal }: any) => {
  const [filter, setFilter] = useState<string>("all");

  const filteredSatellites =
    filter === "all"
      ? satellites
      : satellites.filter(
          (sat) => sat.planet.toLowerCase() === filter.toLowerCase()
        );

  const uniquePlanets = [...new Set(satellites.map((sat) => sat.planet))];

  return (
    <div className="min-h-[800px] relative">
      {/* Animated cosmic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-1 h-1 bg-purple-400 rounded-full opacity-60" />
          </div>
        ))}
      </div>

      {/* Enhanced header */}
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
          Satelit di Tata Surya
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
          Temukan satelit-satelit alami yang mengorbit planet-planet di tata
          surya
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
      </div>

      {/* Filter buttons */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === "all"
              ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
              : "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border border-purple-500/30"
          }`}
        >
          Semua Satelit
        </button>
        {uniquePlanets.map((planet) => (
          <button
            key={planet}
            onClick={() => setFilter(planet)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === planet
                ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                : "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border border-purple-500/30"
            }`}
          >
            {planet}
          </button>
        ))}
      </div>

      {/* Enhanced grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {filteredSatellites.map((satellite, index) => (
          <div
            key={satellite.id}
            className="animate-fade-in-up h-full"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
          >
            <SatelliteCard satellite={satellite} onClick={openModal} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default SatelitPage;
