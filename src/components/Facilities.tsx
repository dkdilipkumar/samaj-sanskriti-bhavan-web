
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Car, Mic, Utensils, Camera, Calendar } from "lucide-react";

export const Facilities = () => {
  const amenities = [
    { icon: Users, text: "Seating for up to 300 guests" },
    { icon: Utensils, text: "Spacious dining area" },
    { icon: Mic, text: "Basic AV setup" },
    { icon: Car, text: "Parking nearby" },
  ];

  const eventTypes = [
    { emoji: "👰", title: "Weddings", desc: "Traditional Gujarati weddings" },
    { emoji: "🎭", title: "Cultural Programs", desc: "Festivals and celebrations" },
    { emoji: "🧑‍💼", title: "Meetings & Seminars", desc: "Business and community events" },
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Facilities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">🏢 Sardar Patel Bhavan – Venue for All Occasions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect Venue for Your Events</h3>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our venue offers well-equipped, spacious halls suitable for a variety of occasions, 
              from intimate gatherings to grand celebrations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {eventTypes.map((type, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-3">{type.emoji}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{type.title}</h4>
                  <p className="text-sm text-gray-600">{type.desc}</p>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Amenities</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <amenity.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-gray-700">{amenity.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl h-96 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="flex items-center justify-center h-full text-6xl">
                  🏛️
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Main Hall</p>
                  <p className="text-sm opacity-90">Spacious & Well-Equipped</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-xl h-32 flex items-center justify-center text-3xl">
                  🍽️
                </div>
                <div className="bg-gradient-to-br from-red-200 to-pink-200 rounded-xl h-32 flex items-center justify-center text-3xl">
                  🎤
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Affordable Pricing</h3>
            <div className="text-4xl font-bold text-orange-600 mb-2">Starting from ₹500</div>
            <p className="text-gray-600">Per event (conditions apply)</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
              <Camera className="w-5 h-5 mr-2" />
              View Photo Gallery
            </Button>
            <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
              <Calendar className="w-5 h-5 mr-2" />
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
