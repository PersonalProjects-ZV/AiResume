"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ResultCardProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  items: string[];
}

export default function ResultCard({
  title,
  icon: Icon,
  iconColor,
  items,
}: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6"
    >
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${iconColor}`} />
        <h3 className="text-white font-semibold text-base sm:text-lg">{title}</h3>
      </div>
      <ul className="space-y-1.5 sm:space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
            <span className={`mt-1 sm:mt-1.5 w-1.5 h-1.5 rounded-full ${iconColor.replace("text-", "bg-")} shrink-0`} />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
