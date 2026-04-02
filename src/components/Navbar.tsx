"use client";

import { Brain } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-violet-500" />
            <span className="text-base sm:text-xl font-bold text-white">
              AI Resume <span className="text-violet-500">Analyzer</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
