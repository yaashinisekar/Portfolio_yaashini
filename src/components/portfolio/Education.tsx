import { motion } from "framer-motion";
import { GraduationCap, Calendar, Trophy } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">Education</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            My <span className="gradient-text">Academic Journey</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-10 card-hover relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
              <GraduationCap className="text-primary-foreground" size={28} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">B.Tech Information Technology</h3>
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                  In Progress
                </span>
              </div>
              <p className="text-lg text-foreground/90 mb-3">
                Sri Krishna College of Engineering and Technology
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Calendar size={16} className="text-primary" /> 2023 – 2027
                </span>
                <span className="inline-flex items-center gap-2">
                  <Trophy size={16} className="text-secondary" /> CGPA: <span className="text-foreground font-semibold">8.0</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
