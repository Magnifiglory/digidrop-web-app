import { getToken } from "@/lib/auth";
import axios from "axios"

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true,
    headers:{
        "Content-Type": "application/json",
    }
})

apiClient.interceptors.request.use(async (config) => {
  if (config.url === '/login') {
    return config;
  }
  const accessToken = await getToken()
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});