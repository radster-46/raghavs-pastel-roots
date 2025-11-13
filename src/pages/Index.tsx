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
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12 fade-in-section">
            <div className="relative lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-96 overflow-hidden shadow-2xl animate-float" 
                   style={{
                     clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                     background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))"
                   }}>
                <img src={profilePhoto} alt="Raghav Bhutada" className="w-full h-full object-cover scale-110" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-display font-bold text-2xl shadow-xl transform rotate-6">
                RB
              </div>
            </div>
            
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-6xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Raghav Bhutada
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
                I'm Raghav, rooted in tradition and excited about new beginnings. I value family, culture, and meaningful connections. I love to travel and play badminton.
              </p>
            </div>
          </div>

          {/* Bio Card */}
          <Card className="fade-in-section p-8 md:p-10 bg-card/50 backdrop-blur-sm card-shadow border border-primary/10 rounded-3xl">
            <h2 className="text-3xl font-display font-bold mb-8 text-center text-primary">Personal Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {bioData.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-5 bg-gradient-to-br from-mint/10 to-sky-blue/10 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all hover:scale-105">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    <p className="font-semibold text-lg text-foreground">{item.value}</p>
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
      <section className="py-20 px-4 bg-gradient-to-b from-background via-mint/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-5xl font-display font-bold text-center mb-16 text-foreground fade-in-section">
            My Journey
          </h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-sky-blue hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`fade-in-section flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Year badge */}
                  <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <div className={`relative ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className={`inline-block px-8 py-3 rounded-2xl bg-gradient-to-br from-${item.color} to-${item.color}/50 font-display font-bold text-xl text-foreground shadow-lg border-2 border-white/50`}>
                        {item.year}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg z-10"></div>
                  
                  {/* Event card */}
                  <div className="lg:w-1/2 flex justify-center lg:justify-start">
                    <Card className={`p-6 bg-card/80 backdrop-blur-sm card-shadow border-2 border-primary/10 rounded-2xl hover:border-primary/30 transition-all hover:scale-105 max-w-md ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                      <p className="text-lg font-medium text-foreground leading-relaxed">{item.event}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family Details Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-lavender/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-display font-bold text-center mb-16 text-foreground fade-in-section">Family Heritage</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ancestry */}
            <Card className="fade-in-section p-8 bg-gradient-to-br from-coral/10 to-coral/5 border border-coral/20 rounded-3xl card-shadow">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary flex items-center gap-3">
                <span className="text-3xl">🏛️</span> Ancestry
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-foreground/80 min-w-[80px]">Sakha:</span>
                  <span className="text-foreground">Bhutada & Jaju</span>
                </div>
                <div className="bg-white/50 p-4 rounded-xl space-y-2">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">Grandparents</p>
                  <p className="text-foreground"><strong>Grandfather:</strong> Bhutada Hanumandas Harigovinddas</p>
                  <p className="text-muted-foreground text-sm">📞 7588237435</p>
                  <p className="text-foreground"><strong>Grandmother:</strong> Late. Pushpabai Bhutada</p>
                </div>
              </div>
            </Card>

            {/* Parents */}
            <Card className="fade-in-section p-8 bg-gradient-to-br from-mint/10 to-mint/5 border border-mint/20 rounded-3xl card-shadow">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary flex items-center gap-3">
                <span className="text-3xl">👨‍👩‍👦</span> Parents
              </h3>
              <div className="space-y-4">
                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-foreground font-semibold text-lg">Bhutada Murlidhar Hanumandas</p>
                  <p className="text-muted-foreground">Business, Nanded</p>
                  <p className="text-primary text-sm mt-1">📞 9763131349</p>
                </div>
                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-foreground font-semibold text-lg">Bhutada Sangita Murlidhar</p>
                  <p className="text-muted-foreground">Housewife</p>
                  <p className="text-primary text-sm mt-1">📞 9405377149</p>
                </div>
              </div>
            </Card>

            {/* Uncles */}
            <Card className="fade-in-section p-8 bg-gradient-to-br from-sky-blue/10 to-sky-blue/5 border border-sky-blue/20 rounded-3xl card-shadow">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary flex items-center gap-3">
                <span className="text-3xl">👔</span> Uncles
              </h3>
              <div className="space-y-3">
                <div className="bg-white/50 p-3 rounded-xl">
                  <p className="text-foreground font-medium">Bhutada Nandkishor Hanumandas</p>
                  <p className="text-sm text-muted-foreground">Business, Ahmedpur • 9423350974</p>
                </div>
                <div className="bg-white/50 p-3 rounded-xl">
                  <p className="text-foreground font-medium">Bhutada Ghanshyam Hanumandas</p>
                  <p className="text-sm text-muted-foreground">Business, Ahmedpur • 9850614918</p>
                </div>
                <div className="bg-white/50 p-3 rounded-xl">
                  <p className="text-foreground font-medium">Bhutada Radheshyam Hanumandas</p>
                  <p className="text-sm text-muted-foreground">Business, Nanded • 9422170658</p>
                </div>
              </div>
            </Card>

            {/* Siblings */}
            <Card className="fade-in-section p-8 bg-gradient-to-br from-lavender/10 to-lavender/5 border border-lavender/20 rounded-3xl card-shadow">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary flex items-center gap-3">
                <span className="text-3xl">🤝</span> Siblings
              </h3>
              <div className="space-y-3">
                <div className="bg-white/50 p-3 rounded-xl">
                  <p className="text-foreground font-medium">Bhutada MayurDhwaj Murlidhar</p>
                  <p className="text-sm text-muted-foreground">Business</p>
                </div>
                <div className="bg-white/50 p-3 rounded-xl">
                  <p className="text-foreground font-medium">Bhutada Krishna Nandkishor</p>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
                <div className="bg-white/50 p-3 rounded-xl">
                  <p className="text-foreground font-medium">Bhutada Kanhya Ghanshyam</p>
                  <p className="text-sm text-muted-foreground">Business</p>
                </div>
                <div className="bg-white/50 p-3 rounded-xl">
                  <p className="text-foreground font-medium">Bhutada Pavan Ghanshyam</p>
                  <p className="text-sm text-muted-foreground">B.Com</p>
                </div>
              </div>
            </Card>

            {/* Nanihal */}
            <Card className="fade-in-section p-8 bg-gradient-to-br from-soft-yellow/10 to-soft-yellow/5 border border-soft-yellow/20 rounded-3xl card-shadow">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary flex items-center gap-3">
                <span className="text-3xl">🏠</span> Maternal Family
              </h3>
              <div className="space-y-4">
                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Nanihal</p>
                  <p className="text-foreground font-semibold">Shri. Ratanlalji Shrinivasji Jaju</p>
                  <p className="text-muted-foreground text-sm">Pune • 9702057777</p>
                </div>
                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Maternal Uncle</p>
                  <p className="text-foreground">Shri. Shrinivas Ratanlalji Jaju</p>
                </div>
                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Maternal Aunts</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-foreground">Sau. Sunanda Dhananjayji Lahoti, Shambhaji Nagar</p>
                    <p className="text-foreground">Sau. Anuradha JayPrakashji Sarda, Bangalore</p>
                    <p className="text-foreground">Sau. Archana Murlimohanji Rathi, Nanded</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Family Firms */}
            <Card className="fade-in-section p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl card-shadow">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary flex items-center gap-3">
                <span className="text-3xl">🏢</span> Family Firms
              </h3>
              <div className="space-y-3">
                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-foreground font-semibold text-lg">CONVOLT SYSTEMS</p>
                  <p className="text-sm text-muted-foreground">Shivajinagar, Nanded</p>
                </div>
                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-foreground font-semibold text-lg">HP World</p>
                  <p className="text-sm text-muted-foreground">Parbhani</p>
                </div>
                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-foreground font-semibold text-lg">Mayur General Stores</p>
                  <p className="text-sm text-muted-foreground">Ahmedpur</p>
                </div>
                <div className="bg-white/50 p-4 rounded-xl">
                  <p className="text-foreground font-semibold text-lg">Pushpak Agencies</p>
                  <p className="text-sm text-muted-foreground">Ahmedpur</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Kundli Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-lavender/10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-display font-bold text-center mb-16 text-foreground fade-in-section">Kundli</h2>
          
          <Card className="fade-in-section p-8 md:p-12 bg-card/50 backdrop-blur-sm border-2 border-primary/10 rounded-3xl card-shadow hover:border-primary/20 transition-all">
            <div className="max-w-lg mx-auto">
              <img 
                src={kundliChart} 
                alt="Kundli Chart" 
                className="w-full h-auto rounded-2xl shadow-xl ring-4 ring-primary/10"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 mb-8">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-display font-bold text-center mb-12 text-foreground fade-in-section">Get in Touch</h2>
          
          <Card className="fade-in-section p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm border-2 border-primary/10 rounded-3xl card-shadow">
            <div className="space-y-5 mb-8">
              <a href="tel:+919876543210" className="flex items-center gap-4 p-6 bg-gradient-to-br from-mint/20 to-mint/10 rounded-2xl hover:scale-105 transition-all border border-mint/20 hover:border-mint/40">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Phone</p>
                  <p className="font-semibold text-xl text-foreground">+91 98765 43210</p>
                </div>
              </a>

              <a href="mailto:raghav.bhutada@example.com" className="flex items-center gap-4 p-6 bg-gradient-to-br from-sky-blue/20 to-sky-blue/10 rounded-2xl hover:scale-105 transition-all border border-sky-blue/20 hover:border-sky-blue/40">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Email</p>
                  <p className="font-semibold text-xl text-foreground">raghav.bhutada@example.com</p>
                </div>
              </a>
            </div>

            <div className="flex gap-5 justify-center mb-8">
              <a href="#" className="p-4 bg-gradient-to-br from-lavender/20 to-lavender/10 rounded-xl hover:scale-110 transition-all border border-lavender/20 hover:border-lavender/40">
                <Linkedin className="w-7 h-7 text-primary" />
              </a>
              <a href="#" className="p-4 bg-gradient-to-br from-coral/20 to-coral/10 rounded-xl hover:scale-110 transition-all border border-coral/20 hover:border-coral/40">
                <Instagram className="w-7 h-7 text-primary" />
              </a>
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-2xl py-7 text-xl font-display font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Tap to Contact
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
