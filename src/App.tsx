import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalDetail from "./components/ModalDetail";
import Beranda from "./pages/Beranda";
import PlanetPage from "./pages/PlanetPage";
import SatelitPage from "./pages/SatelitPage";
import ObjectPage from "./pages/ObjectPage";
import FaktaPage from "./pages/FaktaPage";
import KuisPage from "./pages/KuisPage";
import SimulasiPage from "./pages/SimulasiPage";
import { randomFacts } from "./data/facts";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [activeTab, setActiveTab] = useState("beranda");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [randomFact, setRandomFact] = useState(getRandomFact());

  function getRandomFact() {
    return randomFacts[Math.floor(Math.random() * randomFacts.length)];
  }

  const openModal = (item: any) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const renderTab = () => {
    switch (activeTab) {
      case "planet":
        return <PlanetPage openModal={openModal} />;
      case "satelit":
        return <SatelitPage openModal={openModal} />;
      case "benda-lain":
        return <ObjectPage openModal={openModal} />;
      case "fakta":
        return (
          <FaktaPage
            fact={randomFact}
            onRefresh={() => setRandomFact(getRandomFact())}
          />
        );
      case "kuis":
        return <KuisPage />;
      case "simulasi":
        return <SimulasiPage />;
      default:
        return <Beranda setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div
      translate="no"
      className="flex flex-col min-h-screen bg-gradient-to-br from-black via-indigo-900 to-black text-white"
    >
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      {selectedItem && <ModalDetail item={selectedItem} onClose={closeModal} />}
      <Footer />
    </div>
  );
};

export default App;
