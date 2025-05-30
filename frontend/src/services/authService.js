export const loginUser = async (email, password) => {
  // Simulation : remplace ceci par un vrai appel API plus tard
  if (email === "admin@vet.com" && password === "1234") {
    return {
      success: true,
      user: { id: 1, name: "Admin", email },
      token: "fake-jwt-token"
    };
  }
  return {
    success: false,
    message: "Identifiants incorrects"
  };
};

export const logoutUser = async () => {
  return true;
};
