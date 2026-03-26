import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const Experience = () => {
  const workHistory = [
    {
      company: "AGRICULATURAL PROMOTION BANK CO.. LTD",
      position: "Senior Full Stack Developer",
      period: "2024 - Present",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced application load time by 60% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "AGRICULATURAL PROMOTION BANK CO.. LTD",
      position: "Full Stack Developer",
      period: "2023 - 2024",
      achievements: [
        "Built and deployed 15+ web applications using React and Node.js",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Collaborated with cross-functional teams on product development",
      ],
    },
    {
      company: "StartUp Labs",
      position: "Junior Developer",
      period: "2022 - 2023",
      achievements: [
        "Developed responsive front-end interfaces for mobile and web",
        "Participated in agile development and code reviews",
        "Contributed to open-source projects and internal tools",
      ],
    },
  ];

  const education = [
    {
      institution: "University of Technology",
      degree: "Master of Computer Science",
      period: "2016 - 2018",
      achievements: [
        "Specialized in Software Engineering and AI",
        "GPA: 2.91",
        "Thesis: Machine Learning Applications in Web Development",
      ],
    },
    {
      institution: "National University of Laos",
      degree: "Bachelor of Computer Science",
      period: "2014 - 2018",
      achievements: [
        "Dean's List for academic excellence",
        "President of Computer Science Club",
        "Winner of University Hackathon 2015",
      ],
    },
  ];

  const TimelineItem = ({
    item,
    icon,
    type,
    index,
  }: {
    item: any;
    icon: any;
    type: string;
    index: number;
  }) => (
    <ScrollReveal variant="fade-right" delay={index * 120} duration={600}>
      <div className="relative pl-8 pb-12 last:pb-0">
        <div className="absolute left-[15px] top-0 h-full w-0.5 bg-gradient-to-b from-primary to-primary/20" />
        <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
          {icon}
        </div>
        <Card className="p-6 bg-card border-border hover:border-primary transition-smooth shadow-card hover:shadow-glow">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                {type === "work" ? item.position : item.degree}
              </h3>
              <p className="text-primary font-semibold">
                {type === "work" ? item.company : item.institution}
              </p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-mono">{item.period}</span>
            </div>
          </div>
          <ul className="space-y-2">
            {item.achievements.map((achievement: string, idx: number) => (
              <li key={idx} className="text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </ScrollReveal>
  );

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal variant="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </ScrollReveal>

          {/* Work Experience */}
          <div className="mb-16">
            <ScrollReveal variant="fade-right" duration={500}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
            </ScrollReveal>
            <div>
              {workHistory.map((job, index) => (
                <TimelineItem
                  key={index}
                  item={job}
                  icon={<Briefcase className="w-4 h-4 text-primary" />}
                  type="work"
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <ScrollReveal variant="fade-right" duration={500}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
            </ScrollReveal>
            <div>
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  item={edu}
                  icon={<GraduationCap className="w-4 h-4 text-primary" />}
                  type="education"
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
