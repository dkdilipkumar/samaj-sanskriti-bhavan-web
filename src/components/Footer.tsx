
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "About Us", id: "about" },
    { name: "Facilities", id: "facilities" },
    { name: "Events", id: "events" },
    { name: "Membership", id: "membership" },
    { name: "Contact", id: "contact" }
  ];

  const services = [
    "Wedding Venues",
    "Cultural Programs",
    "Meeting Halls",
    "Event Management",
    "Community Services"
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🏛️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Samyukt Gujarati Samaj</h3>
                <p className="text-orange-300 text-sm">Karnataka</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Preserving Gujarati heritage and traditions while fostering community bonds 
              in the heart of Bengaluru since inception.
            </p>
            
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🕉️</span>
              <p className="text-orange-300 text-sm italic">સર્વે ભવન્તુ સુખિનઃ</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-gray-300 hover:text-orange-400 justify-start"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Opp. Cantonment Railway Station,</p>
                  <p>Vasanth Nagar, Bengaluru – 560001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">[Phone Number]</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">[Email Address]</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-4">
              <p className="text-white text-sm font-semibold mb-2">📞 Quick Contact</p>
              <p className="text-white text-xs">Available Mon-Sat, 9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2024 Samyukt Gujarati Samaj Karnataka. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Preserving traditions, building communities since inception.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-2 mb-2">
              <span className="text-gray-400 text-sm">Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-gray-400 text-sm">for our community</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-end space-x-4 text-sm">
              <button className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</button>
              <span className="text-gray-600">|</span>
              <button className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>

        {/* Cultural Elements */}
        <div className="mt-12 text-center">
          <div className="flex justify-center items-center space-x-6 text-3xl mb-4">
            <span>🪔</span>
            <span>🎭</span>
            <span>🏛️</span>
            <span>🕉️</span>
            <span>🌺</span>
          </div>
          <p className="text-orange-300 text-sm italic">
            "જ્યાં એકતા છે, ત્યાં શક્તિ છે" - Where there is unity, there is strength
          </p>
        </div>
      </div>
    </footer>
  );
};
