import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Phone, Building2, BookOpen, User, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const quickStudents = [
  { id: "NEC21CS001", name: "Aditya Sharma", phone: "9876543210", gender: "Male" as const, dept: "CSE", block: "A", section: "A", year: "IV" },
  { id: "NEC21EC015", name: "Priya Reddy", phone: "9876543211", gender: "Female" as const, dept: "ECE", block: "B", section: "A", year: "IV" },
  { id: "NEC22ME032", name: "Ravi Kumar", phone: "9876543212", gender: "Male" as const, dept: "MECH", block: "C", section: "B", year: "III" },
  { id: "NEC22CS044", name: "Sneha Patil", phone: "9876543213", gender: "Female" as const, dept: "CSE", block: "A", section: "B", year: "III" },
  { id: "NEC23EE010", name: "Vikram Singh", phone: "9876543214", gender: "Male" as const, dept: "EEE", block: "D", section: "A", year: "II" },
  { id: "NEC23IT022", name: "Anjali Devi", phone: "9876543215", gender: "Female" as const, dept: "IT", block: "B", section: "A", year: "II" },
  { id: "NEC24CS005", name: "Meera Joshi", phone: "9876543217", gender: "Female" as const, dept: "CSE", block: "A", section: "A", year: "I" },
  { id: "NEC23AI007", name: "Harsha Vardhan", phone: "9876543222", gender: "Male" as const, dept: "CSE-AIML", block: "A", section: "C", year: "II" },
  { id: "NEC23DS011", name: "Kavya Sri", phone: "9876543223", gender: "Female" as const, dept: "CSE-DS", block: "A", section: "C", year: "II" },
];

const StudentSearchSection = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return quickStudents.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q) ||
        s.phone.includes(q) ||
        s.dept.toLowerCase().includes(q) ||
        s.block.toLowerCase() === q ||
        s.section.toLowerCase() === q
    );
  }, [query]);

  return (
    <section id="search" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-2">Quick Lookup</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Search Student</h2>
          <p className="text-muted-foreground mt-2 text-sm">Search by Roll No, Name, Phone, Department, Block, or Section</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Enter Roll No, Name, Phone, Branch, Block, or Section..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 h-14 text-base rounded-xl shadow-card border-border"
            />
          </div>

          {/* Results */}
          {query.trim() && (
            <div className="mt-4 space-y-2">
              {results.length > 0 ? (
                results.map((s) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => navigate("/students")}
                    className="bg-card rounded-xl p-4 border border-border hover:border-secondary/30 shadow-card cursor-pointer transition-all flex items-center gap-4"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${s.gender === "Male" ? "bg-blue-100 text-blue-600" : "bg-pink-100 text-pink-600"}`}>
                      {s.gender === "Male" ? <User className="w-5 h-5" /> : <UserRound className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{s.id}</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {s.dept}</span>
                      <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> Block {s.block}</span>
                      <span>Sec {s.section}</span>
                      <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {s.phone}</span>
                    </div>
                    <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-full">Year {s.year}</span>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  No students found for "{query}"
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default StudentSearchSection;
