import { motion } from "framer-motion";
import { Briefcase, Building, TrendingUp, Users, ExternalLink } from "lucide-react";

const placements = [
  { company: "TCS", role: "Software Engineer", package: "7.5 LPA", students: 45, type: "IT" },
  { company: "Infosys", role: "Systems Engineer", package: "6.5 LPA", students: 38, type: "IT" },
  { company: "Wipro", role: "Project Engineer", package: "6.0 LPA", students: 32, type: "IT" },
  { company: "HCL Technologies", role: "Graduate Engineer", package: "5.5 LPA", students: 28, type: "IT" },
  { company: "Cognizant", role: "Programmer Analyst", package: "7.0 LPA", students: 22, type: "IT" },
  { company: "Amazon", role: "SDE Intern", package: "12.0 LPA", students: 5, type: "Product" },
  { company: "Capgemini", role: "Analyst", package: "6.8 LPA", students: 20, type: "IT" },
  { company: "L&T Construction", role: "GET Civil", package: "5.0 LPA", students: 10, type: "Core" },
];

const stats = [
  { label: "Students Placed", value: "850+", icon: Users },
  { label: "Highest Package", value: "12 LPA", icon: TrendingUp },
  { label: "Recruiting Companies", value: "60+", icon: Building },
  { label: "Average Package", value: "6.2 LPA", icon: Briefcase },
];

const PlacementsSection = () => {
  return (
    <section id="placements" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Career</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Placements & Recruiters</h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-5 border border-border shadow-card text-center"
            >
              <stat.icon className="h-6 w-6 text-secondary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Placement table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl shadow-card border border-border overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-border">
            <h3 className="font-display font-bold text-foreground">Top Recruiters — 2025-26</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left px-6 py-3 font-semibold text-foreground">Company</th>
                  <th className="text-left px-6 py-3 font-semibold text-foreground">Role</th>
                  <th className="text-left px-6 py-3 font-semibold text-foreground">Package</th>
                  <th className="text-center px-6 py-3 font-semibold text-foreground">Students</th>
                  <th className="text-center px-6 py-3 font-semibold text-foreground">Type</th>
                </tr>
              </thead>
              <tbody>
                {placements.map((p, i) => (
                  <tr key={i} className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-3 font-semibold text-foreground flex items-center gap-2">
                      <Building className="w-4 h-4 text-secondary" />
                      {p.company}
                    </td>
                    <td className="px-6 py-3 text-muted-foreground">{p.role}</td>
                    <td className="px-6 py-3 font-bold text-green-600">{p.package}</td>
                    <td className="px-6 py-3 text-center text-foreground">{p.students}</td>
                    <td className="px-6 py-3 text-center">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${p.type === "Product" ? "bg-purple-100 text-purple-700" : p.type === "Core" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>
                        {p.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
            <span>Showing top {placements.length} recruiters</span>
            <a href="#" className="text-secondary hover:underline flex items-center gap-1">View All <ExternalLink className="w-3 h-3" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementsSection;
