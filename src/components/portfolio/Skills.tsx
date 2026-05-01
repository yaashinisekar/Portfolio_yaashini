import { motion } from "framer-motion";
import {
  FaJava, FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaFigma, FaNetworkWired,
} from "react-icons/fa";
import {
  SiSpringboot, SiTailwindcss, SiMysql, SiFirebase, SiPowers, SiCanva,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BarChart3, Palette } from "lucide-react";

type Skill = { name: string; description: string; Icon: any; color: string };

const skills: Skill[] = [
  { name: "React.js", description: "Building responsive and interactive frontend applications with reusable components.", Icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", description: "Building dynamic web applications with interactive functionality.", Icon: FaJs, color: "#F7DF1E" },
  { name: "Java", description: "Developing scalable backend applications and object-oriented solutions.", Icon: FaJava, color: "#E76F00" },
  { name: "Spring Boot", description: "Creating secure REST APIs and full-stack backend systems.", Icon: SiSpringboot, color: "#6DB33F" },
  { name: "HTML5", description: "Designing semantic and accessible web page structures.", Icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", description: "Creating responsive modern UI designs and smooth animations.", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind CSS", description: "Crafting clean utility-first interfaces with rapid styling workflows.", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "MySQL", description: "Designing relational schemas and writing optimized database queries.", Icon: SiMysql, color: "#4479A1" },
  { name: "Firebase", description: "Implementing realtime data, auth, and serverless app backends.", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Python", description: "Solving problems through automation, scripting, and data processing.", Icon: FaPython, color: "#3776AB" },
  { name: "Data Analytics", description: "Transforming raw data into meaningful insights and visualizations.", Icon: BarChart3, color: "#A78BFA" },
  { name: "Power BI", description: "Building interactive dashboards and business intelligence reports.", Icon: SiPowers, color: "#F2C811" },
  { name: "REST APIs", description: "Designing and consuming scalable APIs for seamless data exchange.", Icon: TbApi, color: "#10B981" },
  { name: "Git & GitHub", description: "Managing version control and collaborating on team projects.", Icon: FaGitAlt, color: "#F05032" },
  { name: "UI/UX Design", description: "Crafting intuitive, user-centric interfaces with strong visual hierarchy.", Icon: Palette, color: "#EC4899" },
  { name: "Figma", description: "Designing high-fidelity prototypes and modern interface systems.", Icon: FaFigma, color: "#A259FF" },
  { name: "Canva", description: "Creating polished graphics, branding assets, and presentations.", Icon: SiCanva, color: "#00C4CC" },
  { name: "Computer Networks", description: "Understanding protocols, architectures, and network fundamentals.", Icon: FaNetworkWired, color: "#22D3EE" },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Technologies <span className="gradient-text">I work with</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A curated set of tools and technologies I use to design, develop, and deliver impactful digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative h-full"
            >
              {/* Gradient glow on hover */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-500" />

              <div className="glass relative h-full rounded-2xl p-6 flex flex-col card-hover overflow-hidden">
                {/* Subtle corner gradient accent */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: s.color }}
                />

                <div className="relative flex items-start gap-4 mb-4">
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    style={{
                      background: `linear-gradient(135deg, ${s.color}22, ${s.color}11)`,
                      border: `1px solid ${s.color}33`,
                    }}
                  >
                    <s.Icon size={26} style={{ color: s.color }} />
                  </div>
                  <h3
                    className="font-semibold text-lg leading-tight pt-1.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.name}
                  </h3>
                </div>

                <p className="relative text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
