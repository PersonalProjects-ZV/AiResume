"use client";

import { motion } from "framer-motion";
import { Key, AlertTriangle } from "lucide-react";

interface KeywordBadgesProps {
  found: string[];
  missing: string[];
}

export default function KeywordBadges({ found, missing }: KeywordBadgesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6"
    >
      <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
        <Key className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
        Keywords Analysis
      </h3>

      <div className="mb-3 sm:mb-4">
        <p className="text-green-400 text-xs sm:text-sm font-medium mb-2">Found in Resume</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {found.map((keyword, index) => (
            <span
              key={index}
              className="bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-amber-400 text-xs sm:text-sm font-medium mb-2 flex items-center gap-1">
          <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          Missing Keywords
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {missing.map((keyword, index) => (
            <span
              key={index}
              className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
