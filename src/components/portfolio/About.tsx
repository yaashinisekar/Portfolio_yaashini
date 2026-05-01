import { motion } from "framer-motion";
import { GraduationCap, MapPin, Languages, Award } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "CGPA", value: "8.0" },
  { icon: Award, label: "Projects", value: "5+" },
  { icon: MapPin, label: "Location", value: "Coimbatore" },
  { icon: Languages, label: "Languages", value: "English, Tamil" },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            A little <span className="gradient-text">about</span> me
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I am an <span className="text-foreground font-semibold">Information Technology student</span> passionate
              about UI/UX Design, Full Stack Development, and Data Analytics. I enjoy building
              user-friendly digital experiences and developing responsive web applications that
              combine creativity with functionality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              My interests include frontend development, modern UI design, analytics dashboards,
              and problem-solving through technology. I am continuously learning new technologies
              and aiming to build impactful real-world projects.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-4 card-hover"
                >
                  <s.icon className="text-primary mb-2" size={22} />
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="font-bold text-foreground">{s.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
