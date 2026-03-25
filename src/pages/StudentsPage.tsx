import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, ChevronDown, BookOpen, ClipboardCheck, IndianRupee, FolderGit2, GraduationCap, User, UserRound, Phone, MapPin, Building2, BadgeCheck, Calendar, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

interface StudentRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  gender: "Male" | "Female";
  dept: string;
  year: string;
  graduationYear: number;
  cgpa: number;
  status: string;
  feesPaid: number;
  feesTotal: number;
  attendance: number;
  block: string;
  section: string;
  fatherName: string;
  address: string;
  dob: string;
  bloodGroup: string;
  projects: string[];
  semesters: {
    sem: number;
    gpa: number;
    subjects: { name: string; internal: number; external: number; total: number; grade: string }[];
  }[];
}

const allStudents: StudentRecord[] = [
  {
    id: "NEC21CS001", name: "Aditya Sharma", phone: "9876543210", email: "aditya@nec.edu", gender: "Male", dept: "CSE", year: "IV", graduationYear: 2025, cgpa: 9.2, status: "Active",
    feesPaid: 320000, feesTotal: 400000, attendance: 92, block: "A", section: "A", fatherName: "Rajesh Sharma", address: "Narasaraopet, Palnadu", dob: "2003-05-14", bloodGroup: "O+",
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
    id: "NEC21EC015", name: "Priya Reddy", phone: "9876543211", email: "priya@nec.edu", gender: "Female", dept: "ECE", year: "IV", graduationYear: 2025, cgpa: 8.8, status: "Active",
    feesPaid: 380000, feesTotal: 400000, attendance: 88, block: "B", section: "A", fatherName: "Venkat Reddy", address: "Guntur, AP", dob: "2003-08-22", bloodGroup: "A+",
    projects: ["Smart Home Automation", "Signal Processing Tool"],
    semesters: [
      { sem: 1, gpa: 8.5, subjects: [{ name: "Mathematics-I", internal: 26, external: 55, total: 81, grade: "A" }, { name: "Physics", internal: 24, external: 50, total: 74, grade: "B+" }, { name: "Basic Electronics", internal: 28, external: 58, total: 86, grade: "A" }, { name: "English", internal: 23, external: 47, total: 70, grade: "B" }] },
      { sem: 2, gpa: 8.7, subjects: [{ name: "Mathematics-II", internal: 27, external: 57, total: 84, grade: "A" }, { name: "Network Analysis", internal: 25, external: 52, total: 77, grade: "B+" }, { name: "Electronic Devices", internal: 29, external: 59, total: 88, grade: "A+" }, { name: "Signals & Systems", internal: 26, external: 55, total: 81, grade: "A" }] },
    ],
  },
  {
    id: "NEC22ME032", name: "Ravi Kumar", phone: "9876543212", email: "ravi@nec.edu", gender: "Male", dept: "MECH", year: "III", graduationYear: 2026, cgpa: 7.5, status: "Active",
    feesPaid: 240000, feesTotal: 300000, attendance: 78, block: "C", section: "B", fatherName: "Suresh Kumar", address: "Macherla, AP", dob: "2004-01-10", bloodGroup: "B+",
    projects: ["CNC Machine Design"],
    semesters: [
      { sem: 1, gpa: 7.2, subjects: [{ name: "Mathematics-I", internal: 20, external: 45, total: 65, grade: "B" }, { name: "Physics", internal: 22, external: 48, total: 70, grade: "B" }, { name: "Engineering Drawing", internal: 25, external: 52, total: 77, grade: "B+" }, { name: "Workshop", internal: 28, external: 55, total: 83, grade: "A" }] },
      { sem: 2, gpa: 7.6, subjects: [{ name: "Mathematics-II", internal: 22, external: 48, total: 70, grade: "B" }, { name: "Thermodynamics", internal: 24, external: 50, total: 74, grade: "B+" }, { name: "Mechanics of Solids", internal: 23, external: 49, total: 72, grade: "B+" }, { name: "Manufacturing", internal: 26, external: 54, total: 80, grade: "A" }] },
    ],
  },
  {
    id: "NEC22CS044", name: "Sneha Patil", phone: "9876543213", email: "sneha@nec.edu", gender: "Female", dept: "CSE", year: "III", graduationYear: 2026, cgpa: 9.5, status: "Active",
    feesPaid: 300000, feesTotal: 300000, attendance: 95, block: "A", section: "B", fatherName: "Arun Patil", address: "Vijayawada, AP", dob: "2004-03-18", bloodGroup: "O-",
    projects: ["Blockchain Voting System", "Hospital Management System", "Chat Application"],
    semesters: [
      { sem: 1, gpa: 9.3, subjects: [{ name: "Mathematics-I", internal: 30, external: 62, total: 92, grade: "A+" }, { name: "Physics", internal: 28, external: 58, total: 86, grade: "A" }, { name: "Programming in C", internal: 30, external: 65, total: 95, grade: "A+" }, { name: "English", internal: 27, external: 55, total: 82, grade: "A" }] },
      { sem: 2, gpa: 9.5, subjects: [{ name: "Mathematics-II", internal: 30, external: 63, total: 93, grade: "A+" }, { name: "Chemistry", internal: 28, external: 57, total: 85, grade: "A" }, { name: "Data Structures", internal: 30, external: 66, total: 96, grade: "A+" }, { name: "Digital Logic", internal: 29, external: 60, total: 89, grade: "A+" }] },
    ],
  },
  {
    id: "NEC23EE010", name: "Vikram Singh", phone: "9876543214", email: "vikram@nec.edu", gender: "Male", dept: "EEE", year: "II", graduationYear: 2027, cgpa: 8.1, status: "Active",
    feesPaid: 95000, feesTotal: 150000, attendance: 82, block: "D", section: "A", fatherName: "Harpal Singh", address: "Piduguralla, AP", dob: "2005-06-25", bloodGroup: "AB+",
    projects: ["Solar Panel Tracker"],
    semesters: [
      { sem: 1, gpa: 7.9, subjects: [{ name: "Mathematics-I", internal: 24, external: 50, total: 74, grade: "B+" }, { name: "Physics", internal: 22, external: 48, total: 70, grade: "B" }, { name: "Basic Electrical", internal: 27, external: 56, total: 83, grade: "A" }, { name: "English", internal: 25, external: 52, total: 77, grade: "B+" }] },
      { sem: 2, gpa: 8.3, subjects: [{ name: "Mathematics-II", internal: 26, external: 54, total: 80, grade: "A" }, { name: "Circuit Theory", internal: 25, external: 52, total: 77, grade: "B+" }, { name: "EM Theory", internal: 28, external: 58, total: 86, grade: "A" }, { name: "Measurements", internal: 27, external: 55, total: 82, grade: "A" }] },
    ],
  },
  {
    id: "NEC23IT022", name: "Anjali Devi", phone: "9876543215", email: "anjali@nec.edu", gender: "Female", dept: "IT", year: "II", graduationYear: 2027, cgpa: 8.9, status: "Active",
    feesPaid: 150000, feesTotal: 150000, attendance: 90, block: "B", section: "A", fatherName: "Ramesh Devi", address: "Sattenapalli, AP", dob: "2005-11-03", bloodGroup: "A-",
    projects: ["Library Management System"],
    semesters: [
      { sem: 1, gpa: 8.7, subjects: [{ name: "Mathematics-I", internal: 27, external: 56, total: 83, grade: "A" }, { name: "Physics", internal: 25, external: 53, total: 78, grade: "B+" }, { name: "Programming in C", internal: 29, external: 60, total: 89, grade: "A+" }, { name: "English", internal: 26, external: 54, total: 80, grade: "A" }] },
    ],
  },
  {
    id: "NEC21CE008", name: "Karthik Rao", phone: "9876543216", email: "karthik@nec.edu", gender: "Male", dept: "CIVIL", year: "IV", graduationYear: 2025, cgpa: 7.8, status: "Active",
    feesPaid: 350000, feesTotal: 400000, attendance: 80, block: "C", section: "A", fatherName: "Narasimha Rao", address: "Chilakaluripet, AP", dob: "2003-09-07", bloodGroup: "B-",
    projects: ["Green Building Design", "Structural Analysis Tool"],
    semesters: [
      { sem: 1, gpa: 7.5, subjects: [{ name: "Mathematics-I", internal: 22, external: 47, total: 69, grade: "B" }, { name: "Physics", internal: 23, external: 49, total: 72, grade: "B+" }, { name: "Surveying", internal: 26, external: 54, total: 80, grade: "A" }, { name: "English", internal: 21, external: 45, total: 66, grade: "B" }] },
    ],
  },
  {
    id: "NEC24CS005", name: "Meera Joshi", phone: "9876543217", email: "meera@nec.edu", gender: "Female", dept: "CSE", year: "I", graduationYear: 2028, cgpa: 9.0, status: "Active",
    feesPaid: 50000, feesTotal: 100000, attendance: 94, block: "A", section: "A", fatherName: "Prakash Joshi", address: "Narasaraopet, Palnadu", dob: "2006-02-20", bloodGroup: "O+",
    projects: [],
    semesters: [
      { sem: 1, gpa: 9.0, subjects: [{ name: "Mathematics-I", internal: 29, external: 61, total: 90, grade: "A+" }, { name: "Physics", internal: 27, external: 57, total: 84, grade: "A" }, { name: "Programming in C", internal: 30, external: 63, total: 93, grade: "A+" }, { name: "English", internal: 26, external: 55, total: 81, grade: "A" }] },
    ],
  },
  {
    id: "NEC22EC028", name: "Rahul Verma", phone: "9876543218", email: "rahul@nec.edu", gender: "Male", dept: "ECE", year: "III", graduationYear: 2026, cgpa: 8.3, status: "Active",
    feesPaid: 280000, feesTotal: 300000, attendance: 85, block: "B", section: "B", fatherName: "Mohan Verma", address: "Guntur, AP", dob: "2004-07-15", bloodGroup: "A+",
    projects: ["Drone Navigation System"],
    semesters: [
      { sem: 1, gpa: 8.0, subjects: [{ name: "Mathematics-I", internal: 25, external: 52, total: 77, grade: "B+" }, { name: "Physics", internal: 24, external: 50, total: 74, grade: "B+" }, { name: "Basic Electronics", internal: 27, external: 57, total: 84, grade: "A" }, { name: "English", internal: 23, external: 48, total: 71, grade: "B+" }] },
    ],
  },
  {
    id: "NEC23ME019", name: "Divya Lakshmi", phone: "9876543219", email: "divya@nec.edu", gender: "Female", dept: "MECH", year: "II", graduationYear: 2027, cgpa: 7.9, status: "Active",
    feesPaid: 140000, feesTotal: 150000, attendance: 83, block: "D", section: "A", fatherName: "Srinivas Lakshmi", address: "Vinukonda, AP", dob: "2005-04-12", bloodGroup: "B+",
    projects: ["3D Printing Research"],
    semesters: [
      { sem: 1, gpa: 7.7, subjects: [{ name: "Mathematics-I", internal: 22, external: 47, total: 69, grade: "B" }, { name: "Physics", internal: 24, external: 50, total: 74, grade: "B+" }, { name: "Engineering Drawing", internal: 27, external: 55, total: 82, grade: "A" }, { name: "Workshop", internal: 26, external: 53, total: 79, grade: "B+" }] },
    ],
  },
  {
    id: "NEC21MB003", name: "Suresh Babu", phone: "9876543220", email: "suresh@nec.edu", gender: "Male", dept: "MBA", year: "II", graduationYear: 2025, cgpa: 8.6, status: "Active",
    feesPaid: 180000, feesTotal: 200000, attendance: 87, block: "E", section: "A", fatherName: "Krishna Babu", address: "Narasaraopet, Palnadu", dob: "2001-12-01", bloodGroup: "O+",
    projects: ["Market Analysis Dashboard"],
    semesters: [
      { sem: 1, gpa: 8.4, subjects: [{ name: "Management Principles", internal: 26, external: 55, total: 81, grade: "A" }, { name: "Financial Accounting", internal: 25, external: 53, total: 78, grade: "B+" }, { name: "Business Statistics", internal: 28, external: 58, total: 86, grade: "A" }, { name: "Marketing", internal: 27, external: 56, total: 83, grade: "A" }] },
    ],
  },
  {
    id: "NEC24EE012", name: "Pooja Nair", phone: "9876543221", email: "pooja@nec.edu", gender: "Female", dept: "EEE", year: "I", graduationYear: 2028, cgpa: 8.7, status: "Active",
    feesPaid: 45000, feesTotal: 100000, attendance: 91, block: "D", section: "B", fatherName: "Gopinath Nair", address: "Markapur, AP", dob: "2006-10-08", bloodGroup: "AB-",
    projects: [],
    semesters: [
      { sem: 1, gpa: 8.7, subjects: [{ name: "Mathematics-I", internal: 27, external: 57, total: 84, grade: "A" }, { name: "Physics", internal: 26, external: 55, total: 81, grade: "A" }, { name: "Basic Electrical", internal: 29, external: 60, total: 89, grade: "A+" }, { name: "English", internal: 25, external: 53, total: 78, grade: "B+" }] },
    ],
  },
  {
    id: "NEC23AI007", name: "Harsha Vardhan", phone: "9876543222", email: "harsha@nec.edu", gender: "Male", dept: "CSE-AIML", year: "II", graduationYear: 2027, cgpa: 8.5, status: "Active",
    feesPaid: 130000, feesTotal: 150000, attendance: 86, block: "A", section: "C", fatherName: "Ranga Vardhan", address: "Guntur, AP", dob: "2005-03-30", bloodGroup: "A+",
    projects: ["Chatbot with NLP"],
    semesters: [
      { sem: 1, gpa: 8.3, subjects: [{ name: "Mathematics-I", internal: 26, external: 54, total: 80, grade: "A" }, { name: "Python Programming", internal: 29, external: 60, total: 89, grade: "A+" }, { name: "AI Fundamentals", internal: 27, external: 56, total: 83, grade: "A" }, { name: "English", internal: 24, external: 50, total: 74, grade: "B+" }] },
    ],
  },
  {
    id: "NEC23DS011", name: "Kavya Sri", phone: "9876543223", email: "kavya@nec.edu", gender: "Female", dept: "CSE-DS", year: "II", graduationYear: 2027, cgpa: 9.1, status: "Active",
    feesPaid: 150000, feesTotal: 150000, attendance: 93, block: "A", section: "C", fatherName: "Srinivas Rao", address: "Narasaraopet, Palnadu", dob: "2005-07-19", bloodGroup: "O-",
    projects: ["Data Visualization Dashboard", "Predictive Analytics"],
    semesters: [
      { sem: 1, gpa: 9.0, subjects: [{ name: "Mathematics-I", internal: 29, external: 61, total: 90, grade: "A+" }, { name: "Python Programming", internal: 30, external: 63, total: 93, grade: "A+" }, { name: "Statistics", internal: 28, external: 59, total: 87, grade: "A+" }, { name: "English", internal: 26, external: 55, total: 81, grade: "A" }] },
    ],
  },
];

