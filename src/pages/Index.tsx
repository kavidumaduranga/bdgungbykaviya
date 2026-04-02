import { Shield, Users, Crown, Mail, Phone, MapPin, Swords, Zap } from "lucide-react";
import logo from "@/assets/bd-gung-logo.png";

const members = [
  { name: "BUGRUSHER", role: "Guild Leader", icon: Crown, tier: "leader" as const },
  { name: "WEMMBU", role: "Acting Leader", icon: Crown, tier: "officer" as const },
  { name: "AKIYA", role: "Top Rusher", icon: Zap, tier: "officer" as const },
  { name: "KING RUCHI", role: "Elite Member", icon: Swords, tier: "elite" as const },
  { name: "CHAMO BOY", role: "Elite Member", icon: Swords, tier: "elite" as const },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid-bg relative overflow-x-hidden">
      {/* Scanline overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]">
        <div className="h-[2px] w-full bg-neon-cyan animate-pulse-glow" style={{ animation: "scanline 8s linear infinite" }} />
      </div>

      {/* Ambient glow effects */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="pointer-events-none fixed bottom-0 right-0 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[120px]" />

      {/* Navigation */}
      <nav className="relative z-10 border-b border-primary/20 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="BD GUNG Logo" className="w-10 h-10 rounded" />
            <span className="font-heading text-xl font-bold tracking-wider text-primary text-glow-red">BD GUNG</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-neon-cyan" />
            <span>Sri Lanka</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center py-20 md:py-32 px-4">
        <div className="animate-float mb-8">
          <div className="relative">
            <img src={logo} alt="BD GUNG Logo" className="w-48 h-48 md:w-64 md:h-64 rounded-2xl border-2 border-glow-red box-glow-red" />
            <div className="absolute inset-0 rounded-2xl bg-primary/10 animate-pulse-glow" />
          </div>
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl font-black tracking-wider text-primary text-glow-red mb-4 text-center" style={{ animation: "flicker 4s infinite" }}>
          BD GUNG
        </h1>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-neon-cyan" />
          <Zap className="w-5 h-5 text-neon-cyan animate-pulse-glow" />
          <span className="font-heading text-sm tracking-[0.3em] text-neon-cyan text-glow-cyan uppercase">Sri Lankan Gaming Guild</span>
          <Zap className="w-5 h-5 text-neon-cyan animate-pulse-glow" />
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-neon-cyan" />
        </div>
        <p className="max-w-2xl text-center text-lg text-muted-foreground leading-relaxed">
          Forged in the digital battlegrounds of Sri Lanka, <span className="text-primary font-semibold">BD GUNG</span> is a brotherhood of elite gamers united by an unbreakable bond and an insatiable hunger for victory. We don't just play — we dominate. From raids to ranked matches, our squad moves as one force, striking fear into every opponent that dares to stand in our way. 
        </p>
      </section>

      {/* Members Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider text-foreground text-center">
              THE <span className="text-primary text-glow-red">SQUAD</span>
            </h2>
            <Shield className="w-6 h-6 text-primary" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => {
              const isLeader = member.tier === "leader";
              const isOfficer = member.tier === "officer";
              const isElite = member.tier === "elite";
              return (
                <div
                  key={member.name}
                  className={`group relative border rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    isLeader
                      ? "p-6 bg-primary/10 border-glow-red box-glow-red col-span-1 sm:col-span-2 lg:col-span-1 lg:col-start-2"
                      : isOfficer
                      ? "p-6 bg-neon-cyan/5 border-neon-cyan/40 box-glow-cyan"
                      : "p-5 bg-card/50 border-border hover:border-primary/30"
                  }`}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className={`rounded-full flex items-center justify-center ${
                      isLeader ? "w-14 h-14 bg-primary/20" : isOfficer ? "w-14 h-14 bg-neon-cyan/15" : "w-11 h-11 bg-secondary"
                    }`}>
                      <member.icon className={`${isLeader ? "w-7 h-7 text-primary" : isOfficer ? "w-7 h-7 text-neon-cyan" : "w-5 h-5 text-muted-foreground"}`} />
                    </div>
                    <div>
                      <h3 className={`font-heading font-bold tracking-wide ${
                        isLeader ? "text-lg text-primary text-glow-red" : isOfficer ? "text-lg text-neon-cyan text-glow-cyan" : "text-base text-foreground"
                      }`}>
                        {member.name}
                      </h3>
                      <p className={`text-sm font-medium mt-1 ${
                        isLeader ? "text-primary/80" : isOfficer ? "text-neon-cyan/70" : "text-muted-foreground"
                      }`}>
                        {member.role}
                      </p>
                    </div>
                    {isLeader && (
                      <span className="font-heading text-[10px] tracking-[0.2em] uppercase bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">
                        Founder
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="border border-border rounded-lg p-8 md:p-12 bg-card/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-foreground mb-6">
              OUR <span className="text-neon-cyan text-glow-cyan">STORY</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Born from the competitive gaming scene of Sri Lanka, BD GUNG was founded by <span className="text-primary font-semibold">BUGRUSHER</span> — a relentless leader with a vision to build a crew that fights together, wins together, and never backs down.
              </p>
              <p>
                What started as a small squad of passionate gamers has evolved into a tight-knit brotherhood. Each member brings their own unique skillset to the battlefield — from tactical genius to raw firepower. Together, we are unstoppable.
              </p>
              <p>
                We represent Sri Lankan gaming on the global stage, proving that skill knows no borders. Whether it's late-night raids or tournament showdowns, BD GUNG always shows up ready to dominate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-foreground mb-8">
            JOIN THE <span className="text-primary text-glow-red">FIGHT</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Want to join BD GUNG or challenge us? Reach out through any of the channels below.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:kavidumaduranga509@gmail.com" className="flex items-center gap-3 px-6 py-3 rounded-lg border border-glow-cyan bg-card/50 hover:box-glow-cyan transition-all duration-300 group">
              <Mail className="w-5 h-5 text-neon-cyan" />
              <span className="text-foreground text-sm">kavidumaduranga509@gmail.com</span>
            </a>
            <a href="tel:0718830856" className="flex items-center gap-3 px-6 py-3 rounded-lg border border-glow-red bg-card/50 hover:box-glow-red transition-all duration-300 group">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm">071 883 0856</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 px-4">
        <div className="container mx-auto flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="BD GUNG" className="w-6 h-6 rounded" />
            <span className="font-heading text-sm font-bold tracking-wider text-primary">BD GUNG</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 BD GUNG Guild — Sri Lanka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
