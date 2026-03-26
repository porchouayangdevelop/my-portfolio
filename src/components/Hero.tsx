import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/90" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-up">
          {/* Two-column layout: text left, photo right */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

            {/* Left: Text content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-primary font-mono text-sm">Available for freelance and full time</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Mr Porchouayang VAJONG</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-3 font-mono">
                Full Stack Developer & IT Programmer
              </p>

              <p className="text-base text-muted-foreground mb-8 max-w-xl font-mono">
                I craft beautiful, performant web applications with modern technologies.
                Specializing in Vue, TypeScript, JavaScript, Node.js, Java, Microservices
                architecture and cloud solutions.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <Button size="lg" className="shadow-glow" onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}>
                  View My Work
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate("/cv")}
                  className="gap-2"
                >
                  <Download size={16} />
                  Download CV
                </Button>
              </div>

              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-primary/20 rounded-full transition-smooth border border-border hover:border-primary"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-primary/20 rounded-full transition-smooth border border-border hover:border-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:[email@example.com]"
                  className="p-3 bg-card hover:bg-primary/20 rounded-full transition-smooth border border-border hover:border-primary"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right: Profile picture box */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              {/* Outer glow ring */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl scale-110" />
                <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-primary/50 shadow-glow overflow-hidden bg-card flex items-center justify-center">
                  {/* Replace the div below with an <img> tag once you have a profile photo */}
                  {/* <img src={profilePhoto} alt="Porchouayang VAJONG" className="w-full h-full object-cover" /> */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/40 to-blue-600/40 flex flex-col items-center justify-center">
                    <span className="text-5xl md:text-6xl font-bold text-white/90 select-none">PV</span>
                    <span className="text-xs text-white/50 font-mono mt-1">Add your photo</span>
                  </div>
                </div>
                {/* Decorative orbit ring */}
                <div className="absolute inset-[-12px] rounded-full border border-primary/20 border-dashed animate-spin" style={{ animationDuration: "20s" }} />
              </div>

              {/* Status badge */}
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-mono">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-muted-foreground">Open to work</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
        aria-label="Scroll to about"
      >
        <ChevronDown size={32} className="text-primary" />
      </a>
    </section>
  );
};

export default Hero;
