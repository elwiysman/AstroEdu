import React from "react";
import FactSection from "../components/FactSection";

interface FaktaPageProps {
  fact: string;
  onRefresh: () => void;
}

const FaktaPage: React.FC<FaktaPageProps> = ({ fact, onRefresh }) => {
  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
        Fakta Unik Tata Surya
      </h2>
      <FactSection fact={fact} onRefresh={onRefresh} />
    </div>
  );
};

export default FaktaPage;
