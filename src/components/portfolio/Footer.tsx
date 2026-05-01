import { Heart, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-4 sm:px-6 lg:px-12 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg">
            <span className="gradient-text">Yaashini C</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} All rights reserved. Built with <Heart size={12} className="inline text-primary" /> using React & Tailwind.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { Icon: FaGithub, href: "https://github.com/yaashinisekar", label: "GitHub" },
            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/yaashini-c-083417351", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:yaashinisekar2601@gmail.com", label: "Email" },
            { Icon: Phone, href: "tel:+919363705005", label: "Phone" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
