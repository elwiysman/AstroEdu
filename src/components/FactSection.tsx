import React, { useState, useEffect } from "react";

// Define types
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

interface FactSectionProps {
  fact: string;
  onRefresh: () => void;
}

const FactSection: React.FC<FactSectionProps> = ({ fact, onRefresh }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>("");
  const [showFact, setShowFact] = useState<boolean>(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Typewriter effect
  useEffect(() => {
    if (showFact && fact) {
      setDisplayText("");
      let i = 0;
      const timer = setInterval(() => {
        if (i < fact.length) {
          setDisplayText(fact.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [fact, showFact]);

  // Initialize particles
  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(newParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle: Particle) => ({
          ...particle,
          y: (particle.y + particle.speed) % 105,
          x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 0.1,
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setIsLoading(true);
    setShowFact(false);
    setDisplayText("");

    setTimeout(() => {
      onRefresh();
      setIsLoading(false);
      setShowFact(true);
    }, 1000);
  };

  const handleRevealFact = () => {
    setShowFact(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto" translate="no">
      {/* Animated Background Particles */}
      <div
        className="absolute inset-0 overflow-hidden rounded-2xl"
        translate="no"
      >
        {particles.map((particle: Particle) => (
          <div
            key={particle.id}
            className="absolute bg-yellow-400 rounded-full animate-pulse"
            translate="no"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `twinkle ${2 + particle.speed}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Main Content Card */}
      <div className="relative bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-blue-900/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header with animated stars */}
        <div className="relative bg-gradient-to-r from-yellow-400/20 to-orange-400/20 p-6 border-b border-purple-500/30">
          <div className="flex items-center justify-center space-x-3 flex-wrap">
            <div
              className="text-4xl animate-spin flex-shrink-0"
              translate="no"
              style={{ animation: "spin 4s linear infinite" }}
            >
              🌟
            </div>
            <h3
              translate="no"
              className="text-xl sm:text-2xl font-bold text-yellow-400 tracking-wide text-center min-w-0"
              style={{
                wordBreak: "keep-all",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              FAKTA LUAR ANGKASA
            </h3>

            <div
              className="text-4xl animate-spin flex-shrink-0"
              translate="no"
              style={{
                animation: "spin 4s linear infinite",
                animationDelay: "1s",
              }}
            >
              ✨
            </div>
          </div>
          <div className="mt-2 flex justify-center space-x-1" translate="no">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                translate="no"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-8 min-h-[300px] flex flex-col justify-center">
          {!showFact ? (
            <div className="text-center space-y-6">
              <div
                className="text-6xl sm:text-8xl animate-bounce"
                translate="no"
              >
                🚀
              </div>
              <h4
                className="text-lg sm:text-xl text-purple-200 font-medium px-4"
                style={{
                  wordBreak: "break-word",
                  hyphens: "auto",
                  lineHeight: "1.5",
                }}
              >
                Siap untuk mengetahui fakta menakjubkan tentang tata surya?
              </h4>
              <button
                onClick={handleRevealFact}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center space-x-2 flex-wrap justify-center">
                  <span style={{ wordBreak: "keep-all" }}>Ungkap Fakta</span>
                  <span
                    className="text-xl group-hover:rotate-12 transition-transform flex-shrink-0"
                    translate="no"
                  >
                    🔮
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
            </div>
          ) : (
            <div className="space-y-6 sm:space-y-8">
              {/* Fact Display */}
              <div className="relative">
                <div
                  className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 text-4xl sm:text-6xl text-yellow-400/30"
                  translate="no"
                >
                  "
                </div>
                <div
                  className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 text-4xl sm:text-6xl text-yellow-400/30 rotate-180"
                  translate="no"
                >
                  "
                </div>
                <p
                  className="text-base sm:text-lg md:text-xl text-center text-gray-100 leading-relaxed font-medium px-4 sm:px-8 py-4 bg-black/20 rounded-xl border border-purple-500/20"
                  style={{
                    wordBreak: "break-word",
                    hyphens: "auto",
                    minHeight: "auto",
                    overflow: "hidden",
                  }}
                >
                  {displayText}
                  {displayText.length < fact?.length && (
                    <span
                      className="animate-pulse text-yellow-400"
                      translate="no"
                    >
                      |
                    </span>
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 px-4">
                <button
                  onClick={handleRefresh}
                  disabled={isLoading}
                  className={`group relative px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                    isLoading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg hover:shadow-green-500/25"
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isLoading ? (
                      <>
                        <div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                          translate="no"
                        />
                        <span style={{ wordBreak: "keep-all" }}>Memuat...</span>
                      </>
                    ) : (
                      <>
                        <span style={{ wordBreak: "keep-all" }}>
                          Fakta Lainnya
                        </span>
                        <span
                          className="text-lg group-hover:rotate-180 transition-transform duration-500 flex-shrink-0"
                          translate="no"
                        >
                          🔄
                        </span>
                      </>
                    )}
                  </span>
                </button>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ text: fact }).catch(console.error);
                    } else {
                      // Fallback for browsers that don't support Web Share API
                      navigator.clipboard?.writeText(fact);
                    }
                  }}
                  className="group px-4 sm:px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 text-sm sm:text-base"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span style={{ wordBreak: "keep-all" }}>Bagikan</span>
                    <span
                      className="text-lg group-hover:scale-110 transition-transform flex-shrink-0"
                      translate="no"
                    >
                      📤
                    </span>
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom decoration */}
        <div
          className="h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
          translate="no"
        />
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes twinkle {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          100% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default FactSection;
