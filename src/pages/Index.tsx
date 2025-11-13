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
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12 fade-in-section">
            <div className="relative lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-96 overflow-hidden shadow-float animate-float" 
                   style={{
                     clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                     background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))"
                   }}>
                <img src={profilePhoto} alt="Raghav Bhutada" className="w-full h-full object-cover scale-110" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-float transform rotate-6">
                RB
              </div>
            </div>
            
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Raghav Bhutada
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I'm Raghav, rooted in tradition and excited about new beginnings. I value family, culture, and meaningful connections. I love to travel and play badminton.
              </p>
            </div>
          </div>

          {/* Bio Card */}
          <Card className="fade-in-section p-6 md:p-8 bg-card border border-border shadow-soft rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Personal Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {bioData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-border hover:border-primary/40 transition-all">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Temporary Address</p>
                    <p className="font-medium text-sm text-foreground">Shri Krishna Society, Vadban Rd, Mundhwa, Pune</p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-muted/50 rounded-lg">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Permanent Address</p>
                    <p className="font-medium text-sm text-foreground">90/A, Ganesh Nagar, Nanded</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground fade-in-section">
            My Journey
          </h2>
          <p className="text-center text-muted-foreground mb-16 fade-in-section">WOW...!!! WHAT A JOURNEY SO FAR...!!!</p>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div key={index} className={`fade-in-section relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Content side */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <Card className="inline-block p-4 bg-card border border-border shadow-card hover:shadow-soft transition-all">
                      <h3 className="font-semibold text-foreground mb-1">{item.event}</h3>
                      <p className="text-sm text-muted-foreground">{item.year}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10"></div>
                  
                  {/* Date side */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                    <div className="inline-block">
                      <div className="text-sm font-medium text-muted-foreground">{item.year.includes('-') ? item.year.split('-')[0] : item.year}</div>
                      <div className="text-2xl font-bold text-foreground">{item.year.includes('-') ? item.year.split('-')[0].slice(-2) : item.year.slice(-2)}</div>
                      <div className="text-xs text-muted-foreground">{item.year.includes('-') ? item.year.split('-')[1] : new Date().getFullYear()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family Details Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground fade-in-section">Family Heritage</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Ancestry */}
            <Card className="fade-in-section p-5 bg-card border border-border shadow-card hover:shadow-soft transition-all">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span className="text-xl">🏛️</span> Ancestry
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-foreground">Sakha:</span>
                  <span className="text-muted-foreground ml-1">Bhutada & Jaju</span>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg space-y-1">
                  <p className="text-xs font-semibold text-primary uppercase">Grandparents</p>
                  <p className="text-foreground"><strong>Grandfather:</strong> Bhutada Hanumandas Harigovinddas</p>
                  <p className="text-muted-foreground text-xs">📞 7588237435</p>
                  <p className="text-foreground"><strong>Grandmother:</strong> Late. Pushpabai Bhutada</p>
                </div>
              </div>
            </Card>

            {/* Parents */}
            <Card className="fade-in-section p-5 bg-card border border-border shadow-card hover:shadow-soft transition-all">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span className="text-xl">👨‍👩‍👦</span> Parents
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-foreground font-semibold">Bhutada Murlidhar Hanumandas</p>
                  <p className="text-muted-foreground text-xs">Business, Nanded</p>
                  <p className="text-primary text-xs mt-1">📞 9763131349</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-foreground font-semibold">Bhutada Sangita Murlidhar</p>
                  <p className="text-muted-foreground text-xs">Housewife</p>
                  <p className="text-primary text-xs mt-1">📞 9405377149</p>
                </div>
              </div>
            </Card>

            {/* Uncles */}
            <Card className="fade-in-section p-5 bg-card border border-border shadow-card hover:shadow-soft transition-all">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span className="text-xl">👔</span> Uncles
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-foreground font-medium">Bhutada Nandkishor Hanumandas</p>
                  <p className="text-xs text-muted-foreground">Business, Ahmedpur • 9423350974</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-foreground font-medium">Bhutada Ghanshyam Hanumandas</p>
                  <p className="text-xs text-muted-foreground">Business, Ahmedpur • 9850614918</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-foreground font-medium">Bhutada Radheshyam Hanumandas</p>
                  <p className="text-xs text-muted-foreground">Business, Nanded • 9422170658</p>
                </div>
              </div>
            </Card>

            {/* Siblings */}
            <Card className="fade-in-section p-5 bg-card border border-border shadow-card hover:shadow-soft transition-all">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span className="text-xl">🤝</span> Siblings
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-foreground font-medium">Bhutada MayurDhwaj Murlidhar</p>
                  <p className="text-xs text-muted-foreground">Business</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-foreground font-medium">Bhutada Krishna Nandkishor</p>
                  <p className="text-xs text-muted-foreground">Software Engineer</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-foreground font-medium">Bhutada Kanhya Ghanshyam</p>
                  <p className="text-xs text-muted-foreground">Business</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-foreground font-medium">Bhutada Pavan Ghanshyam</p>
                  <p className="text-xs text-muted-foreground">B.Com</p>
                </div>
              </div>
            </Card>

            {/* Nanihal */}
            <Card className="fade-in-section p-5 bg-card border border-border shadow-card hover:shadow-soft transition-all">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span className="text-xl">🏠</span> Maternal Family
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-xs font-semibold text-primary uppercase mb-1">Nanihal</p>
                  <p className="text-foreground font-semibold">Shri. Ratanlalji Shrinivasji Jaju</p>
                  <p className="text-muted-foreground text-xs">Pune • 9702057777</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-xs font-semibold text-primary uppercase mb-1">Maternal Uncle</p>
                  <p className="text-foreground text-xs">Shri. Shrinivas Ratanlalji Jaju</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-xs font-semibold text-primary uppercase mb-1">Maternal Aunts</p>
                  <div className="space-y-1 text-xs text-foreground">
                    <p>Sau. Sunanda Dhananjayji Lahoti, Shambhaji Nagar</p>
                    <p>Sau. Anuradha JayPrakashji Sarda, Bangalore</p>
                    <p>Sau. Archana Murlimohanji Rathi, Nanded</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Family Firms */}
            <Card className="fade-in-section p-5 bg-card border border-border shadow-card hover:shadow-soft transition-all">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span className="text-xl">🏢</span> Family Firms
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-foreground font-semibold">CONVOLT SYSTEMS</p>
                  <p className="text-xs text-muted-foreground">Shivajinagar, Nanded</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-foreground font-semibold">HP World</p>
                  <p className="text-xs text-muted-foreground">Parbhani</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-foreground font-semibold">Mayur General Stores</p>
                  <p className="text-xs text-muted-foreground">Ahmedpur</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-lg">
                  <p className="text-foreground font-semibold">Pushpak Agencies</p>
                  <p className="text-xs text-muted-foreground">Ahmedpur</p>
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
