import axios from "axios";
import { getEndpointForRole } from "../api/endpointMapper";

const BASE_URL = "https://localhost:7170";

export const registrationService = {
  register: async (role: string, data: any) => {
    const endpoint = getEndpointForRole(role);
    const response = await axios.post(`${BASE_URL}${endpoint}`, data);
    return response.data;
  },
};

export const submitRegistration = async (module: string, data: any) => {
  try {
    const response = await axios.post(
      `https://localhost:7170/api/Auth/signup/${module}`,
      data
    );
    console.log("Registration successful:", response.data);
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
