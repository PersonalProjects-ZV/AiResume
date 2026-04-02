"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { motion } from "framer-motion";
import {
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
  FileText,
} from "lucide-react";
import ScoreChart from "./ScoreChart";
import ResultCard from "./ResultCard";
import KeywordBadges from "./KeywordBadges";
import SectionFeedback from "./SectionFeedback";

export default function AnalysisResults() {
  const { analysis, loading, error } = useSelector(
    (state: RootState) => state.resume
  );

  if (error) {
    return (
      <div className="max-w-4xl mx-auto mt-6 sm:mt-8 px-2 sm:px-0">
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 sm:p-6 text-center">
          <p className="text-red-400 font-medium text-sm sm:text-base">{error}</p>
        </div>
      </div>
    );
  }

  if (!analysis || loading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mt-8 sm:mt-12 space-y-4 sm:space-y-6 lg:space-y-8 pb-10 sm:pb-16 px-2 sm:px-0"
    >
      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6"
      >
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
          <h3 className="text-white font-semibold text-base sm:text-lg">Summary</h3>
        </div>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          {analysis.summary}
        </p>
      </motion.div>

      {/* Scores */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 sm:p-8"
      >
        <div className="flex justify-center gap-8 sm:gap-12 lg:gap-16 flex-wrap">
          <ScoreChart score={analysis.score} label="Overall Score" />
          <ScoreChart score={analysis.atsScore} label="ATS Score" />
        </div>
      </motion.div>

      {/* Strengths, Weaknesses, Suggestions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <ResultCard
          title="Strengths"
          icon={ThumbsUp}
          iconColor="text-green-400"
          items={analysis.strengths}
        />
        <ResultCard
          title="Weaknesses"
          icon={ThumbsDown}
          iconColor="text-red-400"
          items={analysis.weaknesses}
        />
        <ResultCard
          title="Suggestions"
          icon={Lightbulb}
          iconColor="text-amber-400"
          items={analysis.suggestions}
        />
      </div>

      {/* Keywords */}
      <KeywordBadges
        found={analysis.keywords.found}
        missing={analysis.keywords.missing}
      />

      {/* Section Feedback */}
      <SectionFeedback sections={analysis.sections} />
    </motion.div>
  );
}
