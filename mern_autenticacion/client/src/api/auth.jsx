import axios from "./axios";

//Hacer las peticiones al servidor por medio de axios
export const signupRequest = async (user) => await axios.post("/signup/", user);
export const signinRequest = async (user) => await axios.post("/signin/", user);
export const signoutRequest = async () => await axios.post("/signout/");
export const getUserRequest = async () => await axios.get("/profile/");
