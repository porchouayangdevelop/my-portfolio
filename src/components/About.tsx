import { Code2, Rocket, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Fast Delivery",
      description: "Delivering projects on time with agile methodologies",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Passionate developer with 5+ years of experience building modern web applications
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12 font-mono">
            <ScrollReveal variant="fade-right" duration={700}>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  I'm a full-stack developer specializing in building exceptional digital experiences.
                  Currently focused on developing accessible, human-centered products using cutting-edge
                  technologies.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With a strong foundation in both frontend and backend development, I bring ideas to
                  life through clean code and intuitive user interfaces. I'm always eager to learn new
                  technologies and take on challenging projects.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-2">Languages & Frameworks:</p>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Vue", "Nuxt", "Node.js", "Java", "SQL"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <ScrollReveal key={index} variant="fade-left" delay={index * 120} duration={600}>
                  <Card className="p-6 bg-card border-border hover:border-primary transition-smooth shadow-card">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
