import { motion } from "framer-motion";
import { Bell, Calendar, ArrowLeft, Search, Filter, AlertTriangle, Megaphone, BookOpen, Award, Briefcase, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allNotices = [
  { title: "Mid-Semester Examinations Schedule Released", date: "Mar 20, 2026", type: "Exam", urgent: true, desc: "Mid-semester exams for all branches will commence from April 5, 2026. Detailed timetable available at exam cell." },
  { title: "Annual Tech Fest 'TechNova 2026' Registrations Open", date: "Mar 18, 2026", type: "Event", urgent: false, desc: "Register for workshops, hackathons, and cultural events. Early bird discounts available until March 25." },
  { title: "Scholarship Applications for 2026-27 — Last Date: April 10", date: "Mar 15, 2026", type: "Scholarship", urgent: true, desc: "SC/ST/OBC and merit-based scholarship applications are now open. Submit documents to the scholarship cell." },
  { title: "Guest Lecture on AI & Machine Learning — CSE Dept", date: "Mar 14, 2026", type: "Academic", urgent: false, desc: "Dr. Ramesh Iyer from IIT Hyderabad will deliver a guest lecture on recent advances in AI/ML." },
  { title: "Library Digital Resources — New E-books Available", date: "Mar 12, 2026", type: "General", urgent: false, desc: "500+ new e-books and journals added to the digital library. Access via student portal." },
  { title: "Campus Recruitment Drive — Infosys & TCS", date: "Mar 10, 2026", type: "Placement", urgent: true, desc: "Pre-placement talks on March 12. Eligible students must register on the placement portal by March 11." },
  { title: "Sports Day 2026 — Registration Now Open", date: "Mar 8, 2026", type: "Event", urgent: false, desc: "Annual sports day events include cricket, athletics, badminton, and volleyball. Register with your PE department." },
  { title: "Final Year Project Submission Deadline Extended", date: "Mar 5, 2026", type: "Academic", urgent: true, desc: "The deadline for final year project reports has been extended to April 20, 2026." },
  { title: "Anti-Ragging Committee — Awareness Session", date: "Mar 3, 2026", type: "General", urgent: false, desc: "Mandatory awareness session for all first-year students on March 7 in the main auditorium." },
  { title: "Hostel Fee Payment Reminder — Due by March 31", date: "Mar 1, 2026", type: "General", urgent: true, desc: "All hostel students must clear pending fees before March 31 to avoid late charges." },
  { title: "GATE 2026 Coaching Classes Starting", date: "Feb 28, 2026", type: "Academic", urgent: false, desc: "Free GATE coaching classes for CSE and ECE students starting from March 10. Register at the training cell." },
  { title: "Blood Donation Camp — NSS Unit", date: "Feb 25, 2026", type: "Event", urgent: false, desc: "NSS unit organizing a blood donation camp on March 2. All students and staff are encouraged to participate." },
  { title: "New Bus Routes Added for 2026-27", date: "Feb 22, 2026", type: "General", urgent: false, desc: "Three new bus routes covering Chilakaluripet, Piduguralla, and Sattenapalli areas have been added." },
  { title: "Cognizant Pool Campus Drive — March 15", date: "Feb 20, 2026", type: "Placement", urgent: true, desc: "Cognizant conducting pool campus drive for B.Tech 2026 batch. Package: 7 LPA. Register on placement portal." },
];

const types = ["All", "Exam", "Event", "Scholarship", "Academic", "General", "Placement"];

const typeIcons: Record<string, React.ElementType> = {
  Exam: AlertTriangle, Event: Megaphone, Scholarship: Award, Academic: BookOpen, General: Info, Placement: Briefcase,
};

const typeColors: Record<string, string> = {
  Exam: "bg-red-100 text-red-700",
  Event: "bg-blue-100 text-blue-700",
  Scholarship: "bg-green-100 text-green-700",
  Academic: "bg-purple-100 text-purple-700",
  General: "bg-muted text-muted-foreground",
  Placement: "bg-amber-100 text-amber-700",
};

const NoticesPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    return allNotices.filter((n) => {
      const matchType = filter === "All" || n.type === filter;
      const matchSearch = !search.trim() || n.title.toLowerCase().includes(search.toLowerCase());
      return matchType && matchSearch;
    });
  }, [search, filter]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Bell className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Notices & News</h1>
                <p className="text-muted-foreground text-sm">Stay updated with latest announcements</p>
              </div>
            </div>
          </motion.div>

          {/* Search & Filter */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search notices..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {types.map((t) => (
                <button key={t} onClick={() => setFilter(t)} className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${filter === t ? "bg-secondary text-secondary-foreground border-secondary" : "bg-card text-muted-foreground border-border hover:border-secondary/40"}`}>
                  {t}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Notices List */}
          <div className="space-y-4">
            {filtered.map((notice, i) => {
              const Icon = typeIcons[notice.type] || Bell;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="group bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover border border-border hover:border-secondary/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon className="h-5 w-5 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${typeColors[notice.type]}`}>{notice.type}</span>
                        {notice.urgent && <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">Urgent</span>}
                      </div>
                      <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{notice.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{notice.desc}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                        <Calendar className="h-3 w-3" /> {notice.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            {filtered.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">No notices found.</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoticesPage;
