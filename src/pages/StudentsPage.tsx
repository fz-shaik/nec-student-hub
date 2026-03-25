import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, ChevronDown, BookOpen, ClipboardCheck, IndianRupee, FolderGit2, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StudentRecord {
  id: string;
  name: string;
  phone: string;
  dept: string;
  year: string;
  graduationYear: number;
  cgpa: number;
  status: string;
  feesPaid: number;
  feesTotal: number;
  attendance: number;
  projects: string[];
  semesters: {
    sem: number;
    gpa: number;
    subjects: { name: string; internal: number; external: number; total: number; grade: string }[];
  }[];
}

const allStudents: StudentRecord[] = [
  {
    id: "NEC21CS001", name: "Aditya Sharma", phone: "9876543210", dept: "CSE", year: "IV", graduationYear: 2025, cgpa: 9.2, status: "Active",
    feesPaid: 320000, feesTotal: 400000, attendance: 92,
    projects: ["AI-based Attendance System", "E-Commerce Platform"],
    semesters: [
      { sem: 1, gpa: 8.8, subjects: [{ name: "Mathematics-I", internal: 28, external: 58, total: 86, grade: "A" }, { name: "Physics", internal: 25, external: 52, total: 77, grade: "B+" }, { name: "Programming in C", internal: 30, external: 60, total: 90, grade: "A+" }, { name: "English", internal: 22, external: 48, total: 70, grade: "B" }] },
      { sem: 2, gpa: 9.0, subjects: [{ name: "Mathematics-II", internal: 29, external: 60, total: 89, grade: "A+" }, { name: "Chemistry", internal: 26, external: 54, total: 80, grade: "A" }, { name: "Data Structures", internal: 30, external: 62, total: 92, grade: "A+" }, { name: "Digital Logic", internal: 27, external: 55, total: 82, grade: "A" }] },
      { sem: 3, gpa: 9.1, subjects: [{ name: "DBMS", internal: 28, external: 60, total: 88, grade: "A+" }, { name: "OS", internal: 27, external: 56, total: 83, grade: "A" }, { name: "OOP with Java", internal: 30, external: 61, total: 91, grade: "A+" }, { name: "Discrete Math", internal: 26, external: 58, total: 84, grade: "A" }] },
      { sem: 4, gpa: 9.3, subjects: [{ name: "Computer Networks", internal: 29, external: 62, total: 91, grade: "A+" }, { name: "Software Engg", internal: 28, external: 58, total: 86, grade: "A" }, { name: "DAA", internal: 30, external: 63, total: 93, grade: "A+" }, { name: "Probability & Stats", internal: 27, external: 57, total: 84, grade: "A" }] },
      { sem: 5, gpa: 9.4, subjects: [{ name: "Machine Learning", internal: 30, external: 64, total: 94, grade: "A+" }, { name: "Web Technologies", internal: 29, external: 60, total: 89, grade: "A+" }, { name: "Compiler Design", internal: 28, external: 57, total: 85, grade: "A" }, { name: "Cryptography", internal: 27, external: 58, total: 85, grade: "A" }] },
      { sem: 6, gpa: 9.5, subjects: [{ name: "Cloud Computing", internal: 30, external: 65, total: 95, grade: "A+" }, { name: "AI", internal: 29, external: 62, total: 91, grade: "A+" }, { name: "Big Data", internal: 28, external: 60, total: 88, grade: "A+" }, { name: "IoT", internal: 27, external: 59, total: 86, grade: "A" }] },
    ],
  },
  {
    id: "NEC21EC015", name: "Priya Reddy", phone: "9876543211", dept: "ECE", year: "IV", graduationYear: 2025, cgpa: 8.8, status: "Active",
    feesPaid: 380000, feesTotal: 400000, attendance: 88,
    projects: ["Smart Home Automation", "Signal Processing Tool"],
    semesters: [
      { sem: 1, gpa: 8.5, subjects: [{ name: "Mathematics-I", internal: 26, external: 55, total: 81, grade: "A" }, { name: "Physics", internal: 24, external: 50, total: 74, grade: "B+" }, { name: "Basic Electronics", internal: 28, external: 58, total: 86, grade: "A" }, { name: "English", internal: 23, external: 47, total: 70, grade: "B" }] },
      { sem: 2, gpa: 8.7, subjects: [{ name: "Mathematics-II", internal: 27, external: 57, total: 84, grade: "A" }, { name: "Network Analysis", internal: 25, external: 52, total: 77, grade: "B+" }, { name: "Electronic Devices", internal: 29, external: 59, total: 88, grade: "A+" }, { name: "Signals & Systems", internal: 26, external: 55, total: 81, grade: "A" }] },
    ],
  },
  {
    id: "NEC22ME032", name: "Ravi Kumar", phone: "9876543212", dept: "MECH", year: "III", graduationYear: 2026, cgpa: 7.5, status: "Active",
    feesPaid: 240000, feesTotal: 300000, attendance: 78,
    projects: ["CNC Machine Design"],
    semesters: [
      { sem: 1, gpa: 7.2, subjects: [{ name: "Mathematics-I", internal: 20, external: 45, total: 65, grade: "B" }, { name: "Physics", internal: 22, external: 48, total: 70, grade: "B" }, { name: "Engineering Drawing", internal: 25, external: 52, total: 77, grade: "B+" }, { name: "Workshop", internal: 28, external: 55, total: 83, grade: "A" }] },
      { sem: 2, gpa: 7.6, subjects: [{ name: "Mathematics-II", internal: 22, external: 48, total: 70, grade: "B" }, { name: "Thermodynamics", internal: 24, external: 50, total: 74, grade: "B+" }, { name: "Mechanics of Solids", internal: 23, external: 49, total: 72, grade: "B+" }, { name: "Manufacturing", internal: 26, external: 54, total: 80, grade: "A" }] },
    ],
  },
  {
    id: "NEC22CS044", name: "Sneha Patil", phone: "9876543213", dept: "CSE", year: "III", graduationYear: 2026, cgpa: 9.5, status: "Active",
    feesPaid: 300000, feesTotal: 300000, attendance: 95,
    projects: ["Blockchain Voting System", "Hospital Management System", "Chat Application"],
    semesters: [
      { sem: 1, gpa: 9.3, subjects: [{ name: "Mathematics-I", internal: 30, external: 62, total: 92, grade: "A+" }, { name: "Physics", internal: 28, external: 58, total: 86, grade: "A" }, { name: "Programming in C", internal: 30, external: 65, total: 95, grade: "A+" }, { name: "English", internal: 27, external: 55, total: 82, grade: "A" }] },
      { sem: 2, gpa: 9.5, subjects: [{ name: "Mathematics-II", internal: 30, external: 63, total: 93, grade: "A+" }, { name: "Chemistry", internal: 28, external: 57, total: 85, grade: "A" }, { name: "Data Structures", internal: 30, external: 66, total: 96, grade: "A+" }, { name: "Digital Logic", internal: 29, external: 60, total: 89, grade: "A+" }] },
    ],
  },
  {
    id: "NEC23EE010", name: "Vikram Singh", phone: "9876543214", dept: "EEE", year: "II", graduationYear: 2027, cgpa: 8.1, status: "Active",
    feesPaid: 95000, feesTotal: 150000, attendance: 82,
    projects: ["Solar Panel Tracker"],
    semesters: [
      { sem: 1, gpa: 7.9, subjects: [{ name: "Mathematics-I", internal: 24, external: 50, total: 74, grade: "B+" }, { name: "Physics", internal: 22, external: 48, total: 70, grade: "B" }, { name: "Basic Electrical", internal: 27, external: 56, total: 83, grade: "A" }, { name: "English", internal: 25, external: 52, total: 77, grade: "B+" }] },
      { sem: 2, gpa: 8.3, subjects: [{ name: "Mathematics-II", internal: 26, external: 54, total: 80, grade: "A" }, { name: "Circuit Theory", internal: 25, external: 52, total: 77, grade: "B+" }, { name: "EM Theory", internal: 28, external: 58, total: 86, grade: "A" }, { name: "Measurements", internal: 27, external: 55, total: 82, grade: "A" }] },
    ],
  },
  {
    id: "NEC23IT022", name: "Anjali Devi", phone: "9876543215", dept: "IT", year: "II", graduationYear: 2027, cgpa: 8.9, status: "Active",
    feesPaid: 150000, feesTotal: 150000, attendance: 90,
    projects: ["Library Management System"],
    semesters: [
      { sem: 1, gpa: 8.7, subjects: [{ name: "Mathematics-I", internal: 27, external: 56, total: 83, grade: "A" }, { name: "Physics", internal: 25, external: 53, total: 78, grade: "B+" }, { name: "Programming in C", internal: 29, external: 60, total: 89, grade: "A+" }, { name: "English", internal: 26, external: 54, total: 80, grade: "A" }] },
    ],
  },
  {
    id: "NEC21CE008", name: "Karthik Rao", phone: "9876543216", dept: "CIVIL", year: "IV", graduationYear: 2025, cgpa: 7.8, status: "Active",
    feesPaid: 350000, feesTotal: 400000, attendance: 80,
    projects: ["Green Building Design", "Structural Analysis Tool"],
    semesters: [
      { sem: 1, gpa: 7.5, subjects: [{ name: "Mathematics-I", internal: 22, external: 47, total: 69, grade: "B" }, { name: "Physics", internal: 23, external: 49, total: 72, grade: "B+" }, { name: "Surveying", internal: 26, external: 54, total: 80, grade: "A" }, { name: "English", internal: 21, external: 45, total: 66, grade: "B" }] },
    ],
  },
  {
    id: "NEC24CS005", name: "Meera Joshi", phone: "9876543217", dept: "CSE", year: "I", graduationYear: 2028, cgpa: 9.0, status: "Active",
    feesPaid: 50000, feesTotal: 100000, attendance: 94,
    projects: [],
    semesters: [
      { sem: 1, gpa: 9.0, subjects: [{ name: "Mathematics-I", internal: 29, external: 61, total: 90, grade: "A+" }, { name: "Physics", internal: 27, external: 57, total: 84, grade: "A" }, { name: "Programming in C", internal: 30, external: 63, total: 93, grade: "A+" }, { name: "English", internal: 26, external: 55, total: 81, grade: "A" }] },
    ],
  },
  {
    id: "NEC22EC028", name: "Rahul Verma", phone: "9876543218", dept: "ECE", year: "III", graduationYear: 2026, cgpa: 8.3, status: "Active",
    feesPaid: 280000, feesTotal: 300000, attendance: 85,
    projects: ["Drone Navigation System"],
    semesters: [
      { sem: 1, gpa: 8.0, subjects: [{ name: "Mathematics-I", internal: 25, external: 52, total: 77, grade: "B+" }, { name: "Physics", internal: 24, external: 50, total: 74, grade: "B+" }, { name: "Basic Electronics", internal: 27, external: 57, total: 84, grade: "A" }, { name: "English", internal: 23, external: 48, total: 71, grade: "B+" }] },
    ],
  },
  {
    id: "NEC23ME019", name: "Divya Lakshmi", phone: "9876543219", dept: "MECH", year: "II", graduationYear: 2027, cgpa: 7.9, status: "Active",
    feesPaid: 140000, feesTotal: 150000, attendance: 83,
    projects: ["3D Printing Research"],
    semesters: [
      { sem: 1, gpa: 7.7, subjects: [{ name: "Mathematics-I", internal: 22, external: 47, total: 69, grade: "B" }, { name: "Physics", internal: 24, external: 50, total: 74, grade: "B+" }, { name: "Engineering Drawing", internal: 27, external: 55, total: 82, grade: "A" }, { name: "Workshop", internal: 26, external: 53, total: 79, grade: "B+" }] },
    ],
  },
  {
    id: "NEC21MB003", name: "Suresh Babu", phone: "9876543220", dept: "MBA", year: "II", graduationYear: 2025, cgpa: 8.6, status: "Active",
    feesPaid: 180000, feesTotal: 200000, attendance: 87,
    projects: ["Market Analysis Dashboard"],
    semesters: [
      { sem: 1, gpa: 8.4, subjects: [{ name: "Management Principles", internal: 26, external: 55, total: 81, grade: "A" }, { name: "Financial Accounting", internal: 25, external: 53, total: 78, grade: "B+" }, { name: "Business Statistics", internal: 28, external: 58, total: 86, grade: "A" }, { name: "Marketing", internal: 27, external: 56, total: 83, grade: "A" }] },
    ],
  },
  {
    id: "NEC24EE012", name: "Pooja Nair", phone: "9876543221", dept: "EEE", year: "I", graduationYear: 2028, cgpa: 8.7, status: "Active",
    feesPaid: 45000, feesTotal: 100000, attendance: 91,
    projects: [],
    semesters: [
      { sem: 1, gpa: 8.7, subjects: [{ name: "Mathematics-I", internal: 27, external: 57, total: 84, grade: "A" }, { name: "Physics", internal: 26, external: 55, total: 81, grade: "A" }, { name: "Basic Electrical", internal: 29, external: 60, total: 89, grade: "A+" }, { name: "English", internal: 25, external: 53, total: 78, grade: "B+" }] },
    ],
  },
  {
    id: "NEC23AI007", name: "Harsha Vardhan", phone: "9876543222", dept: "CSE-AIML", year: "II", graduationYear: 2027, cgpa: 8.5, status: "Active",
    feesPaid: 130000, feesTotal: 150000, attendance: 86,
    projects: ["Chatbot with NLP"],
    semesters: [
      { sem: 1, gpa: 8.3, subjects: [{ name: "Mathematics-I", internal: 26, external: 54, total: 80, grade: "A" }, { name: "Python Programming", internal: 29, external: 60, total: 89, grade: "A+" }, { name: "AI Fundamentals", internal: 27, external: 56, total: 83, grade: "A" }, { name: "English", internal: 24, external: 50, total: 74, grade: "B+" }] },
    ],
  },
  {
    id: "NEC23DS011", name: "Kavya Sri", phone: "9876543223", dept: "CSE-DS", year: "II", graduationYear: 2027, cgpa: 9.1, status: "Active",
    feesPaid: 150000, feesTotal: 150000, attendance: 93,
    projects: ["Data Visualization Dashboard", "Predictive Analytics"],
    semesters: [
      { sem: 1, gpa: 9.0, subjects: [{ name: "Mathematics-I", internal: 29, external: 61, total: 90, grade: "A+" }, { name: "Python Programming", internal: 30, external: 63, total: 93, grade: "A+" }, { name: "Statistics", internal: 28, external: 59, total: 87, grade: "A+" }, { name: "English", internal: 26, external: 55, total: 81, grade: "A" }] },
    ],
  },
];

