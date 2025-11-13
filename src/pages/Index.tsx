import { useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, Instagram, MapPin, Calendar, Droplet, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ganeshjiLogo from "@/assets/ganeshji-logo.png";
import profilePhoto from "@/assets/profile-photo.jpg";
import kundliChart from "@/assets/kundli-chart.png";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const bioData = [
    { icon: Calendar, label: "Birth Date", value: "05 Oct 2001" },
    { icon: MapPin, label: "Birth Place", value: "Nanded" },
    { icon: Ruler, label: "Height", value: "5 ft 6 in" },
    { icon: Droplet, label: "Blood Group", value: "O Negative" },
  ];

  const timeline = [
    { year: "2001", event: "Born in Nanded", color: "coral" },
    { year: "2017", event: "Completed High School", color: "mint" },
    { year: "2019-2023", event: "Graduated from PICT College (Electronics & Telecommunication)", color: "sky-blue" },
    { year: "2023-Present", event: "Working as Full Stack Developer at BNY", color: "lavender" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <img src={ganeshjiLogo} alt="Ganeshji" className="h-10 w-10 object-contain" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8 fade-in-section">
            <div className="relative inline-block mb-6">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-lg animate-float">
                <img src={profilePhoto} alt="Raghav Bhutada" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-coral rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                RB
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              Raghav Bhutada
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed">
              I'm Raghav, rooted in tradition and excited about new beginnings. I value family, culture, and meaningful connections. I love to travel and play badminton.
            </p>
          </div>

          {/* Bio Card */}
          <Card className="fade-in-section p-6 md:p-8 bg-card card-shadow border-0 rounded-3xl">
            <h2 className="text-2xl font-semibold mb-6 text-center text-primary">Personal Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {bioData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-mint/20 rounded-2xl">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-lavender/20 rounded-2xl">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Temporary Address</p>
                    <p className="font-medium text-foreground">Shri Krishna Society, Vadban Rd, Mundhwa, Pune</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-sky-blue/20 rounded-2xl">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Permanent Address</p>
                    <p className="font-medium text-foreground">90/A, Ganesh Nagar, Nanded</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-mint/20 to-sky-blue/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground fade-in-section">My Journey</h2>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="fade-in-section flex items-start gap-4 md:gap-6" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`flex-shrink-0 w-24 md:w-32 text-right`}>
                  <span className={`inline-block px-4 py-2 rounded-full bg-${item.color} font-bold text-foreground`}>
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 pb-8 border-l-4 border-primary/30 pl-6 relative">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                  <Card className="p-4 md:p-6 bg-card card-shadow border-0 rounded-2xl">
                    <p className="text-base md:text-lg font-medium text-foreground">{item.event}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Details Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground fade-in-section">Family</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="fade-in-section p-6 bg-coral/10 border-0 rounded-3xl text-center card-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👨</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Father</h3>
              <p className="text-muted-foreground">Mr. [Name]</p>
              <p className="text-sm text-muted-foreground">Businessman</p>
            </Card>

            <Card className="fade-in-section p-6 bg-mint/10 border-0 rounded-3xl text-center card-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👩</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Mother</h3>
              <p className="text-muted-foreground">Mrs. [Name]</p>
              <p className="text-sm text-muted-foreground">Homemaker</p>
            </Card>

            <Card className="fade-in-section p-6 bg-lavender/10 border-0 rounded-3xl text-center card-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Sibling</h3>
              <p className="text-muted-foreground">[Name]</p>
              <p className="text-sm text-muted-foreground">Student</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Kundli Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-lavender/20 to-soft-yellow/20">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground fade-in-section">Kundli</h2>
          
          <Card className="fade-in-section p-6 md:p-8 bg-card border-0 rounded-3xl card-shadow">
            <div className="max-w-md mx-auto">
              <img 
                src={kundliChart} 
                alt="Kundli Chart" 
                className="w-full h-auto rounded-2xl shadow-md"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 mb-8">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-foreground fade-in-section">Get in Touch</h2>
          
          <Card className="fade-in-section p-6 md:p-8 bg-card border-0 rounded-3xl card-shadow">
            <div className="space-y-4 mb-6">
              <a href="tel:+919876543210" className="flex items-center gap-3 p-4 bg-mint/20 rounded-2xl hover:bg-mint/30 transition-colors">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground">+91 98765 43210</p>
                </div>
              </a>

              <a href="mailto:raghav.bhutada@example.com" className="flex items-center gap-3 p-4 bg-sky-blue/20 rounded-2xl hover:bg-sky-blue/30 transition-colors">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">raghav.bhutada@example.com</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 justify-center mb-6">
              <a href="#" className="p-3 bg-lavender/20 rounded-xl hover:bg-lavender/30 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a href="#" className="p-3 bg-coral/20 rounded-xl hover:bg-coral/30 transition-colors">
                <Instagram className="w-6 h-6 text-primary" />
              </a>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl py-6 text-lg font-semibold shadow-lg">
              Tap to Contact
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
