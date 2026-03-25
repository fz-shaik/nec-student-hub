import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Zap, HardDrive, Building2, FlaskConical, Cog, Wifi, BarChart3, Atom, Leaf, ArrowLeft, Users } from "lucide-react";

const departments = [
  { name: "Computer Science & Engineering", code: "CSE", icon: Cpu, students: 720, hod: "Dr. K. Ramesh", established: 1998, intake: 180 },
  { name: "Electronics & Communication Engineering", code: "ECE", icon: Wifi, students: 600, hod: "Dr. P. Lakshmi", established: 2000, intake: 150 },
  { name: "Electrical & Electronics Engineering", code: "EEE", icon: Zap, students: 480, hod: "Dr. S. Venkat", established: 1998, intake: 120 },
  { name: "Mechanical Engineering", code: "MECH", icon: Cog, students: 540, hod: "Dr. R. Naidu", established: 1998, intake: 135 },
  { name: "Civil Engineering", code: "CIVIL", icon: Building2, students: 420, hod: "Dr. M. Prasad", established: 1999, intake: 105 },
  { name: "Information Technology", code: "IT", icon: HardDrive, students: 360, hod: "Dr. A. Kumari", established: 2002, intake: 90 },
  { name: "Chemical Engineering", code: "CHEM", icon: FlaskConical, students: 240, hod: "Dr. B. Rao", established: 2004, intake: 60 },
  { name: "MBA (Master of Business Administration)", code: "MBA", icon: BarChart3, students: 180, hod: "Dr. T. Reddy", established: 2005, intake: 60 },
  { name: "Computer Science & Engineering (AI & ML)", code: "CSE-AIML", icon: Atom, students: 300, hod: "Dr. V. Suresh", established: 2021, intake: 120 },
  { name: "Computer Science & Engineering (Data Science)", code: "CSE-DS", icon: Atom, students: 240, hod: "Dr. N. Priya", established: 2021, intake: 60 },
  { name: "Agricultural Engineering", code: "AGRI", icon: Leaf, students: 180, hod: "Dr. G. Raju", established: 2006, intake: 60 },
  { name: "CSE (Cyber Security)", code: "CSE-CS", icon: Cpu, students: 120, hod: "Dr. D. Mohan", established: 2023, intake: 60 },
];

const totalStudents = departments.reduce((sum, d) => sum + d.students, 0);

const DepartmentsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <Link to="/" className="hover:text-secondary transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="font-display text-2xl font-bold">Academic Departments</h1>
            <p className="text-primary-foreground/70 text-sm">Narasaraopet Engineering College</p>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-primary/5 border-b border-border py-6">
        <div className="container mx-auto px-4 flex flex-wrap gap-8 justify-center">
          <div className="text-center">
            <p className="text-3xl font-bold text-secondary">{departments.length}</p>
            <p className="text-sm text-muted-foreground">Total Departments</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-secondary">{totalStudents.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Total Students</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-secondary">350+</p>
            <p className="text-sm text-muted-foreground">Faculty Members</p>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.code}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-lg bg-primary/5 group-hover:bg-secondary/10 flex items-center justify-center transition-colors">
                  <dept.icon className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">{dept.code}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">{dept.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex justify-between"><span>Head of Dept:</span> <span className="font-medium text-foreground">{dept.hod}</span></p>
                <p className="flex justify-between"><span>Established:</span> <span className="font-medium text-foreground">{dept.established}</span></p>
                <p className="flex justify-between"><span>Annual Intake:</span> <span className="font-medium text-foreground">{dept.intake}</span></p>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                <Users className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-foreground">{dept.students} Students Enrolled</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsPage;
