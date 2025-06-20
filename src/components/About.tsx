
import { Card } from "@/components/ui/card";
import { Leaf, Building, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">🌿 Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To preserve, promote, and celebrate the cultural heritage of the Gujarati community 
              while offering a welcoming space for social and religious activities in Bengaluru.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Our History</h3>
            <p className="text-gray-600 leading-relaxed">
              A cornerstone for community bonding since inception, supporting social causes and 
              celebrating festivals. Centrally located near Cantonment Station for easy access.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">🧑‍💼 Our Team</h3>
            <div className="text-gray-600 space-y-2">
              <p><strong>President:</strong> [Name]</p>
              <p><strong>Secretary:</strong> [Name]</p>
              <p><strong>Treasurer:</strong> [Name]</p>
            </div>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-8 md:p-12 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Preserving Heritage, Building Community
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our Samaj has been a beacon of Gujarati culture in Karnataka, bringing together 
                families and individuals who share our rich traditions, values, and commitment 
                to community service.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🕉️</div>
              <p className="text-lg text-gray-700 italic">
                "સર્વે ભવન્તુ સુખિનઃ, સર્વે સન્તુ નિરામયાઃ"
              </p>
              <p className="text-sm text-gray-600 mt-2">May all be happy, may all be healthy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
