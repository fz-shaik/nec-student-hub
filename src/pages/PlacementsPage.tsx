import { motion } from "framer-motion";
import { Briefcase, Building, TrendingUp, Users, ArrowLeft, Award, GraduationCap, Star, ExternalLink, Target, BarChart3, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { label: "Students Placed", value: "850+", icon: Users, color: "text-blue-600 bg-blue-100" },
  { label: "Highest Package", value: "12 LPA", icon: TrendingUp, color: "text-green-600 bg-green-100" },
  { label: "Recruiting Companies", value: "60+", icon: Building, color: "text-purple-600 bg-purple-100" },
  { label: "Average Package", value: "6.2 LPA", icon: Briefcase, color: "text-amber-600 bg-amber-100" },
  { label: "Placement Rate", value: "87%", icon: Target, color: "text-red-600 bg-red-100" },
  { label: "Internships Offered", value: "200+", icon: GraduationCap, color: "text-teal-600 bg-teal-100" },
];

const topRecruiters = [
  { company: "TCS", role: "Software Engineer", package: "7.5 LPA", students: 45, type: "IT" },
  { company: "Infosys", role: "Systems Engineer", package: "6.5 LPA", students: 38, type: "IT" },
  { company: "Wipro", role: "Project Engineer", package: "6.0 LPA", students: 32, type: "IT" },
  { company: "HCL Technologies", role: "Graduate Engineer", package: "5.5 LPA", students: 28, type: "IT" },
  { company: "Cognizant", role: "Programmer Analyst", package: "7.0 LPA", students: 22, type: "IT" },
  { company: "Amazon", role: "SDE Intern", package: "12.0 LPA", students: 5, type: "Product" },
  { company: "Capgemini", role: "Analyst", package: "6.8 LPA", students: 20, type: "IT" },
  { company: "L&T Construction", role: "GET Civil", package: "5.0 LPA", students: 10, type: "Core" },
  { company: "Accenture", role: "Associate Software Eng", package: "6.5 LPA", students: 25, type: "IT" },
  { company: "Tech Mahindra", role: "Software Developer", package: "5.8 LPA", students: 18, type: "IT" },
  { company: "Deloitte", role: "Analyst", package: "8.0 LPA", students: 8, type: "Consulting" },
  { company: "Hexaware", role: "Trainee Engineer", package: "5.0 LPA", students: 15, type: "IT" },
];

const topPlacedStudents = [
  { name: "Aditya Sharma", branch: "CSE", company: "Amazon", package: "12 LPA", year: "2025" },
  { name: "Priya Reddy", branch: "ECE", company: "Deloitte", package: "8 LPA", year: "2025" },
  { name: "Ravi Kumar", branch: "CSE", company: "Cognizant", package: "7 LPA", year: "2025" },
  { name: "Sneha Patil", branch: "IT", company: "TCS", package: "7.5 LPA", year: "2025" },
  { name: "Vikram Singh", branch: "EEE", company: "L&T", package: "5 LPA", year: "2025" },
  { name: "Kavya Sri", branch: "CSE-DS", company: "Accenture", package: "6.5 LPA", year: "2025" },
];

const yearWise = [
  { year: "2025-26", placed: 850, total: 980, percentage: "87%" },
  { year: "2024-25", placed: 790, total: 950, percentage: "83%" },
  { year: "2023-24", placed: 720, total: 920, percentage: "78%" },
  { year: "2022-23", placed: 680, total: 900, percentage: "76%" },
];

const PlacementsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Placements & Recruiters</h1>
                <p className="text-muted-foreground text-sm">Career opportunities at NEC — 2025-26</p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-xl p-5 border border-border shadow-card text-center">
                <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Year-wise Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
            <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-secondary" /> Year-wise Placement Trends
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {yearWise.map((yw, i) => (
                <div key={yw.year} className="bg-card rounded-xl p-5 border border-border shadow-card">
                  <p className="text-sm font-semibold text-secondary mb-2">{yw.year}</p>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">{yw.percentage}</span>
                    <span className="text-xs text-muted-foreground mb-1">placement rate</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div className="bg-secondary rounded-full h-2 transition-all" style={{ width: yw.percentage }} />
                  </div>
                  <p className="text-xs text-muted-foreground">{yw.placed} / {yw.total} students placed</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top Placed Students */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
            <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-secondary" /> Top Placed Students
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topPlacedStudents.map((s, i) => (
                <motion.div key={s.name} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.05 }} className="bg-card rounded-xl p-5 border border-border shadow-card hover:border-secondary/30 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.branch} — Batch {s.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Building className="w-3 h-3" /> {s.company}</span>
                    <span className="text-sm font-bold text-green-600">{s.package}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recruiters Table */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border flex items-center gap-2">
              <Award className="w-5 h-5 text-secondary" />
              <h2 className="font-display font-bold text-foreground">All Recruiters — 2025-26</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5">
                    <th className="text-left px-6 py-3 font-semibold text-foreground">#</th>
                    <th className="text-left px-6 py-3 font-semibold text-foreground">Company</th>
                    <th className="text-left px-6 py-3 font-semibold text-foreground">Role</th>
                    <th className="text-left px-6 py-3 font-semibold text-foreground">Package</th>
                    <th className="text-center px-6 py-3 font-semibold text-foreground">Students</th>
                    <th className="text-center px-6 py-3 font-semibold text-foreground">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {topRecruiters.map((p, i) => (
                    <tr key={i} className="border-t border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-3 text-muted-foreground">{i + 1}</td>
                      <td className="px-6 py-3 font-semibold text-foreground flex items-center gap-2">
                        <Building className="w-4 h-4 text-secondary" /> {p.company}
                      </td>
                      <td className="px-6 py-3 text-muted-foreground">{p.role}</td>
                      <td className="px-6 py-3 font-bold text-green-600">{p.package}</td>
                      <td className="px-6 py-3 text-center text-foreground">{p.students}</td>
                      <td className="px-6 py-3 text-center">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${p.type === "Product" ? "bg-purple-100 text-purple-700" : p.type === "Core" ? "bg-amber-100 text-amber-700" : p.type === "Consulting" ? "bg-teal-100 text-teal-700" : "bg-blue-100 text-blue-700"}`}>
                          {p.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlacementsPage;
