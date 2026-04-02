import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://resume-backend-production-e115.up.railway.app/api/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const analyzeResume = async (file: File) => {
  const formData = new FormData();
  formData.append("resume", file);

  const response = await api.post("/resume/analyze", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const healthCheck = async () => {
  const response = await api.get("/health");
  return response.data;
};
