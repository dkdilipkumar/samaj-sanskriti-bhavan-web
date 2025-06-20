
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Camera, Heart, Stethoscope } from "lucide-react";

export const Events = () => {
  const events = [
    {
      emoji: "🌟",
      title: "Navratri Utsav",
      desc: "Nine nights of dance, music and cultural celebration",
      color: "from-purple-400 to-pink-500"
    },
    {
      emoji: "🪔",
      title: "Diwali Milan",
      desc: "Festival of lights community gathering",
      color: "from-yellow-400 to-orange-500"
    },
    {
      emoji: "💒",
      title: "Samuh Lagan",
      desc: "Community wedding ceremonies",
      color: "from-red-400 to-pink-500"
    },
    {
      emoji: "🩸",
      title: "Health Camps",
      desc: "Blood donation drives and health checkups",
      color: "from-green-400 to-blue-500"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Events & Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">🌟 Celebrate With Us</p>
        </div>

        <div className="mb-16 animate-fade-in">
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            Throughout the year, the Samaj organizes vibrant events that reflect our culture 
            and community spirit. Join us in celebrating the rich traditions of Gujarat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-32 bg-gradient-to-br ${event.color} flex items-center justify-center text-4xl`}>
                  {event.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-8 md:p-12 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Annual Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Navratri Utsav</p>
                    <p className="text-sm text-gray-600">October 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🪔</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Diwali Milan</p>
                    <p className="text-sm text-gray-600">November 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💒</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Samuh Lagan</p>
                    <p className="text-sm text-gray-600">Throughout the year</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🩸</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Health Camps</p>
                    <p className="text-sm text-gray-600">Quarterly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-xl h-32 flex items-center justify-center text-4xl">
                  🎭
                </div>
                <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl h-32 flex items-center justify-center text-4xl">
                  🕺
                </div>
                <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl h-32 flex items-center justify-center text-4xl">
                  🎨
                </div>
                <div className="bg-gradient-to-br from-green-200 to-blue-200 rounded-xl h-32 flex items-center justify-center text-4xl">
                  🎵
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                  <Camera className="w-5 h-5 mr-2" />
                  📷 View Gallery
                </Button>
                <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                  <Calendar className="w-5 h-5 mr-2" />
                  📅 Event Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
