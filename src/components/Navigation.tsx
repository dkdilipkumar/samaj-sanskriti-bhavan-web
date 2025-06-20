
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Users, Calendar, MapPin, Phone } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: "Home", icon: Home, id: "hero" },
    { name: "About", icon: Users, id: "about" },
    { name: "Facilities", icon: MapPin, id: "facilities" },
    { name: "Events", icon: Calendar, id: "events" },
    { name: "Membership", icon: Users, id: "membership" },
    { name: "Contact", icon: Phone, id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-orange-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🏛️</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Samyukt Gujarati Samaj</h1>
              <p className="text-xs text-orange-600">Karnataka</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                onClick={() => scrollToSection(item.id)}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Button>
            ))}
            <Button 
              className="ml-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
              onClick={() => scrollToSection("booking")}
            >
              Book Hall
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-orange-100 bg-white animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  onClick={() => scrollToSection(item.id)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Button>
              ))}
              <Button 
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white mt-2"
                onClick={() => scrollToSection("booking")}
              >
                Book Hall
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
