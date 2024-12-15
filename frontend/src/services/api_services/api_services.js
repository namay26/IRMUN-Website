import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "https://irmun.iitr.ac.in",
  headers:{
    "Content-Type": "application/json",
  }
})

export const AxiosServices = async (endpoint, payload)=>{
  try{
    const response = await AxiosClient.post(endpoint, payload)
    return response.data
  }catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}
