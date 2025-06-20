
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe, Clock, Train } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "📍 Address",
      details: [
        "Samyukt Gujarati Samaj Karnataka",
        "Opp. Cantonment Railway Station,",
        "Vasanth Nagar, Bengaluru – 560001"
      ],
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Phone,
      title: "📞 Phone",
      details: [
        "[Phone Number]",
        "Available Mon-Sat",
        "9 AM - 6 PM"
      ],
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Mail,
      title: "📧 Email",
      details: [
        "[Email Address]",
        "For inquiries and bookings",
        "Quick response guaranteed"
      ],
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: Globe,
      title: "🌐 Website",
      details: [
        "samyuktgujaratisamaj.com",
        "Complete information",
        "Online booking available"
      ],
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Get in touch with us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow animate-fade-in">
              <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className={`text-sm ${idx === 0 ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                    {detail}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Location</h3>
            
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Train className="w-6 h-6 text-orange-600" />
                <h4 className="text-lg font-bold text-gray-900">Convenient Location</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Located directly opposite Cantonment Railway Station in Vasanth Nagar, 
                our venue is easily accessible by public transport and has ample parking nearby.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-white border border-orange-100 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Office Hours</p>
                  <p className="text-gray-600">Monday to Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: By appointment only</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white border border-orange-100 rounded-lg">
                <MapPin className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Landmarks</p>
                  <p className="text-gray-600">• Opposite Cantonment Railway Station</p>
                  <p className="text-gray-600">• Near Vasanth Nagar Circle</p>
                  <p className="text-gray-600">• 5 minutes from MG Road Metro</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <Card className="p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Contact</h3>
              
              <div className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">For Immediate Assistance</h4>
                  <p className="text-2xl font-bold text-orange-600 mb-2">[Phone Number]</p>
                  <p className="text-sm text-gray-600">Available during office hours</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    📍 View on Maps
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    📨 Send Enquiry
                  </Button>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-6 text-center">
                  <h4 className="font-bold text-gray-900 mb-3">🚗 Parking Available</h4>
                  <p className="text-sm text-gray-600">
                    Ample parking space available nearby. Street parking and paid parking options 
                    within walking distance.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Find Us Easily</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Our prime location opposite Cantonment Railway Station makes us easily accessible 
            from all parts of Bengaluru. Whether you're coming by metro, bus, or car, 
            you'll find us conveniently located in the heart of the city.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-xl">
              <div className="text-2xl mb-2">🚇</div>
              <p className="font-semibold text-gray-900">Metro</p>
              <p className="text-sm text-gray-600">5 min from MG Road</p>
            </div>
            
            <div className="p-4 bg-white rounded-xl">
              <div className="text-2xl mb-2">🚌</div>
              <p className="font-semibold text-gray-900">Bus</p>
              <p className="text-sm text-gray-600">Multiple bus stops nearby</p>
            </div>
            
            <div className="p-4 bg-white rounded-xl">
              <div className="text-2xl mb-2">🚗</div>
              <p className="font-semibold text-gray-900">Car</p>
              <p className="text-sm text-gray-600">Parking available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
