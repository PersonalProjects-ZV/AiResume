"use client";

import { Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 mt-auto">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-violet-500" />
          <span className="text-slate-400 text-xs sm:text-sm">
            AI Resume Analyzer &copy; {new Date().getFullYear()}
          </span>
        </div>
        <p className="text-slate-500 text-[10px] sm:text-xs">
          Powered by Groq AI &bull; Built with Next.js &amp; Redux
        </p>
      </div>
    </footer>
  );
}
