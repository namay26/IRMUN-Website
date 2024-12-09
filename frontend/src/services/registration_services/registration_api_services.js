import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers:{
    "Content-Type": "application/json",
  }
})

export const AxiosRegistrationServices = async (endpoint, payload)=>{
  try{
    const response = await AxiosClient.post(endpoint, payload)
    return response.data
  }catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}
