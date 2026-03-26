import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Built a scalable online store with cart management, Stripe payment integration, and a full admin dashboard for inventory and order tracking.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
      fallback: "bg-gradient-to-br from-primary/20 to-blue-500/20",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "A team productivity tool with drag-and-drop boards, real-time collaboration via WebSocket, and role-based access control.",
      tech: ["Next.js", "PostgreSQL", "Prisma", "WebSocket"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
      fallback: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
      github: "#",
      live: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "Integrated OpenAI's API to generate blog posts, social captions, and marketing copy from user prompts with one-click export.",
      tech: ["React", "Python", "FastAPI", "OpenAI"],
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=300&fit=crop",
      fallback: "bg-gradient-to-br from-purple-500/20 to-primary/20",
      github: "#",
      live: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Interactive data dashboard with D3.js charts, filterable reports, and CSV/PDF export — built for business intelligence teams.",
      tech: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      fallback: "bg-gradient-to-br from-green-500/20 to-primary/20",
      github: "#",
      live: "#",
    },
    {
      title: "Social Media Platform",
      description:
        "Full-stack social app with user profiles, post feeds, real-time chat, and Firebase-powered notifications and authentication.",
      tech: ["React", "Firebase", "Redux", "Material-UI"],
      image: "https://media.istockphoto.com/id/1206799135/photo/businessman-touching-icon-customer-global-networking-connection-on-virtual-screen-banking.webp?a=1&b=1&s=612x612&w=0&k=20&c=OkqDR01y62kUtLeb4IdcT7xVcP9F3wfFzBC7uymxCEI=",
      fallback: "bg-gradient-to-br from-orange-500/20 to-primary/20",
      github: "#",
      live: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "Location-aware weather app with 7-day forecasts, hourly breakdowns, and severe weather alerts using the OpenWeather API.",
      tech: ["React Native", "OpenWeather API", "Redux", "Maps"],
      image: "https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?q=80&w=809&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fallback: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      github: "#",
      live: "#",
    },
    {
      title: "Authentication & Authorization Base API",
      description:
        "A reusable auth foundation with OAuth2 via Authentik, JWT sessions, role-based permissions, and support for both MariaDB and PostgreSQL.",
      tech: ["Fastify", "TypeScript", "Authentik OAuth2", "MariaDB", "PostgreSQL"],
      image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fallback: "bg-gradient-to-br from-red-500/20 to-orange-500/20",
      github: "#",
      live: "#",
    },
    {
      title: "Microservices Architecture",
      description:
        "Event-driven microservices system using Kafka for async messaging, Redis for caching, and AI integration — built for high-throughput distributed workloads.",
      tech: ["Fastify", "TypeScript", "Spring Boot", "Apache Kafka", "Redis", "OpenClaw AI", "Mariadb", "PostgreSql"],
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
