import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { analyzeResume } from "@/services/api";

interface SectionFeedback {
  present: boolean;
  feedback: string;
}

interface ResumeAnalysis {
  score: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  keywords: {
    found: string[];
    missing: string[];
  };
  atsScore: number;
  sections: {
    contact: SectionFeedback;
    experience: SectionFeedback;
    education: SectionFeedback;
    skills: SectionFeedback;
    projects: SectionFeedback;
  };
}

interface ResumeState {
  analysis: ResumeAnalysis | null;
  loading: boolean;
  error: string | null;
  fileName: string | null;
}

const initialState: ResumeState = {
  analysis: null,
  loading: false,
  error: null,
  fileName: null,
};

export const analyzeResumeThunk = createAsyncThunk(
  "resume/analyze",
  async (file: File, { rejectWithValue }) => {
    try {
      const response = await analyzeResume(file);
      return { data: response.data, fileName: file.name };
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } }; message?: string };
      return rejectWithValue(
        err.response?.data?.message || err.message || "Failed to analyze resume"
      );
    }
  }
);

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    resetAnalysis: (state) => {
      state.analysis = null;
      state.error = null;
      state.fileName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(analyzeResumeThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.analysis = null;
      })
      .addCase(analyzeResumeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.analysis = action.payload.data;
        state.fileName = action.payload.fileName;
      })
      .addCase(analyzeResumeThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetAnalysis } = resumeSlice.actions;
export default resumeSlice.reducer;
