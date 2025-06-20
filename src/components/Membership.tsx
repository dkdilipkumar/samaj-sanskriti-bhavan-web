
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Users, Calendar, Vote, Percent, FileText } from "lucide-react";

export const Membership = () => {
  const benefits = [
    { icon: Calendar, text: "Priority Hall Bookings" },
    { icon: Users, text: "Exclusive Event Invitations" },
    { icon: Vote, text: "Voting Rights (in AGM)" },
    { icon: Percent, text: "Discounts for services" }
  ];

  const membershipTypes = [
    {
      title: "Annual Membership",
      price: "₹1,000",
      period: "per year",
      features: ["All basic benefits", "Event invitations", "Hall booking priority", "Community newsletter"],
      color: "from-orange-400 to-red-500",
      popular: false
    },
    {
      title: "Lifetime Membership",
      price: "₹15,000",
      period: "one time",
      features: ["All annual benefits", "Lifetime validity", "Special recognition", "Legacy membership", "Family benefits"],
      color: "from-amber-400 to-orange-500",
      popular: true
    }
  ];

  return (
    <section id="membership" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Membership</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">🤝 Join Our Community</p>
        </div>

        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Become a member of Samyukt Gujarati Samaj Karnataka and connect with like-minded 
              individuals who value tradition, unity, and service.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Membership Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {membershipTypes.map((type, index) => (
              <Card key={index} className={`relative overflow-hidden ${type.popular ? 'ring-2 ring-orange-500 scale-105' : ''} hover:shadow-xl transition-all`}>
                {type.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 text-sm font-semibold">
                    Popular
                  </div>
                )}
                
                <div className={`h-20 bg-gradient-to-r ${type.color}`}></div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-orange-600">{type.price}</span>
                    <span className="text-gray-600 ml-2">{type.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${type.popular ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white' : 'border-orange-300 text-orange-600 hover:bg-orange-50'}`}
                    variant={type.popular ? 'default' : 'outline'}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Apply for {type.title}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Family?</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Be part of a community that celebrates tradition, supports each other, 
            and works together for the betterment of our culture and society.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
            <FileText className="w-5 h-5 mr-2" />
            📝 Apply for Membership
          </Button>
        </div>
      </div>
    </section>
  );
};
