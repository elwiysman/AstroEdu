import React, { useEffect, useRef, useState } from "react";

interface ModalDetailProps {
  item: any;
  onClose: () => void;
}

const ModalDetail: React.FC<ModalDetailProps> = ({ item, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Menghilangkan overflow pada body saat modal dibuka
    document.body.style.overflow = "hidden";

    // Fokus pada modal untuk keyboard navigation
    if (modalRef.current) {
      modalRef.current.focus();
    }

    // Simulasi loading
    const timer = setTimeout(() => setIsLoading(false), 500);

    // Handler untuk tombol ESC
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Menambahkan event listener untuk ESC
    document.addEventListener("keydown", handleEscapeKey);

    // Cleanup function
    return () => {
      // Mengembalikan overflow body saat modal ditutup
      document.body.style.overflow = "unset";
      // Menghapus event listener
      document.removeEventListener("keydown", handleEscapeKey);
      clearTimeout(timer);
    };
  }, [onClose]);

  // Handler untuk klik di luar modal
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <p className="text-white text-lg">Loading cosmic data...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={handleOverlayClick}
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col border border-gray-700/50 animate-scale-in">
        {/* Enhanced Header */}
        <div className="relative p-6 border-b border-gray-700/50 flex-shrink-0">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-t-2xl" />

          <div className="relative flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              <div>
                <h2
                  id="modal-title"
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  {item.name}
                </h2>
                {item.type && (
                  <span className="inline-block mt-1 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                    {item.type}
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={onClose}
              className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-red-500/20 border border-gray-600/50 hover:border-red-500/50 transition-all duration-300"
              aria-label="Tutup modal"
              type="button"
            >
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex-shrink-0 px-6 pt-4">
          <div className="flex space-x-1 bg-gray-800/50 rounded-lg p-1">
            {["overview", "data", "facts"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {tab === "overview" && "Overview"}
                {tab === "data" && "Physical Data"}
                {tab === "facts" && "Interesting Facts"}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          {activeTab === "overview" && (
            <div className="space-y-6 animate-fade-in">
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
                {item.planet && (
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Planet: {item.planet}
                    </span>
                  </div>
                )}
              </div>

              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-6 border border-gray-600/30">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Description
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          )}

          {activeTab === "data" && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(item.physicalData).map(
                  ([key, value], index) => (
                    <div
                      key={key}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl p-6 border border-gray-600/30 hover:border-blue-500/30 transition-all duration-300 animate-slide-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-3" />
                        <h4 className="text-lg font-semibold text-white capitalize">
                          {key}
                        </h4>
                      </div>
                      <p className="text-2xl font-bold text-blue-300">
                        {String(value)}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {activeTab === "facts" && item.facts && (
            <div className="animate-fade-in">
              <div className="space-y-4">
                {item.facts.map((fact: string, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 animate-slide-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-300 leading-relaxed flex-1">
                        {fact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "facts" && !item.facts && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-700/50 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
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
                No Facts Available
              </h3>
              <p className="text-gray-400">
                Interesting facts for this celestial body are not available yet.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out both;
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4B5563 #1F2937;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1F2937;
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #4B5563, #6B7280);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #6B7280, #9CA3AF);
        }
      `}</style>
    </div>
  );
};

export default ModalDetail;
