
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-orange-100 via-amber-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-4xl">🏠</span>
              <span className="text-orange-600 font-semibold">Welcome to</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Samyukt Gujarati Samaj
              <span className="block text-orange-600">Karnataka</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Located in the heart of Bengaluru, we are a vibrant cultural and community center 
              dedicated to preserving the values and traditions of the Gujarati community in Karnataka.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Prime Location</p>
                  <p className="text-sm text-gray-600">Opp. Cantonment Station</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Calendar className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Affordable Venue</p>
                  <p className="text-sm text-gray-600">From ₹500 onwards</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Strong Community</p>
                  <p className="text-sm text-gray-600">United Gujaratis</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection("facilities")}
              >
                Explore Facilities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-orange-300 text-orange-600 hover:bg-orange-50"
                onClick={() => scrollToSection("booking")}
              >
                Book a Hall
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-orange-300 text-orange-600 hover:bg-orange-50"
                onClick={() => scrollToSection("events")}
              >
                Upcoming Events
              </Button>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Sardar Patel Bhavan</p>
                  <p className="text-sm opacity-90">Traditional Gujarati Architecture</p>
                </div>
                <div className="flex items-center justify-center h-full text-6xl">
                  🏛️
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🎭</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
