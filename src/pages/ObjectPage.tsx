import React, { useState } from "react";
import { otherObjects } from "../data/otherObjects";

const ObjectCard = ({ object, onClick }: any) => (
  <div
    className="group relative bg-gradient-to-br from-indigo-900/80 via-cyan-900/80 to-teal-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 cursor-pointer border border-indigo-500/20 hover:border-cyan-400/40 h-full flex flex-col"
    onClick={() => onClick(object)}
  >
    {/* Cosmic energy glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-cyan-400/5 to-teal-400/0 group-hover:from-indigo-400/10 group-hover:via-cyan-400/20 group-hover:to-teal-400/10 transition-all duration-500" />

    {/* Object image with cosmic effects */}
    <div className="relative h-56 overflow-hidden flex-shrink-0">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <img
        src={object.image}
        alt={object.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />

      {/* Cosmic particle effects */}
      <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-8 right-8 w-1 h-1 bg-indigo-400 rounded-full animate-ping" />
        <div
          className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Type badge with enhanced styling */}
      <div className="absolute top-4 left-4 z-20">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
          {object.type}
        </span>
      </div>
    </div>

    <div className="p-6 relative z-20 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
          {object.name}
        </h3>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div
            className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.3s" }}
          />
          <div
            className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.6s" }}
          />
        </div>
      </div>

      <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 flex-1">
        {object.description}
      </p>

      <div className="flex justify-between items-center mt-auto">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
          <span className="text-xs text-gray-400 font-medium">
            Celestial Object
          </span>
        </div>

        <div className="flex items-center space-x-2 text-cyan-300 group-hover:text-white transition-colors duration-300">
          <span className="text-sm font-semibold">Explore</span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-indigo-500/40 group-hover:to-cyan-500/40 transition-all duration-300">
            <svg
              className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:scale-110 transition-transform duration-300"
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

const ObjectPage = ({ openModal }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredObjects = otherObjects
    .filter(
      (obj) =>
        obj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        obj.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        obj.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "type") return a.type.localeCompare(b.type);
      return 0;
    });

  return (
    <div className="min-h-[800px] relative">
      {/* Animated cosmic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          >
            <div
              className="bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-20"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Enhanced header */}
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Benda Antariksa Lainnya
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
          Jelajahi berbagai benda langit misterius di alam semesta
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 mx-auto rounded-full" />
      </div>

      {/* Search and filter controls */}
      <div className="relative z-10 flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Cari benda antariksa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
          />
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
        >
          <option value="name">Urutkan berdasarkan Nama</option>
          <option value="type">Urutkan berdasarkan Jenis</option>
        </select>
      </div>

      {/* Results count */}
      <div className="relative z-10 text-center mb-6">
        <p className="text-gray-400 text-sm">
          Menampilkan {filteredObjects.length} dari {otherObjects.length} benda
          antariksa
        </p>
      </div>

      {/* Enhanced grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {filteredObjects.map((object, index) => (
          <div
            key={object.id}
            className="animate-fade-in-up h-full"
            style={{
              animationDelay: `${index * 120}ms`,
              animationFillMode: "both",
            }}
          >
            <ObjectCard object={object} onClick={openModal} />
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredObjects.length === 0 && (
        <div className="text-center py-12 relative z-10">
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            Tidak ada hasil ditemukan
          </h3>
          <p className="text-gray-400">Coba ubah kata kunci pencarian Anda</p>
        </div>
      )}

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

        @keyframes drift {
          0%,
          100% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(10px) translateY(-5px);
          }
          50% {
            transform: translateX(-5px) translateY(-10px);
          }
          75% {
            transform: translateX(-10px) translateY(5px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-drift {
          animation: drift 8s ease-in-out infinite;
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

export default ObjectPage;
