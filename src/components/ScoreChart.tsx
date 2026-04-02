"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ScoreChartProps {
  score: number;
  label: string;
}

const getColor = (score: number) => {
  if (score >= 80) return "#22c55e";
  if (score >= 60) return "#eab308";
  if (score >= 40) return "#f97316";
  return "#ef4444";
};

export default function ScoreChart({ score, label }: ScoreChartProps) {
  const color = getColor(score);

  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
      <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
        <CircularProgressbar
          value={score}
          text={`${score}`}
          styles={buildStyles({
            textSize: "28px",
            textColor: color,
            pathColor: color,
            trailColor: "#1e293b",
            pathTransitionDuration: 1.5,
          })}
        />
      </div>
      <p className="text-slate-400 text-xs sm:text-sm font-medium">{label}</p>
    </div>
  );
}
