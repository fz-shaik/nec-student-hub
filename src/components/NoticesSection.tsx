import { motion } from "framer-motion";
import { Bell, Calendar, ArrowRight } from "lucide-react";

const notices = [
  { title: "Mid-Semester Examinations Schedule Released", date: "Mar 20, 2026", type: "Exam", urgent: true },
  { title: "Annual Tech Fest 'TechNova 2026' Registrations Open", date: "Mar 18, 2026", type: "Event", urgent: false },
  { title: "Scholarship Applications for 2026-27 — Last Date: April 10", date: "Mar 15, 2026", type: "Scholarship", urgent: true },
  { title: "Guest Lecture on AI & Machine Learning — CSE Dept", date: "Mar 14, 2026", type: "Academic", urgent: false },
  { title: "Library Digital Resources — New E-books Available", date: "Mar 12, 2026", type: "General", urgent: false },
  { title: "Campus Recruitment Drive — Infosys & TCS", date: "Mar 10, 2026", type: "Placement", urgent: true },
];

const typeColors: Record<string, string> = {
  Exam: "bg-red-100 text-red-700",
  Event: "bg-blue-100 text-blue-700",
  Scholarship: "bg-green-100 text-green-700",
  Academic: "bg-purple-100 text-purple-700",
  General: "bg-muted text-muted-foreground",
  Placement: "bg-amber-100 text-amber-700",
};

const NoticesSection = () => {
  return (
    <section id="notices" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Stay Updated</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Notices & Announcements</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {notices.map((notice, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover border border-border hover:border-secondary/30 transition-all duration-300 flex items-start gap-4 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center flex-shrink-0 transition-colors">
                <Bell className="h-5 w-5 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${typeColors[notice.type]}`}>
                    {notice.type}
                  </span>
                  {notice.urgent && (
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">
                      Urgent
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{notice.title}</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Calendar className="h-3 w-3" /> {notice.date}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0 mt-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticesSection;
