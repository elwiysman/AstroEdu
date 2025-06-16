import React, { useState } from "react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { key: "beranda", label: "Beranda", icon: "🏠" },
    { key: "planet", label: "Planet", icon: "🪐" },
    { key: "satelit", label: "Satelit", icon: "🛰️" },
    { key: "benda-lain", label: "Benda Antariksa", icon: "☄️" },
    { key: "fakta", label: "Fakta Unik", icon: "✨" },
    { key: "kuis", label: "Kuis", icon: "🧠" },
  ];

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
    setIsMobileMenuOpen(false); // Close mobile menu when tab is clicked
  };

  const handleTitleClick = () => {
    setActiveTab("beranda");
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 p-4 shadow-2xl relative overflow-hidden backdrop-blur-md">
        {/* Animated background stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto flex justify-between items-center relative z-10">
          {/* Logo/Title */}
          <div
            onClick={handleTitleClick}
            className="cursor-pointer group transition-all duration-300 hover:scale-105"
          >
            <h1 className="text-3xl md:text-4xl font-bold flex items-center space-x-2">
              <span className="text-4xl">🚀</span>
              <span className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                Astro
              </span>
              <span className="text-white group-hover:text-blue-200 transition-colors duration-300">
                Edu
              </span>
            </h1>
            <div className="h-0.5 bg-gradient-to-r from-yellow-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-2">
              {tabs.map((tab) => (
                <li key={tab.key}>
                  <button
                    onClick={() => handleTabClick(tab.key)}
                    className={`relative px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 group overflow-hidden ${
                      activeTab === tab.key
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105"
                        : "bg-white/10 text-white hover:bg-white/20 hover:transform hover:scale-105 backdrop-blur-sm border border-white/20"
                    }`}
                  >
                    {/* Animated background for active tab */}
                    {activeTab === tab.key && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-80 animate-pulse"></div>
                    )}

                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                    <span className="relative z-10 text-lg">{tab.icon}</span>
                    <span className="relative z-10 whitespace-nowrap">
                      {tab.label}
                    </span>

                    {/* Active indicator */}
                    {activeTab === tab.key && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-yellow-400 rounded-t-full"></div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 relative z-50"
            aria-label="Toggle mobile menu"
          >
            <div className="space-y-1.5">
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu - Fixed positioning */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel - Positioned on the right */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 backdrop-blur-md border-l border-white/20 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header of mobile menu */}
          <div className="p-4 border-b border-white/20 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <span className="text-2xl">🚀</span>
              <span className="text-yellow-400">Menu</span>
            </h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 text-white"
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

          {/* Navigation Items */}
          <nav className="p-4">
            <ul className="space-y-4">
              {tabs.map((tab, index) => (
                <li key={tab.key}>
                  <button
                    onClick={() => handleTabClick(tab.key)}
                    className={`w-full px-4 py-6 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 text-left group ${
                      activeTab === tab.key
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:scale-[1.02]"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen
                        ? "slideInRight 0.4s ease-out forwards"
                        : "none",
                    }}
                  >
                    <span className="text-xl flex-shrink-0">{tab.icon}</span>
                    <span className="flex-1 text-left font-medium">
                      {tab.label}
                    </span>
                    {activeTab === tab.key && (
                      <span className="text-yellow-400 flex-shrink-0">✓</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
