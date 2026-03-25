import { motion } from "framer-motion";
import { Cpu, Zap, HardDrive, Building2, FlaskConical, Cog, Wifi, BarChart3 } from "lucide-react";

const departments = [
  { name: "Computer Science & Engineering", code: "CSE", icon: Cpu, students: 720, hod: "Dr. K. Ramesh" },
  { name: "Electronics & Communication", code: "ECE", icon: Wifi, students: 600, hod: "Dr. P. Lakshmi" },
  { name: "Electrical & Electronics", code: "EEE", icon: Zap, students: 480, hod: "Dr. S. Venkat" },
  { name: "Mechanical Engineering", code: "MECH", icon: Cog, students: 540, hod: "Dr. R. Naidu" },
  { name: "Civil Engineering", code: "CIVIL", icon: Building2, students: 420, hod: "Dr. M. Prasad" },
  { name: "Information Technology", code: "IT", icon: HardDrive, students: 360, hod: "Dr. A. Kumari" },
  { name: "Chemical Engineering", code: "CHEM", icon: FlaskConical, students: 240, hod: "Dr. B. Rao" },
  { name: "MBA", code: "MBA", icon: BarChart3, students: 180, hod: "Dr. T. Reddy" },
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Departments</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center mb-4 transition-colors">
                <dept.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">{dept.name}</h3>
              <p className="text-xs text-secondary font-semibold mb-3">{dept.code}</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>HOD: {dept.hod}</p>
                <p>Students: {dept.students}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