const depts = ["All", "CSE", "ECE", "EEE", "MECH", "CIVIL", "IT", "CHEM", "MBA", "CSE-AIML", "CSE-DS", "AGRI", "CSE-CS"];

const StudentsPage = () => {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null);

  const filtered = useMemo(() => {
    return allStudents.filter((s) => {
      const q = search.toLowerCase();
      const matchSearch = !q || s.name.toLowerCase().includes(q) || s.id.toLowerCase().includes(q) || s.phone.includes(q);
      const matchDept = deptFilter === "All" || s.dept === deptFilter;
      return matchSearch && matchDept;
    });
  }, [search, deptFilter]);

  if (selectedStudent) {
    return <StudentDetail student={selectedStudent} onBack={() => setSelectedStudent(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <Link to="/" className="hover:text-secondary transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="font-display text-2xl font-bold">Student Directory</h1>
            <p className="text-primary-foreground/70 text-sm">Search by Roll No, Name, or Phone Number</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Search & Filters */}
        <div className="bg-card rounded-xl shadow-card border border-border p-4 md:p-6 mb-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by Name, Roll No, or Phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="relative">
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring w-full sm:w-auto"
            >
              {depts.map((d) => (
                <option key={d} value={d}>{d === "All" ? "All Departments" : d}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Student Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((student, i) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              onClick={() => setSelectedStudent(student)}
              className="bg-card rounded-xl p-5 border border-border hover:border-secondary/30 shadow-card hover:shadow-card-hover transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-display font-bold text-foreground">{student.name}</h3>
                  <p className="text-xs font-mono text-muted-foreground">{student.id}</p>
                </div>
                <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-full">{student.dept}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs mt-3">
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="font-bold text-foreground">{student.cgpa}</p>
                  <p className="text-muted-foreground">CGPA</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="font-bold text-foreground">{student.attendance}%</p>
                  <p className="text-muted-foreground">Attend.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="font-bold text-foreground">Year {student.year}</p>
                  <p className="text-muted-foreground">Current</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-right">Click to view full details →</p>
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">No students found matching your search criteria.</div>
        )}
        <div className="mt-6 text-sm text-muted-foreground text-center">
          Showing {filtered.length} of {allStudents.length} students
        </div>
      </div>
    </div>
  );
};

const StudentDetail = ({ student, onBack }: { student: StudentRecord; onBack: () => void }) => {
  const feePercent = Math.round((student.feesPaid / student.feesTotal) * 100);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <button onClick={onBack} className="hover:text-secondary transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div>
            <h1 className="font-display text-2xl font-bold">{student.name}</h1>
            <p className="text-primary-foreground/70 text-sm">{student.id} • {student.dept} • Graduating {student.graduationYear}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {[
            { label: "CGPA", value: student.cgpa, icon: BookOpen },
            { label: "Attendance", value: `${student.attendance}%`, icon: ClipboardCheck },
            { label: "Fees Paid", value: `${feePercent}%`, icon: IndianRupee },
            { label: "Projects", value: student.projects.length, icon: FolderGit2 },
            { label: "Graduation", value: student.graduationYear, icon: GraduationCap },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl p-4 border border-border text-center shadow-card">
              <stat.icon className="h-5 w-5 text-secondary mx-auto mb-2" />
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <Tabs defaultValue="marks" className="space-y-4">
          <TabsList className="w-full flex flex-wrap h-auto gap-1">
            <TabsTrigger value="marks">Exam Marks</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="fees">Fees</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="info">Personal Info</TabsTrigger>
          </TabsList>

          <TabsContent value="marks">
            <div className="space-y-4">
              {student.semesters.map((sem) => (
                <div key={sem.sem} className="bg-card rounded-xl border border-border overflow-hidden shadow-card">
                  <div className="bg-primary/5 px-6 py-3 flex justify-between items-center">
                    <h3 className="font-display font-bold text-foreground">Semester {sem.sem}</h3>
                    <span className="text-sm font-semibold text-secondary">GPA: {sem.gpa}</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left px-6 py-2 font-semibold text-foreground">Subject</th>
                          <th className="text-center px-4 py-2 font-semibold text-foreground">Internal</th>
                          <th className="text-center px-4 py-2 font-semibold text-foreground">External</th>
                          <th className="text-center px-4 py-2 font-semibold text-foreground">Total</th>
                          <th className="text-center px-4 py-2 font-semibold text-foreground">Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sem.subjects.map((sub) => (
                          <tr key={sub.name} className="border-b border-border last:border-0">
                            <td className="px-6 py-2 text-foreground">{sub.name}</td>
                            <td className="text-center px-4 py-2 text-muted-foreground">{sub.internal}/30</td>
                            <td className="text-center px-4 py-2 text-muted-foreground">{sub.external}/70</td>
                            <td className="text-center px-4 py-2 font-semibold text-foreground">{sub.total}/100</td>
                            <td className="text-center px-4 py-2">
                              <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${sub.grade.startsWith("A") ? "bg-green-500/10 text-green-600" : "bg-secondary/10 text-secondary"}`}>
                                {sub.grade}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="attendance">
            <div className="bg-card rounded-xl p-6 border border-border shadow-card">
              <h3 className="font-display font-bold text-foreground mb-4">Attendance Overview</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="hsl(var(--secondary))" strokeWidth="3" strokeDasharray={`${student.attendance}, 100`} />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-foreground">{student.attendance}%</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">Total Working Days: <span className="font-semibold text-foreground">220</span></p>
                  <p className="text-muted-foreground">Days Present: <span className="font-semibold text-foreground">{Math.round(220 * student.attendance / 100)}</span></p>
                  <p className="text-muted-foreground">Days Absent: <span className="font-semibold text-foreground">{220 - Math.round(220 * student.attendance / 100)}</span></p>
                  <p className={`font-semibold ${student.attendance >= 75 ? "text-green-600" : "text-red-500"}`}>
                    {student.attendance >= 75 ? "✓ Eligible for exams" : "✗ Shortage — Not eligible"}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fees">
            <div className="bg-card rounded-xl p-6 border border-border shadow-card">
              <h3 className="font-display font-bold text-foreground mb-4">Fee Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Fees</span>
                  <span className="font-semibold text-foreground">₹{student.feesTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Fees Paid</span>
                  <span className="font-semibold text-green-600">₹{student.feesPaid.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Balance Due</span>
                  <span className="font-semibold text-red-500">₹{(student.feesTotal - student.feesPaid).toLocaleString()}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-secondary rounded-full transition-all" style={{ width: `${feePercent}%` }} />
                </div>
                <p className="text-xs text-muted-foreground text-center">{feePercent}% paid</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="bg-card rounded-xl p-6 border border-border shadow-card">
              <h3 className="font-display font-bold text-foreground mb-4">Projects ({student.projects.length})</h3>
              {student.projects.length === 0 ? (
                <p className="text-muted-foreground text-sm">No projects submitted yet.</p>
              ) : (
                <div className="space-y-3">
                  {student.projects.map((proj, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <FolderGit2 className="h-5 w-5 text-secondary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{proj}</p>
                        <p className="text-xs text-muted-foreground">Semester {i + 3} Project</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="info">
            <div className="bg-card rounded-xl p-6 border border-border shadow-card">
              <h3 className="font-display font-bold text-foreground mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {[
                  { label: "Full Name", value: student.name },
                  { label: "Roll Number", value: student.id },
                  { label: "Phone Number", value: student.phone },
                  { label: "Department", value: student.dept },
                  { label: "Current Year", value: student.year },
                  { label: "Graduation Year", value: student.graduationYear },
                  { label: "CGPA", value: student.cgpa },
                  { label: "Status", value: student.status },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentsPage;
