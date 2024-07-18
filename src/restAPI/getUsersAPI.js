import axios from "axios";

export async function getAllUsers(setUsers) {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response?.data);
  } catch (error) {
    console.log("🚀 ~ getAllUsers ~ error:", error);
  }
}
