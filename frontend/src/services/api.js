import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = async (values) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signinEmail`, values, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const registerUser = async (values) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, values, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(`${API_URL}/auth/signout`, {}, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};
