import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

const sampleStudents = [
  { id: "NEC21CS001", name: "Aditya Sharma", dept: "CSE", year: "IV", cgpa: 9.2, status: "Active" },
  { id: "NEC21EC015", name: "Priya Reddy", dept: "ECE", year: "IV", cgpa: 8.8, status: "Active" },
  { id: "NEC22ME032", name: "Ravi Kumar", dept: "MECH", year: "III", cgpa: 7.5, status: "Active" },
  { id: "NEC22CS044", name: "Sneha Patil", dept: "CSE", year: "III", cgpa: 9.5, status: "Active" },
  { id: "NEC23EE010", name: "Vikram Singh", dept: "EEE", year: "II", cgpa: 8.1, status: "Active" },
  { id: "NEC23IT022", name: "Anjali Devi", dept: "IT", year: "II", cgpa: 8.9, status: "Active" },
  { id: "NEC21CE008", name: "Karthik Rao", dept: "CIVIL", year: "IV", cgpa: 7.8, status: "Active" },
  { id: "NEC24CS005", name: "Meera Joshi", dept: "CSE", year: "I", cgpa: 9.0, status: "Active" },
  { id: "NEC22EC028", name: "Rahul Verma", dept: "ECE", year: "III", cgpa: 8.3, status: "Active" },
  { id: "NEC23ME019", name: "Divya Lakshmi", dept: "MECH", year: "II", cgpa: 7.9, status: "Active" },
  { id: "NEC21MB003", name: "Suresh Babu", dept: "MBA", year: "II", cgpa: 8.6, status: "Active" },
  { id: "NEC24EE012", name: "Pooja Nair", dept: "EEE", year: "I", cgpa: 8.7, status: "Active" },
];

const depts = ["All", "CSE", "ECE", "EEE", "MECH", "CIVIL", "IT", "CHEM", "MBA"];

const StudentDirectory = () => {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");

  const filtered = useMemo(() => {
    return sampleStudents.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase());
      const matchDept = deptFilter === "All" || s.dept === deptFilter;
      return matchSearch && matchDept;
    });
  }, [search, deptFilter]);

  return (
    <section id="students" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Records</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Student Directory</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl shadow-card border border-border overflow-hidden"
        >
          {/* Filters */}
          <div className="p-4 md:p-6 border-b border-border flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <select
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                className="appearance-none pl-10 pr-10 py-2 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring w-full sm:w-auto"
              >
                {depts.map((d) => (
                  <option key={d} value={d}>{d === "All" ? "All Departments" : d}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left px-6 py-3 font-semibold text-foreground">Roll No</th>
                  <th className="text-left px-6 py-3 font-semibold text-foreground">Name</th>
                  <th className="text-left px-6 py-3 font-semibold text-foreground">Dept</th>
                  <th className="text-left px-6 py-3 font-semibold text-foreground">Year</th>
                  <th className="text-left px-6 py-3 font-semibold text-foreground">CGPA</th>
                  <th className="text-left px-6 py-3 font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((student, i) => (
                  <tr
                    key={student.id}
                    className="border-t border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-3 font-mono text-xs text-muted-foreground">{student.id}</td>
                    <td className="px-6 py-3 font-medium text-foreground">{student.name}</td>
                    <td className="px-6 py-3">
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-secondary/20 text-secondary-foreground">
                        {student.dept}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-muted-foreground">{student.year}</td>
                    <td className="px-6 py-3 font-semibold text-foreground">{student.cgpa}</td>
                    <td className="px-6 py-3">
                      <span className="inline-flex items-center gap-1 text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-muted-foreground">
                      No students found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-border text-sm text-muted-foreground">
            Showing {filtered.length} of {sampleStudents.length} students
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentDirectory;
