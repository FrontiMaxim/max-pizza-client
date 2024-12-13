import { URL_API } from "../../../shared/api";
import { DataRegistration } from "../models";

export const fetchRegistration = async (data: DataRegistration) => {
  const response = await fetch(`${URL_API}/auth/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return { isSuccess: true, error: "" };
  } else {
    const data = await response.json();

    return { isSuccess: false, error: data.message };
  }
};
