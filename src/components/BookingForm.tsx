
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Phone, Mail, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    guests: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted!",
      description: "Our admin will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      eventDate: "",
      guests: "",
      requirements: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book a Hall / Enquiry</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">📝 Reserve Your Venue</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Planning Your Event?</h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether it's a wedding, reception, or important meeting, submit your request below 
              and our admin will contact you to discuss your requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <Calendar className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Quick Response</p>
                  <p className="text-sm text-gray-600">We'll get back to you within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <Users className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Flexible Arrangements</p>
                  <p className="text-sm text-gray-600">Customized setup for your event needs</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <Phone className="w-8 h-8 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Direct Contact</p>
                  <p className="text-sm text-gray-600">Call us at [Phone Number]</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">📞 Or call us directly:</h4>
              <p className="text-2xl font-bold text-orange-600 mb-2">[Phone Number]</p>
              <p className="text-sm text-gray-600">Available Monday to Saturday, 9 AM - 6 PM</p>
            </div>
          </div>

          <Card className="p-8 shadow-xl animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Contact Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 12345 67890"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="eventType">Event Type *</Label>
                  <Select value={formData.eventType} onValueChange={(value) => handleInputChange("eventType", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="reception">Reception</SelectItem>
                      <SelectItem value="cultural">Cultural Program</SelectItem>
                      <SelectItem value="meeting">Meeting/Seminar</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="eventDate">Date of Event *</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange("eventDate", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="guests">Estimated Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  value={formData.guests}
                  onChange={(e) => handleInputChange("guests", e.target.value)}
                  placeholder="Number of expected guests"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="requirements">Special Requirements</Label>
                <Textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => handleInputChange("requirements", e.target.value)}
                  placeholder="Any special arrangements or requirements..."
                  rows={4}
                  className="mt-1"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Submit Booking Request
              </Button>

              <p className="text-sm text-gray-600 text-center">
                * Required fields. We respect your privacy and will not share your information.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
