import React from "react";
import { Instagram, MessageCircle, Github, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/mnlwysm",
      color: "hover:text-pink-400",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/62895320361892",
      color: "hover:text-green-400",
    },
    {
      name: "Gmail",
      icon: Mail,
      url: "mailto:elwiysman@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/elwiysman",
      color: "hover:text-gray-300",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 text-white py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold mb-1">
            <span className="text-yellow-400">Astro</span>
            <span className="text-white"> Edu</span>
          </h2>
          <p className="text-gray-300 text-sm">
            Menjelajahi keajaiban tata surya kita
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-blue-800 bg-opacity-50 hover:bg-blue-700 hover:bg-opacity-70 transition-all duration-300 hover:scale-105 ${social.color}`}
                aria-label={social.name}
              >
                <IconComponent size={18} />
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <div className="text-xs text-gray-400">
            © {currentYear} Tata Surya. Hak Cipta Dilindungi.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
