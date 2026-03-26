import { useState, useEffect, useRef } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Scroll progress + navbar bg
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 60);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.replace("#", ""));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Slide the active indicator under the active link
  useEffect(() => {
    const activeLink = linkRefs.current[activeSection];
    const nav = navRef.current;
    if (!activeLink || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    setIndicatorStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
    });
  }, [activeSection]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] bg-gradient-to-r from-primary to-blue-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => scrollTo(e, "#home")}
              className="flex items-center gap-2 group"
            >
              <div className="relative w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                <Code2 size={16} className="text-primary" />
                {/* <img src={myLogo}"/> */}
                <span className="absolute inset-0 rounded-lg bg-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xl font-bold font-mono gradient-text tracking-tight">
                PV<span className="text-foreground/40">.</span>dev
              </span>
            </a>

            {/* Desktop nav */}
            <div ref={navRef} className="hidden md:flex items-center gap-1 relative">
              {/* Sliding indicator */}
              <span
                className="absolute bottom-0 h-[2px] bg-primary rounded-full transition-all duration-300 ease-out"
                style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
              />

              {navLinks.map(({ href, label }) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={href}
                    href={href}
                    ref={(el) => { linkRefs.current[id] = el; }}
                    onClick={(e) => scrollTo(e, href)}
                    className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isActive
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                      }`}
                  >
                    {label}
                  </a>
                );
              })}

              <div className="ml-3 h-5 w-px bg-border" />

              <Button
                size="sm"
                className="ml-3 shadow-glow text-xs px-4 relative overflow-hidden group"
                onClick={scrollToContact}
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-colors"
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span
                className={`absolute transition-all duration-300 ${isMobileOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
              >
                <X size={18} />
              </span>
              <span
                className={`absolute transition-all duration-300 ${isMobileOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}
              >
                <Menu size={18} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="bg-background/95 backdrop-blur-xl border-t border-border/50 px-6 py-4 space-y-1">
            {navLinks.map(({ href, label }, i) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
                    }`}
                  style={{ transitionDelay: isMobileOpen ? `${i * 40}ms` : "0ms" }}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? "bg-primary" : "bg-foreground/20"
                      }`}
                  />
                  {label}
                </a>
              );
            })}
            <div className="pt-2">
              <Button className="w-full shadow-glow" onClick={scrollToContact}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
