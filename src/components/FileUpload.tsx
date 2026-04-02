"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { analyzeResumeThunk, resetAnalysis } from "@/store/resumeSlice";
import { AppDispatch, RootState } from "@/store/store";
import { Upload, FileText, Loader2, RotateCcw } from "lucide-react";
import toast from "react-hot-toast";

export default function FileUpload() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, fileName } = useSelector((state: RootState) => state.resume);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        toast.error("Only PDF and DOCX files are allowed!");
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size must be less than 10MB!");
        return;
      }

      toast.promise(dispatch(analyzeResumeThunk(file)).unwrap(), {
        loading: "Analyzing your resume...",
        success: "Resume analyzed successfully!",
        error: (err) => err || "Failed to analyze resume",
      });
    },
    [dispatch]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxFiles: 1,
    disabled: loading,
  });

  return (
    <div className="max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-6 sm:p-10 text-center cursor-pointer transition-all duration-300 ${
          isDragActive
            ? "border-violet-500 bg-violet-500/10"
            : loading
            ? "border-slate-700 bg-slate-800/50 cursor-not-allowed"
            : "border-slate-700 bg-slate-800/30 hover:border-violet-500/50 hover:bg-slate-800/50"
        }`}
      >
        <input {...getInputProps()} />
        {loading ? (
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Loader2 className="w-10 h-10 sm:w-12 sm:h-12 text-violet-500 animate-spin" />
            <p className="text-slate-300 text-base sm:text-lg font-medium">
              Analyzing your resume...
            </p>
            <p className="text-slate-500 text-xs sm:text-sm">This may take a few seconds</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            {fileName ? (
              <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-violet-500" />
            ) : (
              <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-slate-500" />
            )}
            <p className="text-slate-300 text-base sm:text-lg font-medium break-all px-2">
              {isDragActive
                ? "Drop your resume here"
                : fileName
                ? fileName
                : "Drag & drop your resume here"}
            </p>
            <p className="text-slate-500 text-xs sm:text-sm">
              Supports PDF and DOCX (max 10MB)
            </p>
          </div>
        )}
      </div>

      {fileName && !loading && (
        <button
          onClick={() => dispatch(resetAnalysis())}
          className="mt-3 sm:mt-4 mx-auto flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-violet-400 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Upload a different resume
        </button>
      )}
    </div>
  );
}
