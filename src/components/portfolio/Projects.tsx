import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    name: "Online Quiz Tracker",
    description:
      "A responsive online quiz platform where users register, log in, attend timed quizzes and instantly view scores. Includes secure authentication and admin management for quiz questions.",
    github: "https://github.com/yaashinisekar/OnlineQuizTracker.git",
    tech: ["React.js", "Firebase", "JavaScript", "REST APIs", "HTML", "CSS", "Git"],
    features: [
      "User authentication",
      "Quiz timer system",
      "Automated scoring",
      "Admin panel",
      "Responsive design",
    ],
    gradient: "from-primary/30 via-secondary/20 to-accent/20",
  },
  {
    name: "Smart Expense Tracker",
    description:
      "A full-stack personal finance app to track expenses, manage income, analyze spending and plan monthly budgets. Features interactive dashboards and JWT-secured authentication.",
    github: "https://github.com/yaashinisekar/SmartExpenseTracker.git",
    tech: ["Java", "Spring Boot", "React.js", "MySQL", "Tailwind", "JWT", "REST APIs"],
    features: [
      "Expense & income tracking",
      "Budget planner",
      "Analytics dashboard",
      "JWT authentication",
      "Interactive charts",
    ],
    gradient: "from-secondary/30 via-accent/20 to-primary/20",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-3xl overflow-hidden card-hover group"
            >
              <div className={`h-48 bg-gradient-to-br ${p.gradient} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <Sparkles className="text-foreground/80 group-hover:scale-125 transition-transform duration-500" size={64} />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold mb-3">{p.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>

                <div className="mb-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Key Features</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                        <span className="w-1 h-1 rounded-full bg-primary" /> {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground rounded-full py-2.5 text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all"
                  >
                    <Github size={16} /> View Code
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-full px-4 py-2.5 hover:bg-primary/20 transition-all"
                    aria-label="External link"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
