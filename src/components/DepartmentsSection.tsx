import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Zap, HardDrive, Building2, FlaskConical, Cog, Wifi, BarChart3, Atom, Leaf, ArrowRight } from "lucide-react";

const departments = [
  { name: "Computer Science & Engineering", code: "CSE", icon: Cpu, students: 720 },
  { name: "Electronics & Communication", code: "ECE", icon: Wifi, students: 600 },
  { name: "Electrical & Electronics", code: "EEE", icon: Zap, students: 480 },
  { name: "Mechanical Engineering", code: "MECH", icon: Cog, students: 540 },
  { name: "Civil Engineering", code: "CIVIL", icon: Building2, students: 420 },
  { name: "Information Technology", code: "IT", icon: HardDrive, students: 360 },
  { name: "Chemical Engineering", code: "CHEM", icon: FlaskConical, students: 240 },
  { name: "MBA", code: "MBA", icon: BarChart3, students: 180 },
  { name: "CSE (AI & ML)", code: "CSE-AIML", icon: Atom, students: 300 },
  { name: "CSE (Data Science)", code: "CSE-DS", icon: Atom, students: 240 },
  { name: "Agricultural Engineering", code: "AGRI", icon: Leaf, students: 180 },
  { name: "CSE (Cyber Security)", code: "CSE-CS", icon: Cpu, students: 120 },
];

const DepartmentsSection = () => {
  return (
    <section id="departments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Academic Divisions</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our {departments.length} Departments</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center mb-4 transition-colors">
                <dept.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">{dept.name}</h3>
              <p className="text-xs text-secondary font-semibold mb-2">{dept.code}</p>
              <p className="text-sm text-muted-foreground">{dept.students} Students</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Departments <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
