import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_m6d91zh";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_9tqy0ql";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "7ib-3Q8dK3941EEXN";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(5, "Message too short").max(2000),
});

const contactCards = [
  { icon: Mail, label: "Email", value: "yaashinisekar2601@gmail.com", href: "mailto:yaashinisekar2601@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9363705005", href: "tel:+919363705005" },
  { icon: MapPin, label: "Location", value: "Coimbatore, Tamil Nadu", href: "#" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: parsed.data.name,
          from_email: parsed.data.email,
          subject: parsed.data.subject,
          message: parsed.data.message,
          to_name: "Yaashini C",
          to_email: "yaashinisekar2601@gmail.com",
          reply_to: parsed.data.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      console.log("EmailJS success:", result.status, result.text);
      toast.success("Message sent successfully. Thank you for reaching out!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error: unknown) {
      const err = error as { status?: number; text?: string; message?: string };
      console.error("EmailJS error — status:", err?.status, "text:", err?.text, "message:", err?.message);
      toast.error(`Failed to send: ${err?.text ?? err?.message ?? "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's <span className="gradient-text">work together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have an opportunity, project, or just want to say hi? Drop me a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactCards.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="glass rounded-2xl p-5 flex items-center gap-4 card-hover block"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <c.icon className="text-primary-foreground" size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="font-semibold truncate">{c.value}</p>
                </div>
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="https://www.linkedin.com/in/yaashini-c-083417351" target="_blank" rel="noopener noreferrer"
                 className="glass flex-1 rounded-2xl py-3 flex items-center justify-center gap-2 hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com/yaashinisekar" target="_blank" rel="noopener noreferrer"
                 className="glass flex-1 rounded-2xl py-3 flex items-center justify-center gap-2 hover:bg-primary/20 hover:text-primary transition-all">
                <Github size={18} /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-3xl p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="bg-background/50 border-border h-12 rounded-xl"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="bg-background/50 border-border h-12 rounded-xl"
              />
            </div>
            <Input
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              maxLength={150}
              className="bg-background/50 border-border h-12 rounded-xl"
            />
            <Textarea
              placeholder="Your message"
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={2000}
              className="bg-background/50 border-border rounded-xl resize-none"
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 hover:scale-[1.02] transition-all"
            >
              <Send className="mr-2" size={18} />
              {loading ? "Sending…" : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
