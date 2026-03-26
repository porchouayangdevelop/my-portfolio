import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import {
  SiTypescript, SiJavascript, SiVuedotjs, SiNuxt, SiReact,
  SiNodedotjs, SiExpress, SiFastify, SiSpringboot,
  SiMariadb, SiPostgresql, SiMongodb, SiFirebase,
  SiApachekafka, SiRabbitmq, SiRedis,
  SiDocker, SiKubernetes, SiGit, SiLinux,
  SiPostman, SiIntellijidea, SiWebstorm, SiDatagrip,
  SiHarbor, SiRancher, SiHelm, SiWindsurf, SiNestjs
} from "react-icons/si";
import { FaJava, FaAws, FaHtml5, FaCss3 } from "react-icons/fa";
import { VscCircuitBoard } from "react-icons/vsc";
import { Dog } from "lucide-react";
import { DiMsqlServer } from 'react-icons/di'
import { GrOracle } from 'react-icons/gr'
import { VscVscode } from 'react-icons/vsc'
import { RiGhostLine } from 'react-icons/ri'
import { TbBrandCSharp } from 'react-icons/tb'


type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: " Programming Languages",
    skills: [
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "C#", icon: <TbBrandCSharp className="text-purple-600" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [

      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3 className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Vue", icon: <SiVuedotjs className="text-green-500" /> },
      { name: "Nuxt", icon: <SiNuxt className="text-green-400" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-400" /> },
      { name: "Fastify", icon: <SiFastify className="text-gray-300" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MariaDB", icon: <SiMariadb className="text-brown-500" /> },
      { name: "MSSQL", icon: <DiMsqlServer className="text-red-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "Oracle", icon: <GrOracle className="text-red-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    title: "Microservices",
    skills: [
      { name: "Event Driven", icon: <VscCircuitBoard className="text-purple-400" /> },
      { name: "Apache Kafka", icon: <SiApachekafka className="text-white" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-500" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "Harbor", icon: <SiHarbor className="text-gray-300" /> },
      { name: "RKE2", icon: <SiRancher className="text-blue-700" /> },
      { name: "Helm", icon: <SiHelm className="text-white-300" /> },
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-300" /> },
    ],
  },
  {
    title: "Tools & IDEs",
    skills: [
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
      { name: "IntelliJ", icon: <SiIntellijidea className="text-pink-500" /> },
      { name: "WebStorm", icon: <SiWebstorm className="text-blue-400" /> },
      { name: "DataGrip", icon: <SiDatagrip className="text-purple-500" /> },
      { name: "Kiro", icon: <RiGhostLine className="text-purple-500" /> },
      { name: "Windsurf", icon: <SiWindsurf className="text-white-500" /> },
      // { name: "Cursor", icon: <SiPostman className="text-orange-500" /> },
      // { name: "Scalar", icon: <SiPostman className="text-orange-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Bruno", icon: <Dog className="text-orange-500" /> },
      // { name: "SoapUI", icon: <SiPostman className="text-orange-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 font-mono">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={index} variant="zoom-in" delay={index * 80} duration={500}>
                <Card
                  className="p-6 bg-card border-border hover:border-primary transition-smooth shadow-card h-full"
                >
                  <h3 className="text-lg font-semibold mb-4 text-primary border-b border-border pb-2">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center gap-2 p-2 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors group"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <span className="text-xs text-muted-foreground text-center leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
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

export default Skills;
