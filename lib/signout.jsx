import axios from "axios";

export async function signOut() {
  try {
    await axios.post("/api/signout");
  } catch (error) {
    console.error("Failed to sign out:", error);
  } finally {
    localStorage.removeItem("token");
  }
}
