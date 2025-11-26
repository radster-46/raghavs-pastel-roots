import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import ganeshjiLogo from "@/assets/ganeshji-logo.png";
import profilePhoto from "@/assets/profile-photo.jpg";
import kundliChart from "@/assets/kundli-chart.png";
import floralCorner from "@/assets/floral-corner.png";
const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
        }
      });
    }, {
      threshold: 0.05
    });
    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach(el => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);
  const bioData = [
    { label: "Birth Date", value: "05 Oct 2001" },
    { label: "Birth Place", value: "Nanded" },
    { label: "Height", value: "5 ft 6 in" },
    { label: "Blood Group", value: "O Negative" }
  ];
  const timeline = [
    { year: "2001", event: "Born in Nanded" },
    { year: "2017", event: "Schooling from Nagarjuna Public School, Nanded" },
    { year: "2019-2023", event: "Graduated from PICT, Pune (E&TC)" },
    { year: "2023-Present", event: "Working as Full Stack Developer at BNY, Pune" }
  ];
  return <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative Corner Elements */}
      <div className="fixed top-0 left-0 w-64 h-64 opacity-40 pointer-events-none z-0">
        <img src={floralCorner} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="fixed top-0 right-0 w-64 h-64 opacity-40 pointer-events-none z-0 transform scale-x-[-1]">
        <img src={floralCorner} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="fixed bottom-0 left-0 w-64 h-64 opacity-40 pointer-events-none z-0 transform scale-y-[-1]">
        <img src={floralCorner} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="fixed bottom-0 right-0 w-64 h-64 opacity-40 pointer-events-none z-0 transform scale-[-1]">
        <img src={floralCorner} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-primary/10 shadow-sm">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-50"></div>
              <img 
                src={ganeshjiLogo} 
                alt="Ganeshji" 
                className="relative h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-lg" 
              />
            </div>
            <p className="text-base sm:text-lg font-semibold text-primary tracking-wide font-display">श्री गणेशाय नमः</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-12 pb-12 px-3 sm:px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-8 fade-in-section">
            <div className="relative lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-96 overflow-hidden shadow-float" style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1))"
              }}>
                <img src={profilePhoto} alt="Raghav Bhutada" className="w-full h-full object-cover scale-110" />
              </div>
            </div>
            
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-display text-primary mb-6 leading-tight">
                Raghav Bhutada
              </h1>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
                I am a 24-year-old working as Software Developer in Pune, and I'm someone who values empathy, family, and continuous growth. I enjoy an active lifestyle—whether it's playing badminton, staying fit, or taking spontaneous bike trips and travel breaks to explore new places. Music is a big part of my day, and I love learning new things that help me grow personally and professionally. My family means a lot to me, and their support has shaped the grounded, respectful person I am today. I hope to build a future with someone who is caring, family-oriented, values financial stability, and is equally driven toward growth in her professional journey.
              </p>
            </div>
          </div>

          {/* Bio Card */}
          <Card className="fade-in-section p-5 md:p-8 bg-card border border-border shadow-elegant rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Personal Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              {bioData.map((item, index) => <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-2xl border border-border hover:border-primary/40 hover:shadow-soft transition-all duration-300">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>)}
            </div>

            <div className="space-y-2">
              <div className="p-3 bg-muted/50 rounded-2xl">
                <div>
                  <p className="text-xs text-muted-foreground">Temporary Address</p>
                  <p className="font-medium text-sm text-foreground">Shri Krishna Society, Vadban Rd, Mundhwa, Pune, 411036.</p>
                </div>
              </div>

              <div className="p-3 bg-muted/50 rounded-2xl">
                <div>
                  <p className="text-xs text-muted-foreground">Permanent Address</p>
                  <p className="font-medium text-sm text-foreground">90/A, Ganesh Nagar, Nanded, 431602.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50"></div>

      {/* Timeline Section */}
      <section className="py-16 px-3 sm:px-4 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(var(--muted) / 0.3), hsl(var(--accent) / 0.05), hsl(var(--muted) / 0.2))'
    }}>
        <div className="container mx-auto max-w-4xl relative">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground fade-in-section">
            My Journey
          </h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            <div className="space-y-0">
              {timeline.map((item, index) => <div key={index} className={`fade-in-section relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  {/* Content side */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="inline-block p-3 bg-card border border-border shadow-elegant rounded-2xl hover:shadow-soft transition-all duration-300">
                      <h3 className="font-semibold text-foreground mb-1">{item.event}</h3>
                      <p className="text-lg font-bold text-primary">{item.year}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10"></div>
                  
                  {/* Date side */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                    <div className="inline-block">
                      <div className="text-lg font-bold text-primary">{item.year.includes('-') ? item.year.split('-')[0] : item.year}</div>
                      
                      
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50"></div>

      {/* Family Details Section */}
      <section className="py-16 px-3 sm:px-4 relative" style={{
      background: 'linear-gradient(135deg, hsl(var(--background)), hsl(var(--primary) / 0.03), hsl(var(--background)))'
    }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-foreground fade-in-section">Family Details</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {/* Ancestry */}
            <Card className="fade-in-section p-4 bg-card border border-border shadow-elegant rounded-2xl hover:shadow-soft transition-all duration-300">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span className="text-xl">🏛️</span> Ancestry
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-foreground">Sakha:</span>
                  <span className="text-muted-foreground ml-1"><span className="font-bold">Bhutada & Jaju</span></span>
                </div>
                <div className="bg-muted/50 p-3 rounded-2xl space-y-1">
                  <p className="text-xs font-semibold text-primary uppercase">Grandparents</p>
                  <p className="text-foreground font-semibold">Shri. Hanumandasji Harigovinddasji Bhutada</p>
                  <p className="text-blue-600 text-xs">📞 7588237435</p>
                  <p className="text-foreground font-semibold">Late Pushpabai Hanumandasji Bhutada</p>
                </div>
              </div>
            </Card>

            {/* Parents */}
            <Card className="fade-in-section p-4 bg-card border border-border shadow-elegant rounded-2xl hover:shadow-soft transition-all duration-300">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span className="text-xl">👨‍👩‍👦</span> Parents
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-muted/50 p-3 rounded-2xl">
                  <p className="text-foreground font-semibold">Shri. Murlidharji Hanumandasji Bhutada</p>
                  <p className="text-muted-foreground text-xs">Business, Nanded</p>
                  <p className="text-blue-600 text-xs mt-1">📞 9763131349</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-2xl">
                  <p className="text-foreground font-semibold">Sau. Sangeeta Murlidharji Bhutada</p>
                  <p className="text-muted-foreground text-xs">Housewife</p>
                  <p className="text-blue-600 text-xs mt-1">📞 9405377149</p>
                </div>
              </div>
            </Card>

            {/* Uncles */}
            <Card className="fade-in-section p-4 bg-card border border-border shadow-elegant rounded-2xl hover:shadow-soft transition-all duration-300">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span className="text-xl">👔</span> Uncles
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-foreground font-medium">Nandkishorji Hanumandasji Bhutada</p>
                  <p className="text-xs text-muted-foreground">Business, Ahmedpur • <span className="text-blue-600">9423350974</span></p>
                </div>
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-foreground font-medium">Shri. Ghanshyamji Hanumandasji Bhutada</p>
                  <p className="text-xs text-muted-foreground">Business, Ahmedpur • <span className="text-blue-600">9850614918</span></p>
                </div>
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-foreground font-medium">Shri. Radheshyamji Hanumandasji Bhutada</p>
                  <p className="text-xs text-muted-foreground">Business, Nanded • <span className="text-blue-600">9422170658</span></p>
                </div>
              </div>
            </Card>

            {/* Siblings */}
            <Card className="fade-in-section p-4 bg-card border border-border shadow-elegant rounded-2xl hover:shadow-soft transition-all duration-300">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span className="text-xl">🤝</span> Siblings
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-foreground font-medium">Mayurdhwaj Murlidharji Bhutada</p>
                  <p className="text-xs text-muted-foreground">(Married to Sau. Priya Mayurdhwajji Bhutada)</p>
                  <p className="text-xs text-muted-foreground">Business, Parbhani</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-foreground font-medium">Krishna Nandkishorji Bhutada</p>
                  <p className="text-xs text-muted-foreground">Software Engineer, Bangalore</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-foreground font-medium">Kanhaiya Ghanshyamji Bhutada</p>
                  <p className="text-xs text-muted-foreground">Business, Ahmedpur</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-foreground font-medium">Pawan Ghanshyamji Bhutada</p>
                  <p className="text-xs text-muted-foreground">Business, Ahmedpur</p>
                </div>
              </div>
            </Card>

            {/* Nanihal */}
            <Card className="fade-in-section p-4 bg-card border border-border shadow-elegant rounded-2xl hover:shadow-soft transition-all duration-300">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span className="text-xl">🏠</span> Maternal Family
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-muted/50 p-3 rounded-2xl">
                  <p className="text-xs font-semibold text-primary uppercase mb-1">Nanihal</p>
                  <p className="text-foreground font-semibold">Shri. Shrinivasji Ratanlalji Jaju</p>
                  <p className="text-muted-foreground text-xs">Pune • <span className="text-blue-600">9702057777</span></p>
                </div>
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-xs font-semibold text-primary uppercase mb-1">Maternal Uncle</p>
                  <p className="text-foreground text-xs">Shri. Shrinivas Ratanlalji Jaju, Pune</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-xs font-semibold text-primary uppercase mb-1">Maternal Aunts</p>
                  <div className="space-y-1 text-xs text-foreground">
                    <p>Sau. Sunanda Dhananjayji Lahoti, Chh. Sambhaji Nagar</p>
                    <p>Sau. Anuradha JayPrakashji Sarda, Bangalore</p>
                    <p>Sau. Archana Murlimohanji Rathi, Nanded</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Family Firms */}
            <Card className="fade-in-section p-4 bg-card border border-border shadow-elegant rounded-2xl hover:shadow-soft transition-all duration-300">
              <h3 className="text-lg font-bold mb-3 text-primary flex items-center gap-2">
                <span className="text-xl">🏢</span> Family Firms
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-foreground font-semibold">CONVOLT SYSTEMS</p>
                  <p className="text-xs text-muted-foreground">Shivajinagar, Nanded</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-foreground font-semibold">HP World</p>
                  <p className="text-xs text-muted-foreground">Parbhani</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-foreground font-semibold">Mayur General Stores</p>
                  <p className="text-xs text-muted-foreground">Ahmedpur</p>
                </div>
                <div className="bg-muted/50 p-2 rounded-2xl">
                  <p className="text-foreground font-semibold">Pushpak Agencies</p>
                  <p className="text-xs text-muted-foreground">Ahmedpur</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50"></div>

      {/* Kundli Section */}
      <section className="py-16 px-3 sm:px-4 relative" style={{
      background: 'linear-gradient(180deg, hsl(var(--accent) / 0.08), hsl(var(--primary) / 0.05))'
    }}>
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-display font-bold text-center mb-8 text-foreground fade-in-section">Kundli</h2>
          
          <Card className="fade-in-section p-6 md:p-10 bg-card/50 backdrop-blur-sm border-2 border-primary/10 rounded-2xl shadow-elegant hover:border-primary/20 transition-all duration-300">
            <div className="max-w-lg mx-auto">
              <img src={kundliChart} alt="Kundli Chart" className="w-full h-auto rounded-2xl shadow-xl ring-4 ring-primary/10" />
            </div>
          </Card>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50"></div>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-md bg-background/80 border-t border-primary/10 shadow-sm">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl opacity-50"></div>
              <h3 className="relative text-2xl sm:text-3xl font-display font-semibold text-primary tracking-wide">
                Jai Shree Krishna
              </h3>
            </div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-2"></div>
          </div>
        </div>
      </footer>

    </div>;
};
export default Index;