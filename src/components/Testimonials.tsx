
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, MessageSquare } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Patel",
      location: "JustDial Reviewer",
      rating: 5,
      text: "Very nice and clean hall. Convenient location near railway station. Highly recommended for Gujarati weddings.",
      avatar: "👨‍💼"
    },
    {
      name: "Priya Shah",
      location: "Local Guest",
      rating: 5,
      text: "Affordable and traditional space for any community function. The staff is very helpful and accommodating.",
      avatar: "👩‍💼"
    },
    {
      name: "Amit Desai",
      location: "Community Member",
      rating: 5,
      text: "Perfect venue for our family wedding. Great facilities and excellent service. Will definitely recommend to others.",
      avatar: "👨‍🎓"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Reviews & Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">💬 What Our Visitors Say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow animate-fade-in relative">
              <div className="absolute top-4 right-4 text-orange-300">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We value your feedback! Help others discover our venue by sharing your experience 
            with Samyukt Gujarati Samaj Karnataka.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl mb-3">⭐</div>
              <h4 className="font-bold text-gray-900 mb-2">Rate Us</h4>
              <p className="text-sm text-gray-600">Share your rating on Google or JustDial</p>
            </div>
            
            <div className="p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl mb-3">📝</div>
              <h4 className="font-bold text-gray-900 mb-2">Write Review</h4>
              <p className="text-sm text-gray-600">Tell others about your experience</p>
            </div>
            
            <div className="p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl mb-3">📸</div>
              <h4 className="font-bold text-gray-900 mb-2">Share Photos</h4>
              <p className="text-sm text-gray-600">Upload pictures from your event</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
            <MessageSquare className="w-5 h-5 mr-2" />
            Submit Testimonial
          </Button>
        </div>
      </div>
    </section>
  );
};
