import { motion } from "framer-motion";
import { BookOpen, Users, Award, ArrowDown } from "lucide-react";
import campusImg from "@/assets/campus-hero.jpg";

const stats = [
  { icon: Users, value: "5000+", label: "Students" },
  { icon: BookOpen, value: "8", label: "Departments" },
  { icon: Award, value: "25+", label: "Years of Excellence" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={campusImg} alt="NEC Campus" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-hero opacity-85" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
            Welcome to NEC
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Student Information{" "}
            <span className="text-gradient-gold">Portal</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Access comprehensive student data, department details, academic records, and campus updates — all in one place.
          </p>

          <div className="flex flex-wrap gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-lg px-5 py-3"
              >
                <stat.icon className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-primary-foreground font-bold text-lg">{stat.value}</p>
                  <p className="text-primary-foreground/60 text-xs">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 text-primary-foreground/40 animate-float" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
