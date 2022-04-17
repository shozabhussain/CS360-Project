
export const userAcessToken = () => {
  const accessToken =
    localStorage.getItem("accessToken") !== "undefined"
      ? JSON.parse(localStorage.getItem("accessToken"))
      : ""

  return accessToken;
};
