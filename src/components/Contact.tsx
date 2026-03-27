import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import { TbBrandWhatsapp } from 'react-icons/tb'
import { RiFacebookCircleFill } from 'react-icons/ri'

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "porchouayang2016@gmail.com", href: "mailto:porchouayang2016@gmail.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+(856) 20 91-255-475", href: "tel:+8562055475" },
    { icon: <TbBrandWhatsapp className="w-5 h-5" />, label: "Whatsapp", value: "+(856) 20 91-255-475", href: "tel:+8562055475" },
    { icon: <RiFacebookCircleFill className="w-5 h-5" />, label: "FaceBook", value: "Yang Por", href: "#" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Vientiane capital, LA", href: "#" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to create something amazing
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal variant="fade-right" duration={700}>
              <div className="space-y-6">
                <Card className="p-6 bg-card border-border shadow-card">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-smooth border border-transparent hover:border-primary"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">{info.icon}</div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </Card>
                <div className="p-6 bg-card/50 border border-border rounded-lg">
                  <p className="text-muted-foreground">
                    I'm always interested in hearing about new projects and opportunities.
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" duration={700}>
              <Card className="p-6 bg-card border-border shadow-card">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-secondary/50 border-1 focus:border-primary outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary/50 border-1 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      className="bg-secondary/50 border-1 focus:border-primary resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full shadow-glow" size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
