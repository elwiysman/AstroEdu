import React from "react";
import SimulationChart from "../components/SimulationChart";
import { simulationOption } from "../data/echartsConfig";

const SimulasiPage = () => {
  return (
    <div className="min-h-[800px]">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
        Simulasi Orbit Planet
      </h2>
      <div className="bg-black rounded-lg overflow-hidden shadow-2xl mb-8">
        <SimulationChart
          containerId="orbit-simulation"
          data={simulationOption}
        />
      </div>
      <div className="max-w-3xl mx-auto bg-blue-900 bg-opacity-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Tentang Simulasi</h3>
        <p className="mb-4">
          Simulasi ini menunjukkan posisi relatif planet-planet di tata surya
          kita. Perhatikan bahwa skala ukuran dan jarak tidak proporsional untuk
          memudahkan visualisasi.
        </p>
        <p>
          Dalam kenyataannya, jarak antar planet jauh lebih besar dibandingkan
          dengan ukuran planet itu sendiri. Jika digambarkan dengan skala yang
          benar, planet-planet akan terlihat seperti titik-titik kecil yang
          sangat berjauhan.
        </p>
      </div>
    </div>
  );
};

export default SimulasiPage;
