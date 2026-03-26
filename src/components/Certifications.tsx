import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const Certifications = () => {
  const certifications = [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "2023", credentialId: "AWS-SAA-123456", verifyUrl: "#", badge: "🏆", status: "Active" },
    { name: "Google Cloud Professional Developer", issuer: "Google Cloud", date: "2023", credentialId: "GCP-PD-789012", verifyUrl: "#", badge: "☁️", status: "Active" },
    { name: "Certified Kubernetes Administrator", issuer: "Cloud Native Computing Foundation", date: "2022", credentialId: "CKA-345678", verifyUrl: "#", badge: "⚙️", status: "Active" },
    { name: "Professional Scrum Master (PSM I)", issuer: "Scrum.org", date: "2022", credentialId: "PSM-901234", verifyUrl: "#", badge: "📊", status: "Active" },
    { name: "MongoDB Certified Developer", issuer: "MongoDB University", date: "2021", credentialId: "MDB-DEV-567890", verifyUrl: "#", badge: "🗄️", status: "Active" },
    { name: "Microsoft Azure Developer Associate", issuer: "Microsoft", date: "2021", credentialId: "AZ-204-234567", verifyUrl: "#", badge: "☁️", status: "Active" },
  ];

  const stats = [
    { value: certifications.length, label: "Total Certifications" },
    { value: certifications.filter(c => c.status === "Active").length, label: "Active" },
    { value: 3, label: "Cloud Platforms" },
    { value: 2023, label: "Latest" },
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Certifications & <span className="gradient-text">Credentials</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Professional certifications validating my expertise and commitment to continuous learning
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={index} variant="zoom-in" delay={index * 80} duration={500}>
                <Card className="p-6 bg-card border-border hover:border-primary transition-smooth shadow-card hover:shadow-glow group h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-smooth">{cert.badge}</div>
                    <div className="flex items-center gap-1 text-green-500 text-xs font-semibold px-2 py-1 bg-green-500/10 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      {cert.status}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{cert.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-1">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm mb-3">Issued: {cert.date}</p>
                  <div className="mb-4 p-2 bg-secondary/50 rounded border border-border">
                    <p className="text-xs text-muted-foreground mb-1">Credential ID</p>
                    <p className="text-xs font-mono text-foreground">{cert.credentialId}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    onClick={() => window.open(cert.verifyUrl, "_blank")}
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Verify Credential
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 80} duration={500}>
                <div className="text-center p-4 bg-card border border-border rounded-lg">
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
