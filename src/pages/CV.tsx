import { useEffect } from "react";
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

const CV = () => {
  useEffect(() => {
    document.title = "CV - Porchouayang VAJONG";
  }, []);

  return (
    <div className="cv-page bg-white text-gray-900 min-h-screen font-sans">
      {/* Print button - hidden when printing */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Download / Print PDF
        </button>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-300 transition-colors text-sm font-medium"
        >
          ← Back
        </button>
      </div>

      <div className="max-w-[850px] mx-auto p-10 print:p-8">
        {/* Header */}
        <header className="flex items-start gap-8 mb-8 pb-8 border-b-2 border-blue-600">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 shadow-md">
            PV
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-1">
              Porchouayang VAJONG
            </h1>
            <p className="text-xl text-blue-600 font-semibold mb-3">
              Full Stack Developer & IT Programmer
            </p>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
              Passionate full-stack developer specializing in Vue, TypeScript, Node.js, Java and
              microservices architecture. Experienced in building scalable, performant web
              applications and cloud solutions.
            </p>
          </div>

          {/* Contact info */}
          <div className="text-sm text-gray-600 space-y-1.5 flex-shrink-0">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-blue-600" />
              <span>[email@example.com]</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-blue-600" />
              <span>[+000 000 000 000]</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-blue-600" />
              <span>[City, Country]</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-blue-600" />
              <span>portfolio.example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Github size={14} className="text-blue-600" />
              <span>github.com/[username]</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={14} className="text-blue-600" />
              <span>linkedin.com/in/[username]</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-8">
          {/* Left column */}
          <div className="col-span-1 space-y-6">
            {/* Skills */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 border-b border-blue-200 pb-1">
                Technical Skills
              </h2>
              <div className="space-y-3">
                {[
                  { label: "Frontend", items: ["Vue.js", "React", "TypeScript", "Tailwind CSS"] },
                  { label: "Backend", items: ["Node.js", "Java", "Spring Boot", "REST APIs"] },
                  { label: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
                  { label: "DevOps", items: ["Docker", "Git", "CI/CD", "Linux"] },
                  { label: "Cloud", items: ["AWS", "Microservices", "Kubernetes"] },
                ].map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-semibold text-gray-700 mb-1">{group.label}</p>
                    <div className="flex flex-wrap gap-1">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 border-b border-blue-200 pb-1">
                Languages
              </h2>
              <div className="space-y-1.5 text-sm">
                {[
                  { lang: "Lao", level: "Native" },
                  { lang: "English", level: "Professional" },
                  { lang: "Thai", level: "Conversational" },
                ].map(({ lang, level }) => (
                  <div key={lang} className="flex justify-between">
                    <span className="text-gray-700">{lang}</span>
                    <span className="text-gray-500 text-xs">{level}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 border-b border-blue-200 pb-1">
                Education
              </h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-800">[Degree Name]</p>
                  <p className="text-gray-600">[University Name]</p>
                  <p className="text-gray-400 text-xs">[Year] – [Year]</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="col-span-2 space-y-6">
            {/* Experience */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 border-b border-blue-200 pb-1">
                Work Experience
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Full Stack Developer",
                    company: "[Company Name]",
                    period: "[Month Year] – Present",
                    location: "[City, Country]",
                    points: [
                      "Developed and maintained scalable web applications using Vue.js and Node.js",
                      "Designed RESTful APIs and microservices architecture with Java Spring Boot",
                      "Improved application performance by 40% through code optimization and caching strategies",
                      "Collaborated with cross-functional teams in an Agile environment",
                    ],
                  },
                  {
                    title: "IT Programmer",
                    company: "[Company Name]",
                    period: "[Month Year] – [Month Year]",
                    location: "[City, Country]",
                    points: [
                      "Built and deployed full-stack web applications for internal business tools",
                      "Integrated third-party APIs and payment gateways",
                      "Maintained PostgreSQL databases and wrote complex SQL queries",
                    ],
                  },
                ].map((job) => (
                  <div key={job.title + job.company} className="relative pl-4 border-l-2 border-blue-100">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-500" />
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{job.title}</p>
                        <p className="text-blue-600 text-sm font-medium">{job.company}</p>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {job.points.map((p, i) => (
                        <li key={i} className="text-xs text-gray-600 flex gap-2">
                          <span className="text-blue-400 mt-0.5">▸</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 border-b border-blue-200 pb-1">
                Key Projects
              </h2>
              <div className="space-y-3">
                {[
                  {
                    name: "[Project Name]",
                    stack: "Vue.js · Node.js · PostgreSQL",
                    desc: "Brief description of the project, its purpose, and your key contributions.",
                  },
                  {
                    name: "[Project Name]",
                    stack: "React · TypeScript · Spring Boot",
                    desc: "Brief description of the project, its purpose, and your key contributions.",
                  },
                ].map((proj) => (
                  <div key={proj.name} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="flex justify-between items-start">
                      <p className="font-semibold text-gray-800 text-sm">{proj.name}</p>
                      <span className="text-xs text-blue-600 font-mono">{proj.stack}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{proj.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 border-b border-blue-200 pb-1">
                Certifications
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "[Certification Name]", issuer: "[Issuer]", year: "[Year]" },
                  { name: "[Certification Name]", issuer: "[Issuer]", year: "[Year]" },
                ].map((cert) => (
                  <div key={cert.name} className="text-xs bg-gray-50 border border-gray-100 rounded p-2">
                    <p className="font-semibold text-gray-800">{cert.name}</p>
                    <p className="text-gray-500">{cert.issuer} · {cert.year}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          @page { margin: 0.5in; size: A4; }
        }
      `}</style>
    </div>
  );
};

export default CV;
