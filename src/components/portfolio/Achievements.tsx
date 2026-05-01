import { motion } from "framer-motion";
import { Award, Calendar, MapPin } from "lucide-react";

const items = [
  {
    title: "Empower Tech – Technical Expo",
    venue: "VIT",
    date: "March 2025",
    description: "Participated in the technical expo showcasing innovative tech solutions.",
  },
  {
    title: "Smart India Hackathon — Internal Round",
    venue: "SKCET",
    date: "August 2024",
    description: "Competed in the internal round of India's biggest hackathon initiative.",
  },
  {
    title: "Smart India Hackathon — Internal Round",
    venue: "SKCET",
    date: "October 2025",
    description: "Returned to participate again with an upgraded problem-solving approach.",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Participation & <span className="gradient-text">Highlights</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass rounded-2xl p-6 card-hover relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                <Award className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-bold text-lg mb-2">{it.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{it.description}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={12} /> {it.venue}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={12} /> {it.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
