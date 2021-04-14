//Pour la gestion du localStorage, connexion et déconnexion d'un utilisateur
const TOKEN_KEY = "jwt";

export const login = () => {
  localStorage.setItem(TOKEN_KEY, "TestLogin");
  console.log("token" + localStorage.getItem(TOKEN_KEY));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};
