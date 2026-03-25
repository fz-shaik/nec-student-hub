import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-secondary" />
            <span className="font-display text-sm font-bold text-primary-foreground">
              Narasaraopet Engineering College
            </span>
          </div>
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} NEC Student Information System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
