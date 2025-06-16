// pages/Beranda.tsx
import React from "react";

const Beranda = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[85vh] px-6 py-16 bg-gradient-to-br from-black via-indigo-900 to-black">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
            Selamat Datang di AstroEdu
          </h1>
          <p className="text-lg mb-4">
            Di AstroEdu, mari pelajari keajaiban planet, satelit, dan benda
            langit lainnya dalam tata surya kita. Mari kita jelajahi ruang
            angkasa dengan cara yang menyenangkan dan interaktif.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => setActiveTab("planet")}
              className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold transition"
            >
              Lihat Planet
            </button>
            <button
              onClick={() => setActiveTab("fakta")}
              className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold transition"
            >
              Fakta Unik
            </button>
            <button
              onClick={() => setActiveTab("kuis")}
              className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold transition"
            >
              Coba Kuis
            </button>
          </div>
        </div>
        <div>
          <img
            src="tasu.jpg"
            alt="Tata Surya"
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Beranda;
