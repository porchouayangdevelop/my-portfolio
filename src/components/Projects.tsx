import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Projects = () => {
  const projects = [
    {
      title: "Analytics Dashboard",
      description:
        "Interactive data dashboard with D3.js charts, filterable reports, and CSV/PDF export — built for business intelligence teams.",
      tech: ["Vue.js", "D3.js", "Fastify", "Typescript", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      fallback: "bg-gradient-to-br from-green-500/20 to-primary/20",
      github: "#",
      live: "#",
    },
    {
      title: "Traditional Medicine ERP & Service Platform",
      description:
        "a specialized management platform that digitizes the traditional herbal pharmacy. By integrating Real-time Inventory Tracking, Custom Formula Building, and Patient Consultation Records, the system empowers practitioners to focus on healing while the software handles the complex logistics of a modern apothecary",
      tech: ["Vue", "Nuxtjs", "Typescript", "NuxtUI", "Tailwindcss", "Payment Gateway API", "Maps"],
      image: "https://media.istockphoto.com/id/962094932/photo/doctor-surgeon-analyzing-patient-brain-testing-result-and-human-anatomy-on-technological.webp?a=1&b=1&s=612x612&w=0&k=20&c=PGsiYS5078SzuruZZJkG4uc0ZdWy4hSDM6HJJZs5RDk=",
      fallback: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      github: "#",
      live: "#",
    },
    {
      title: "Authentication & Authorization Base API",
      description:
        "A reusable auth foundation with OAuth2 via Authentik, JWT sessions, role-based permissions, and support for both MariaDB and PostgreSQL.",
      tech: ["Fastify", "TypeScript", "Authentik OAuth2", "MariaDB", "Redis", "Web Socket"],
      image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fallback: "bg-gradient-to-br from-red-500/20 to-orange-500/20",
      github: "#",
      live: "#",
    },
    {
      title: "Microservices Architecture",
      description:
        "Event-driven microservices system using Kafka for async messaging, Redis for caching, and AI integration — built for high-throughput distributed workloads.",
      tech: ["Fastify", "TypeScript", "Spring Boot", "Apache Kafka", "Redis", "OpenClaw AI", "Mariadb", "PostgreSql", "MongoDB"],
      image: "https://plus.unsplash.com/premium_photo-1745622970146-60b44e7381de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1pY3Jvc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D",
      fallback: "bg-gradient-to-br from-violet-500/20 to-blue-500/20",
      github: "#",
      live: "#",
    },
    {
      title: "Uploads Base API",
      description:
        "Secure file upload service with MinIO object storage, supporting multipart uploads, file validation, and presigned URL generation.",
      tech: ["Fastify", "Spring Boot", "Java", "TypeScript", "MariaDB", "MinIO"],
      image: "https://plus.unsplash.com/premium_photo-1683732137653-9121ba5e8ede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXBsb2FkfGVufDB8fDB8fHww",
      fallback: "bg-gradient-to-br from-teal-500/20 to-green-500/20",
      github: "#",
      live: "#",
    },
    {
      title: "Report and Analytics",
      description:
        "A Nuxt-powered analytics frontend with ApexCharts visualizations, Pinia state management, and a clean NuxtUI component system.",
      tech: ["Nuxt", "Vue", "TypeScript", "NuxtUI", "Tailwind CSS", "Pinia", "ApexCharts"],
      image: "https://plus.unsplash.com/premium_photo-1682126196145-d23f2022a8dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5hbHl0aWNzfGVufDB8fDB8fHww",
      fallback: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={index} variant="flip-up" delay={index * 80} duration={600}>
                <Card
                  className="overflow-hidden bg-card border-border hover:border-primary transition-smooth shadow-card group h-full"
                >
                  <div className={`h-48 overflow-hidden ${project.fallback}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
