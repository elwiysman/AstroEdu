import React, { useState } from "react";
import { planets } from "../data/planets";

const PlanetCard = ({ planet, onClick }: any) => (
  <div
    className="group relative bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 cursor-pointer border border-blue-500/20 hover:border-blue-400/40 h-full flex flex-col"
    onClick={() => onClick(planet)}
  >
    {/* Glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-purple-400/0 group-hover:from-blue-400/10 group-hover:via-blue-400/20 group-hover:to-purple-400/10 transition-all duration-500" />

    {/* Planet image with orbital ring effect */}
    <div className="relative h-56 overflow-hidden flex-shrink-0">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
      <img
        src={planet.image}
        alt={planet.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />

      {/* Orbital rings animation */}
      <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-300/30 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-purple-300/20 rounded-full animate-spin"
          style={{ animationDuration: "30s" }}
        />
      </div>
    </div>

    <div className="p-6 relative z-20 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
          {planet.name}
        </h3>
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
      </div>

      <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 flex-1">
        {planet.description}
      </p>

      <div className="flex justify-between items-center mt-auto">
        <div className="bg-black/30 px-3 py-2 rounded-lg border border-blue-500/30">
          <span className="text-xs text-blue-300 font-medium">Diameter</span>
          <p className="text-white font-bold text-sm">
            {planet.physicalData.diameter}
          </p>
        </div>

        <div className="flex items-center space-x-2 text-blue-300 group-hover:text-white transition-colors duration-300">
          <span className="text-sm font-semibold">Explore</span>
          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-all duration-300">
            <svg
              className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
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

const PlanetPage = ({ openModal }: any) => {
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);

  return (
    <div className="min-h-[800px] relative">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header with enhanced styling */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
          Planet di Tata Surya
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Jelajahi keajaiban planet-planet di sistem tata surya kita
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full" />
      </div>

      {/* Enhanced grid with staggered animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {planets.map((planet, index) => (
          <div
            key={planet.id}
            className="animate-fade-in-up h-full"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: "both",
            }}
            onMouseEnter={() => setHoveredPlanet(planet.id)}
            onMouseLeave={() => setHoveredPlanet(null)}
          >
            <PlanetCard planet={planet} onClick={openModal} />
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

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default PlanetPage;
