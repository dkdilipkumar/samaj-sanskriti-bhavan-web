
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Facilities } from "@/components/Facilities";
import { Events } from "@/components/Events";
import { Membership } from "@/components/Membership";
import { BookingForm } from "@/components/BookingForm";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <Navigation />
      <Hero />
      <About />
      <Facilities />
      <Events />
      <Membership />
      <BookingForm />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
