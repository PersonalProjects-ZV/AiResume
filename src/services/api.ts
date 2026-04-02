import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/v1";

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
