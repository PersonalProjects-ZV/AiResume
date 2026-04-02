"use client";

import { motion } from "framer-motion";
import { ClipboardList, CheckCircle2, XCircle } from "lucide-react";

interface Section {
  present: boolean;
  feedback: string;
}

interface SectionFeedbackProps {
  sections: {
    contact: Section;
    experience: Section;
    education: Section;
    skills: Section;
    projects: Section;
  };
}

export default function SectionFeedback({ sections }: SectionFeedbackProps) {
  const sectionNames = ["contact", "experience", "education", "skills", "projects"] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6"
    >
      <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
        <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
        Section-wise Feedback
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {sectionNames.map((name) => {
          const section = sections[name];
          return (
            <div
              key={name}
              className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-slate-900/50"
            >
              {section.present ? (
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 shrink-0 mt-0.5" />
              )}
              <div>
                <p className="text-white font-medium capitalize text-xs sm:text-sm">{name}</p>
                <p className="text-slate-400 text-[10px] sm:text-xs mt-0.5">{section.feedback}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
