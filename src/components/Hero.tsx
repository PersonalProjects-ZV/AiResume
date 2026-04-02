"use client";

import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div className="text-center py-8 sm:py-12 lg:py-16 px-2">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
        Analyze Your Resume
        <br />
        <span className="text-violet-500">with AI Intelligence</span>
      </h1>
      <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
        Upload your resume and get instant AI feedback score, strengths,
        weaknesses, ATS compatibility, and actionable suggestions to improve.
      </p>
    </div>
  );
}