const depts = ["All", "CSE", "ECE", "EEE", "MECH", "CIVIL", "IT", "CHEM", "MBA", "CSE-AIML", "CSE-DS", "AGRI", "CSE-CS"];

type DetailTab = "about" | "attendance" | "fees" | "exams" | "projects";

const sidebarItems: { key: DetailTab; label: string; icon: React.ElementType }[] = [
  { key: "about", label: "About Student", icon: UserRound },
  { key: "attendance", label: "Attendance", icon: ClipboardCheck },
  { key: "fees", label: "Fee Payment", icon: IndianRupee },
  { key: "exams", label: "Exam Marks", icon: BookOpen },
  { key: "projects", label: "Projects", icon: FolderGit2 },
];

const ProfileAvatar = ({ gender, size = "md" }: { gender: "Male" | "Female"; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = { sm: "w-10 h-10 text-lg", md: "w-16 h-16 text-2xl", lg: "w-24 h-24 text-4xl" };
  return (
    <div className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold ${gender === "Male" ? "bg-blue-100 text-blue-600" : "bg-pink-100 text-pink-600"}`}>
      {gender === "Male" ? <User className={size === "lg" ? "w-10 h-10" : size === "md" ? "w-7 h-7" : "w-5 h-5"} /> : <UserRound className={size === "lg" ? "w-10 h-10" : size === "md" ? "w-7 h-7" : "w-5 h-5"} />}
    </div>
  );
};

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
        <div className="bg-card rounded-xl shadow-card border border-border p-4 md:p-6 mb-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by Name, Roll No, or Phone..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <div className="relative">
            <select value={deptFilter} onChange={(e) => setDeptFilter(e.target.value)} className="appearance-none pl-4 pr-10 py-2 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring w-full sm:w-auto">
              {depts.map((d) => (<option key={d} value={d}>{d === "All" ? "All Departments" : d}</option>))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

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
              <div className="flex items-center gap-4 mb-3">
                <ProfileAvatar gender={student.gender} size="sm" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-foreground truncate">{student.name}</h3>
                  <p className="text-xs font-mono text-muted-foreground">{student.id}</p>
                </div>
                <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-full">{student.dept}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Phone className="w-3 h-3" /> {student.phone}
                <span className="mx-1">•</span>
                <Building2 className="w-3 h-3" /> Block {student.block}
                <span className="mx-1">•</span>
                Sec {student.section}
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
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
  const [activeTab, setActiveTab] = useState<DetailTab>("about");
  const feePercent = Math.round((student.feesPaid / student.feesTotal) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <button onClick={onBack} className="hover:text-secondary transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <ProfileAvatar gender={student.gender} size="md" />
          <div>
            <h1 className="font-display text-2xl font-bold">{student.name}</h1>
            <p className="text-primary-foreground/70 text-sm">{student.id} • {student.dept} • Section {student.section} • Block {student.block}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            {/* Profile Card */}
            <div className="bg-card rounded-xl border border-border shadow-card p-5 mb-4 text-center">
              <div className="flex justify-center mb-3">
                <ProfileAvatar gender={student.gender} size="lg" />
              </div>
              <h3 className="font-display font-bold text-foreground">{student.name}</h3>
              <p className="text-xs text-muted-foreground font-mono">{student.id}</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <BadgeCheck className="w-4 h-4 text-green-500" />
                <span className="text-xs font-semibold text-green-600">{student.status}</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="font-bold text-foreground">{student.cgpa}</p>
                  <p className="text-muted-foreground">CGPA</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="font-bold text-foreground">{student.attendance}%</p>
                  <p className="text-muted-foreground">Attend.</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
              {sidebarItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`w-full flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition-colors border-l-4 ${
                    activeTab === item.key
                      ? "bg-secondary/10 text-secondary border-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-transparent"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Content */}
          <main className="flex-1 min-w-0">
            {activeTab === "about" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <div className="bg-card rounded-xl p-6 border border-border shadow-card">
                  <h3 className="font-display font-bold text-foreground mb-4 text-lg">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    {[
                      { icon: UserRound, label: "Full Name", value: student.name },
                      { icon: BadgeCheck, label: "Roll Number", value: student.id },
                      { icon: Phone, label: "Phone Number", value: student.phone },
                      { icon: Mail, label: "Email", value: student.email },
                      { icon: Calendar, label: "Date of Birth", value: student.dob },
                      { icon: UserRound, label: "Father's Name", value: student.fatherName },
                      { icon: MapPin, label: "Address", value: student.address },
                      { icon: Building2, label: "Block / Section", value: `Block ${student.block} / Section ${student.section}` },
                      { icon: BookOpen, label: "Department", value: student.dept },
                      { icon: GraduationCap, label: "Year / Graduation", value: `${student.year} Year / ${student.graduationYear}` },
                      { icon: User, label: "Gender", value: student.gender },
                      { icon: BadgeCheck, label: "Blood Group", value: student.bloodGroup },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <item.icon className="w-4 h-4 text-secondary flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="font-semibold text-foreground truncate">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "attendance" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="bg-card rounded-xl p-6 border border-border shadow-card">
                  <h3 className="font-display font-bold text-foreground mb-6 text-lg">Attendance Overview</h3>
                  <div className="flex flex-col sm:flex-row items-center gap-8">
                    <div className="relative w-40 h-40">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="hsl(var(--secondary))" strokeWidth="3" strokeDasharray={`${student.attendance}, 100`} />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-foreground">{student.attendance}%</span>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm flex-1">
                      <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="text-muted-foreground">Total Working Days</span>
                        <span className="font-semibold text-foreground">220</span>
                      </div>
                      <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="text-muted-foreground">Days Present</span>
                        <span className="font-semibold text-green-600">{Math.round(220 * student.attendance / 100)}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="text-muted-foreground">Days Absent</span>
                        <span className="font-semibold text-red-500">{220 - Math.round(220 * student.attendance / 100)}</span>
                      </div>
                      <div className={`p-3 rounded-lg text-center font-bold ${student.attendance >= 75 ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-500"}`}>
                        {student.attendance >= 75 ? "✓ Eligible for Examinations" : "✗ Attendance Shortage — Not Eligible"}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "fees" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="bg-card rounded-xl p-6 border border-border shadow-card">
                  <h3 className="font-display font-bold text-foreground mb-6 text-lg">Fee Payment Details</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-xl p-4 text-center">
                        <p className="text-xs text-muted-foreground mb-1">Total Fees</p>
                        <p className="text-2xl font-bold text-foreground">₹{student.feesTotal.toLocaleString()}</p>
                      </div>
                      <div className="bg-green-500/5 rounded-xl p-4 text-center">
                        <p className="text-xs text-muted-foreground mb-1">Paid Amount</p>
                        <p className="text-2xl font-bold text-green-600">₹{student.feesPaid.toLocaleString()}</p>
                      </div>
                      <div className="bg-red-500/5 rounded-xl p-4 text-center">
                        <p className="text-xs text-muted-foreground mb-1">Balance Due</p>
                        <p className="text-2xl font-bold text-red-500">₹{(student.feesTotal - student.feesPaid).toLocaleString()}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Payment Progress</span>
                        <span className="font-semibold text-foreground">{feePercent}%</span>
                      </div>
                      <Progress value={feePercent} className="h-3" />
                    </div>
                    <div className="bg-muted/50 rounded-xl p-4">
                      <h4 className="font-semibold text-foreground text-sm mb-3">Payment History</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">1st Installment</span>
                          <span className="text-green-600 font-semibold">₹{Math.round(student.feesPaid * 0.5).toLocaleString()} — Paid</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">2nd Installment</span>
                          <span className="text-green-600 font-semibold">₹{Math.round(student.feesPaid * 0.3).toLocaleString()} — Paid</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">3rd Installment</span>
                          {student.feesPaid < student.feesTotal ? (
                            <span className="text-amber-500 font-semibold">₹{(student.feesTotal - student.feesPaid).toLocaleString()} — Pending</span>
                          ) : (
                            <span className="text-green-600 font-semibold">₹{Math.round(student.feesPaid * 0.2).toLocaleString()} — Paid</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "exams" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
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
                <div className="bg-card rounded-xl p-5 border border-border shadow-card text-center">
                  <p className="text-muted-foreground text-sm">Overall CGPA across {student.semesters.length} semesters</p>
                  <p className="text-4xl font-bold text-secondary mt-2">{student.cgpa}</p>
                </div>
              </motion.div>
            )}

            {activeTab === "projects" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="bg-card rounded-xl p-6 border border-border shadow-card">
                  <h3 className="font-display font-bold text-foreground mb-4 text-lg">Projects ({student.projects.length})</h3>
                  {student.projects.length === 0 ? (
                    <p className="text-muted-foreground text-sm">No projects submitted yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {student.projects.map((proj, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                            <FolderGit2 className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{proj}</p>
                            <p className="text-xs text-muted-foreground">Semester {i + 3} Project</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
