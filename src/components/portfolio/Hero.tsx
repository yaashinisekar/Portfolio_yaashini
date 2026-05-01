import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const roles = [
  "Information Technology Student",
  "UI/UX Designer",
  "Full Stack Developer",
  "Problem Solver",
];

export const Hero = () => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text === current) setTimeout(() => setDel(true), 1500);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === "") {
          setDel(false);
          setIdx((idx + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-muted-foreground">Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Hi, I'm <span className="gradient-text animate-gradient bg-gradient-primary">Yaashini C</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 h-10"
        >
          <span className="gradient-text-alt font-semibold">{text}</span>
          <span className="inline-block w-0.5 h-7 bg-primary ml-1 animate-pulse align-middle" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Crafting beautiful, user-friendly digital experiences with code and design.
          Currently pursuing B.Tech IT @ SKCET.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground rounded-full px-8 h-12 font-semibold shadow-lg shadow-primary/30 hover:scale-105 transition-all"
          >
            <Mail className="mr-2" size={18} /> Get in touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full px-8 h-12 glass border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2" size={18} /> Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { Icon: FaGithub, href: "https://github.com/yaashinisekar", label: "GitHub" },
            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/yaashini-c-083417351", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:yaashinisekar2601@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/20 hover:scale-110 hover:text-primary transition-all"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, y: { repeat: Infinity, duration: 2 } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </motion.button>
      </div>
    </section>
  );
};
