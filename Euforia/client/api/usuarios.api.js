import axios from "axios";

//Petición para la creación de un nuevo usuario
export const signupRequest = async (user) =>
  await axios.post("http://localhost:3000/api/users/signup/", user);

//Petición para inicio de sesión
export const signinRequest = async (user) =>
  await axios.post("http://localhost:3000/api/users/signin/", user);

//Petición para crear un nuevo token a partir del refreshToken
export const getNewAccessTokenRequest = async (refreshToken) => {
  const response = await axios.post(
    "http://localhost:3000/api/tokens/",
    {},
    {
      headers: {
        authorization: refreshToken,
      },
    }
  );
  return response.data;
};

//Petición para obtener el usuario a partir de un accessToken
export const getUserInfo = async (accessToken) => {
  const response = await axios.get(
    "http://localhost:3000/api/tokens/user/",
    {
      headers: {
        authorization: accessToken,
      },
    }
  );
  return response.data;
};
