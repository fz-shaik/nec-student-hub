import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Contact Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {[
            { icon: MapPin, title: "Address", lines: ["Kotappa Konda Road", "Narasaraopet, AP — 522601"] },
            { icon: Phone, title: "Phone", lines: ["+91 8647 252366", "+91 8647 252367"] },
            { icon: Mail, title: "Email", lines: ["info@nec.edu.in", "admissions@nec.edu.in"] },
            { icon: Clock, title: "Office Hours", lines: ["Mon — Sat: 9AM — 5PM", "Sunday: Closed"] },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-sm text-muted-foreground">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
